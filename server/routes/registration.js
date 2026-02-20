import express from "express";
import Registration from "../models/Registration.js";

const router = express.Router();

// POST /api/register — Create a new team registration
router.post("/", async (req, res) => {
    try {
        const { teamInfo, leader, member2, member3, member4, compliance } = req.body;

        // Basic validation
        if (!teamInfo || !leader || !member2 || !compliance) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields: teamInfo, leader, member2, and compliance are required.",
            });
        }

        // Build the registration document
        const registrationData = {
            teamInfo,
            leader,
            member2,
            compliance,
        };

        // Only include member3/member4 if the team size warrants it
        if (parseInt(teamInfo.teamSize) >= 3 && member3) {
            registrationData.member3 = member3;
        }
        if (parseInt(teamInfo.teamSize) >= 4 && member4) {
            registrationData.member4 = member4;
        }

        const registration = new Registration(registrationData);
        await registration.save();

        res.status(201).json({
            success: true,
            message: "Registration successful! 🎉",
            data: { teamName: teamInfo.teamName, id: registration._id },
        });
    } catch (error) {
        // Handle duplicate key errors (team name or email already exists)
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            let friendlyMessage = "A duplicate entry was found.";
            if (field.includes("teamName")) {
                friendlyMessage = "A team with this name already exists. Please choose a different team name.";
            } else if (field.includes("email")) {
                friendlyMessage = "This leader email is already registered with another team.";
            }
            return res.status(409).json({ success: false, message: friendlyMessage });
        }

        // Handle Mongoose validation errors
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((e) => e.message);
            return res.status(400).json({
                success: false,
                message: "Validation failed.",
                errors: messages,
            });
        }

        console.error("Registration error:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again later.",
        });
    }
});

// GET /api/register — Get all registrations (admin)
router.get("/", async (req, res) => {
    try {
        const registrations = await Registration.find().sort({ createdAt: -1 });
        res.json({ success: true, count: registrations.length, data: registrations });
    } catch (error) {
        console.error("Fetch registrations error:", error);
        res.status(500).json({ success: false, message: "Failed to fetch registrations." });
    }
});

export default router;
