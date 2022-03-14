import React from "react";

export default function VisaImage({ image = "visaImage.jpeg" }) {
  return (
    <div>
      <img src={`/static/images/${image}`} />
    </div>
  );
}

export const WorkVisa = () => {
  return (
    <div>
      <img src="/static/images/workvisa.jpeg" />
    </div>
  );
};
