import mongoose from "mongoose";

/* ContactSchema will correspond to a collection in your MongoDB database. */

const ContactSchema = new mongoose.Schema(
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
    message: {
      type: String,
    },
    salutation: {
      type: String,
    },
    nationality: {
      type: String,
    },
    country_of_residence: {
      type: String,
    },
    role: {
      type: String,
      default: "contact",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
