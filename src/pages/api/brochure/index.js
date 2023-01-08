import cookie from "cookie";
import mongoose from "mongoose";
import moment from "moment";
import sendEmail2 from "../../../lib/sendMail2";
import Brochure from "../../../models/Brochure";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      return res.status(400).json({ success: true });
      break;
    case "POST":
      try {
        const newRecord = await Brochure.create({
          ...req.body,
        });

        let messageData = {
          from: "Chislon And Partners <no-reply@chislonandpartners.co.uk>",
          to: newRecord.email,
          subject: "BROCHURE MESSAGE",
          html: `
          <br />
          <br />
          <p><b>Date:</b> ${moment(new Date()).format("MMM Do YYYY")}</p> <br />
          <p>Dear ${newRecord.firstname.toUpperCase()} ${newRecord.lastname.toUpperCase()},</p> <br />
          <br />
          We hereby acknowledge the receipt of your completed brochure enquiry form. One of our representatives will contact you within 48 working hours regarding your enquiry. <br />
          Chislon and Partners is an immigration consultancy firm, with a dedicated unit for investment migration services. We partner with government agencies, corporate entities, high net worth individuals, educational institutions and immigration attorneys. <br />
          Our range of services includes family visas, student visas, medical tourism, work visas, entrepreneur visas, second citizenships, sports visas. Our services are designed to enhance seamless global mobility <br />
          For further information, please join our 24-hour conversation platforms or you may also wish to visit our website (s): chislonandpartners.co.uk; chislonandpartners.com. You can also send us e-mail message via: info@chislonandpartners.com. <br />
          
          
          <br /><br /><br />
          
          Yours Sincerely<br /><br />
          Customer Representative
          <br /><br /><br />
          <hr /> 
          <br /><br />
          <i>Chislon and Partners is a private immigration consulting firm and not a government immigration agency. Our values, policies and operation standards are designed to meet all international regulations and laws such as anti-money laundering, anti-modern slavery, anti-discrimination and anti-corruption regulations. Our corporate headquarters is at Plot 1003, Constitution Avenue, Central Business District, Abuja Nigeria. </i>
          
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
