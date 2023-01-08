import mongoose from "mongoose";

/* ReferralSchema will correspond to a collection in your MongoDB database. */

const ReferralSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please provide your firstname."],
      maxlength: [20, "Firstname cannot be more than 60 characters"],
    },
    referred_firstname: {
      type: String,
      required: [true, "Please provide your referral firstname."],
      maxlength: [40, "Referral firstname cannot be more than 40 characters"],
    },
    lastname: {
      type: String,
      required: [true, "Please provide your lastname."],
      maxlength: [40, "Lastname cannot be more than 40 characters"],
    },
    referred_surname: {
      type: String,
      required: [true, "Please provide your referral surname."],
      maxlength: [40, "Referral surname cannot be more than 40 characters"],
    },
    phone: {
      type: String,
      required: [true, "Please provide your phone number"],
    },
    referred_phone: {
      type: String,
      required: [true, "Please provide your referral phone number"],
    },
    email: {
      type: String,
      required: [true, "Please provide a valid email address"],
    },
    referred_email: {
      type: String,
      required: [
        true,
        "Please provide a valid email address for your referral",
      ],
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
      default: "referral",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Referral ||
  mongoose.model("Referral", ReferralSchema);
