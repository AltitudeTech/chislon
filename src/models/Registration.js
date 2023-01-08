import mongoose from "mongoose";

/* RegistrationSchema will correspond to a collection in your MongoDB database. */

const RegistrationSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please provide your firstname."],
      maxlength: [20, "Firstname cannot be more than 60 characters"],
    },
    lastname: {
      type: String,
      required: [true, "Please provide your lastname."],
      maxlength: [40, "Lastname cannot be more than 40 characters"],
    },
    phone: {
      type: String,
      required: [true, "Please provide your phone number"],
    },
    email: {
      type: String,
      required: [true, "Please provide a valid email address"],
    },
    employment_type: {
      type: String,
      required: [true, "Please provide your employment type."],
      maxlength: [40, "Employment type cannot be more than 40 characters"],
    },
    destination: {
      type: String,
      required: [true, "Please provide your destination."],
      maxlength: [40, "Destination cannot be more than 40 characters"],
    },
    profession: {
      type: String,
      required: [true, "Please provide your profession."],
      maxlength: [40, "Profession cannot be more than 40 characters"],
    },
    allied_profession: {
      type: String,
    },
    message: {
      type: String,
    },

    reference: {
      type: Number,
      unique: true,
      default: 1000,
    },
    role: {
      type: String,
      default: "registration",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Registration ||
  mongoose.model("Registration", RegistrationSchema);
