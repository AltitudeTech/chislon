import mongoose from "mongoose";

/* BrochureSchema will correspond to a collection in your MongoDB database. */

const BrochureSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please provide your firstname."],
      maxlength: [20, "Firstname cannot be more than 60 characters"],
    },
    lastname: {
      type: String,
      required: [true, "Please provide your lastname."],
      maxlength: [20, "Lastname cannot be more than 60 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Please provide your phone number"],
    },
    role: {
      type: String,
      default: "brochure",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Brochure ||
  mongoose.model("Brochure", BrochureSchema);
