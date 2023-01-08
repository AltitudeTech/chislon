import cookie from "cookie";
import mongoose from "mongoose";
import moment from "moment";
import Employer from "../../../models/Employer";
import dbConnect from "../../../lib/dbConnect";
import sendEmail2 from "../../../lib/sendMail2";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      return res.status(400).json({ success: true });
      break;
    case "POST":
      try {
        let newRecord;
        const allRecords = await Employer.find().sort({ createdAt: -1 });
        if (allRecords && allRecords.length > 0) {
          newRecord = await Employer.create({
            ...req.body,
            reference: allRecords[0].reference + 1,
          });
        } else {
          newRecord = await Employer.create({
            ...req.body,
          });
        }

        // let mailRes = await sendEmail2();

        let messageData = {
          from: "Chislon And Partners <no-reply@chislonandpartners.co.uk>",
          to: newRecord.email,
          subject: "EMPLOYER REGISTRATION",
          html: `
          <br />
          <br />
          <p><b>Date:</b> ${moment(new Date()).format("MMM Do YYYY")}</p> <br />
          <p><b>Dear</b> ${newRecord.firstname.toUpperCase()} ${newRecord.lastname.toUpperCase()},</p> <br />
          <br />
          <b>YOUR UNIQUE EMPLOYER REFERENCE NUMBER: UD/${
            newRecord.reference
          }/${moment(new Date()).format("YYYY")} </b> <br /><br />

          Thank you for submitting the Employer Contact Request form. One of our business development representatives will contact you within the next 48 working hours. <br />
          Eirene Healthcare is an international healthcare recruitment company with unrivalled record of excellent recruitment services. We recruit doctors, nurses and healthcare professionals on behalf of hospitals, care homes, and other healthcare institutions. <br />
          We currently provide temporary and permanent staffing solutions in several countries including: United States of America, United Kingdom, Canada, Australia, New Zealand and Republic of Ireland. <br />
          For further details on our offerings, you may join our conversations via our social media channels, and you may also send us an email: info@chislonandpartners.co.uk. <br />
          <br /><br />
          Yours Faithfully,<br /><br />

          Recruitment Team 
          `,
        };
        await sendEmail2(messageData);

        return res.status(201).json({ success: true, data: newRecord });
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }
    default:
      return res.status(400).json({ success: false });
  }
}
