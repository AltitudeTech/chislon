import mongoose from "mongoose";

/* EmployerSchema will correspond to a collection in your MongoDB database. */

const EmployerSchema = new mongoose.Schema(
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
    company: {
      type: String,
      required: [true, "Please provide a company name"],
      maxlength: [40, "Company name cannot be more than 40 characters"],
    },
    contactby: {
      type: String,
    },
    company_location: {
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
      default: "employer",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Employer ||
  mongoose.model("Employer", EmployerSchema);
