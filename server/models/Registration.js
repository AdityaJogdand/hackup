import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    college: { type: String, required: true },
    customCollege: { type: String, default: "" },
    city: { type: String, required: true },
    state: { type: String, required: true },
    degree: { type: String, required: true },
    year: { type: String, required: true },
    branch: { type: String, required: true },
    linkedin: { type: String, default: "" },
    github: { type: String, default: "" },
    food: { type: String, required: true },
    tshirt: { type: String, required: true },
});

const registrationSchema = new mongoose.Schema(
    {
        teamInfo: {
            teamName: { type: String, required: true },
            teamSize: { type: String, required: true },
            track: { type: String, required: true },
            source: { type: String, required: true },
        },
        leader: { type: memberSchema, required: true },
        member2: { type: memberSchema, required: true },
        member3: { type: memberSchema, default: null },
        member4: { type: memberSchema, default: null },
        compliance: {
            codeOfConduct: { type: Boolean, required: true },
            sponsorConsent: { type: Boolean, required: true },
            communityInterest: { type: String, required: true },
        },
    },
    { timestamps: true }
);

// Prevent duplicate team names
registrationSchema.index({ "teamInfo.teamName": 1 }, { unique: true });

// Prevent duplicate leader emails
registrationSchema.index({ "leader.email": 1 }, { unique: true });

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;
