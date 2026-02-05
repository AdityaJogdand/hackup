import cv2
import numpy as np

# Load image
img = cv2.imread("c.png")
if img is None:
    raise ValueError("Image not found")

# Convert to BGRA (add alpha channel)
bgra = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)

# Convert to HSV
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
h, s, v = cv2.split(hsv)

# Checkerboard characteristics:
# - Very low saturation
# - Medium brightness (not dark, not pure white)

checker_mask = (
    (s < 25) &        # low saturation
    (v > 150) &       # light gray
    (v < 230)         # not pure white
)

# Clean mask (remove noise)
kernel = np.ones((3, 3), np.uint8)
checker_mask = cv2.morphologyEx(
    checker_mask.astype(np.uint8),
    cv2.MORPH_CLOSE,
    kernel,
    iterations=2
)

# Make checkerboard transparent
bgra[:, :, 3][checker_mask == 1] = 0

# Save result
cv2.imwrite("output_transparent.png", bgra)

print("✔ Checkerboard removed, rest preserved")
