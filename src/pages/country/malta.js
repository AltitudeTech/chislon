import React, { Fragment } from "react";
import CountryCitizen, {
  MaltaDetail,
} from "../../components/Countries/CountryCitizen";
import ContactBox from "../../components/Home/ContactBox";

export default () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        subtitle="COUNTRY"
        title="Malta"
        image="flags/austria.jpg"
      />
      <CountryCitizen
        title="Citizenship by Naturalization Overview"
        title__content="Malta’s Granting of Citizenship for Exceptional Services by Direct Investment Regulations (S.L. 188.05), under the Maltese Citizenship Act Cap. 188, LN437 of 2020, allow for the granting of citizenship by a certificate of naturalization to foreign individuals and their families who contribute to the country’s economic development."
        detail={<MaltaDetail />}
        image="malta_castle.jpg"
      />
      <ContactBox />
    </Fragment>
  );
};
