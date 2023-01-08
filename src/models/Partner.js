import mongoose from "mongoose";

/* PartnerSchema will correspond to a collection in your MongoDB database. */

const PartnerSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please provide your firstname."],
      maxlength: [40, "Firstname cannot be more than 40 characters"],
    },
    lastname: {
      type: String,
      required: [true, "Please provide your lastname."],
      maxlength: [40, "Lastname cannot be more than 40 characters"],
    },
    organization: {
      type: String,
      required: [true, "Please provide your organization name."],
      maxlength: [40, "Organization name cannot be more than 40 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Please provide your work phone number"],
    },
    business_sector: {
      type: String,
      required: [true, "Please provide your business sector."],
      maxlength: [40, "Business sector cannot be more than 40 characters"],
    },
    message: {
      type: String,
    },
    country: {
      type: String,
    },

    role: {
      type: String,
      default: "partner",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Partner ||
  mongoose.model("Partner", PartnerSchema);
