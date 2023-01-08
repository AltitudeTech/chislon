import mongoose from "mongoose";

/* EventSchema will correspond to a collection in your MongoDB database. */

const EventSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please provide your fullname."],
      maxlength: [20, "Fullname cannot be more than 60 characters"],
    },

    email: {
      type: String,
      required: [true, "Please provide a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Please provide your phone number"],
    },
    event_name: {
      type: String,
    },
    role: {
      type: String,
      default: "event",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
