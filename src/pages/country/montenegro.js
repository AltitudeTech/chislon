import React, { Fragment } from "react";
import CountryCitizen, {
  MontenegroDetail,
} from "../../components/Countries/CountryCitizen";
import ContactBox from "../../components/Home/ContactBox";

export default () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        subtitle="COUNTRY"
        title="Montenegro"
        image="flags/montenegro.jpg"
      />
      <CountryCitizen
        title__content="The Montenegro Citizenship by Investment Program was developed by the Government of Montenegro and was launched in 2019 as part of its ongoing efforts to attract foreign direct investment and increase economic activity in the country. The program requires applicants to make a defined economic contribution to the country."
        detail={<MontenegroDetail />}
      />
      <ContactBox />
    </Fragment>
  );
};
