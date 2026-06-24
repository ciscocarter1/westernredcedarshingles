export type Step = { name: string; text: string };

export const EXTERIOR_STEPS: Step[] = [
  { name: "Gather materials", text: "Cedar shingles, galvanized nails, chalk line, level, tape measure, hand saw or circular saw." },
  { name: "Prepare the wall surface", text: "Install sheathing if needed and apply a weather-resistant barrier across the entire wall." },
  { name: "Snap your starting line", text: "Use a chalk line to mark a level line for the first course at the base of the wall." },
  { name: "Place the first course", text: "Begin at the bottom — set first course shingles with the butt edge aligned to the chalk line." },
  { name: "Nail the shingles", text: "Drive each nail approximately 2 inches above the butt line and 3/4 inch from each edge. Use two nails per shingle. Shingles wider than 8 inches get two additional center nails." },
  { name: "Leave expansion gaps", text: "Maintain 1/8 inch spacing between adjacent shingles in a course to allow natural expansion." },
  { name: "Overlap and stagger", text: "Each successive course overlaps the one below. Offset joints by at least 1.5 inches from the course below." },
  { name: "Work upward course by course", text: "Continue snapping level lines and repeating courses until you reach the top of the wall." },
];

export const INTERIOR_STEPS: Step[] = [
  { name: "Prep the wall", text: "Make sure the wall is clean, dry, and flat." },
  { name: "Mark level course lines", text: "Use a chalk line and level to mark horizontal guides across the wall." },
  { name: "Start at the bottom", text: "Begin at the base and work upward — easier to keep courses level." },
  { name: "Attach with adhesive + brads", text: "Use construction adhesive and brad nails. Structural nailing isn't required on interior walls." },
  { name: "Space and stagger", text: "Leave slight gaps between shingles for a natural look and stagger joints course to course." },
  { name: "Trim edges", text: "Use a miter saw to trim the perimeter cleanly." },
  { name: "Finish (optional)", text: "Seal, stain, or leave natural — untreated cedar weathers to a beautiful silver-gray." },
];
