import React from "react";
import { Col, Container, Row } from "reactstrap";
import ButtonStyle from "../styles/ButtonStyle";
import "./CountryCitizen.scss";

export default function CountryCitizen({
  title = "Citizenship by Investment Overview",
  title__content = "An excellent place to establish residence within the EU, Austria is the only Western European country that offers the possibility to obtain citizenship by investment and an EU passport without prior residence requirements.",
  detail = <AustriaDetail />,
  image = "austria_castle.jpg",
}) {
  return (
    <>
      <Container fluid className="country-details">
        <Row>
          <Col md={6}>
            <div className="citizenship">
              <p className="mb-3 title">{title}</p>
              <p>{title__content}</p>
              <ButtonStyle className="transparent">ENQUIRY</ButtonStyle>
            </div>
          </Col>
          <Col md={6}>
            <div className="investment">
              <div className="options">
                <span className="fa fa-money"></span>
                <div className="content">
                  <p>Investment</p>
                  <p>Minimum contribution of EUR 3 million</p>
                </div>
              </div>
              <div className="options">
                <span className="fa fa-file-text-o"></span>
                <div className="content">
                  <p>Processing Time</p>
                  <p>Minimum contribution of EUR 3 million</p>
                </div>
              </div>
              <div className="options">
                <span className="fa fa-globe"></span>
                <div className="content">
                  <p>Key Benefits</p>
                  <p>Minimum contribution of EUR 3 million</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={6}>{detail}</Col>
          <Col md={6}>
            <img
              className="img-fluid"
              src={`/static/images/countries/${image}`}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export const AustriaDetail = () => (
  <div className="country-resume">
    <p className="heading">Austria Citizenship by Investment</p>

    <p>
      As a citizen of Austria, you can live and work in the country and anywhere
      else in the EU at any time.
    </p>

    <p>
      The Austrian passport has an excellent reputation and offers very
      comprehensive visa-free or visa-on-arrival travel, including visa-free
      access to the USA. It is without a doubt among the best travel documents
      in the world.
    </p>

    <p>
      When you acquire citizenship under the Austrian Citizenship Act, you and
      your family enjoy full citizenship for life, which can be passed on to
      future generations by descent.
    </p>

    <p className="heading">Requirements of Austria citizenship by investment</p>

    <p>
      Under the citizenship by investment provisions, an applicant is required
      to invest actively in the Austrian economy, for example in the form of a
      joint venture or direct investment in a business that creates jobs or
      generates new export sales. Significant direct investment is generally
      required. Passive investments in government bonds or real estate, for
      example, do not qualify.
    </p>

    <p>
      In addition to standard documentary requirements (such as passports,
      birth, and marriage certificates), a completely clean personal record
      (certificate of no criminal record), a comprehensive CV, and business
      background information, as well as impeccable references must be provided
      by all applicants.
    </p>

    <p>
      The Austrian Citizenship Act generally requires the applicant to abandon
      their current citizenship as a precondition for being granted Austrian
      citizenship. However, in case of a grant of citizenship under the
      provisions of Article 10 (6) of the Citizenship Act, the former
      citizenship can be legally maintained, that is, the applicant may not be
      required to give up their present citizenship.
    </p>
    <p className="heading">
      Austria citizenship by investment procedures and time frame
    </p>

    <p>
      The grant of citizenship on the basis of a capital contribution involves
      various procedures and requires government approval at several levels. It
      is therefore essential that the applicant is properly advised from the
      beginning, that each individual case is carefully prepared, and that
      informal approvals from the key ministries are obtained before the
      investment is made and the formal application process is started.
    </p>

    <p>
      Henley & Partners advises on suitable capital contribution opportunities,
      liaises with the various government agencies and ministries, and, finally,
      prepares and lodges your application with the government. The procedure
      involves a thorough background check. Citizenship documents are issued
      after the citizenship application has been approved.
    </p>

    <p>
      The average time frame for an application is 24–36 months. Successful
      applicants receive full citizenship of the Republic of Austria by decision
      of the Government of Austria and can apply for a passport immediately
      afterwards. Passports are issued within a few days.
    </p>

    <p>
      The grant of citizenship is not published and not reported to any other
      country, as it falls within the government provisions relating to privacy
      or official secrets.
    </p>

    <p className="heading">Performance guarantee</p>
    <p>
      The granting of citizenship is at the sole discretion of the Government of
      the Republic of Austria, and we are unable to guarantee that applications
      will be approved. However, great care has been taken to provide the best
      possible safeguards for persons entering the application process. Prior to
      taking on any mandate, a written agreement is made between the applicant
      and Henley & Partners defining the responsibilities of both parties.
    </p>
  </div>
);
export const MaltaDetail = () => (
  <div className="country-resume">
    <p className="heading">Maltese Citizenship by Naturalization</p>
    <p>
      The Malta Citizenship by Naturalisation for Exceptional Services by Direct
      Investment process allows for the granting of citizenship by a certificate
      of naturalization to foreign individuals and their families who contribute
      to the country’s economic development. This is possible following a
      36-month (or, by exception, 12-month) residence period. Each application
      is subject to a stringent due diligence process, including thorough
      background checks. Community Malta Agency is the competent Maltese
      Government Agency responsible for administering the regulations. Henley &
      Partners (license number AKM-HENL-22) is an official agent for this
      regulated citizenship process.
    </p>
    <p className="heading">Benefits of Maltese citizenship</p>
    <p>
      <ul>
        <li>Visa-free or visa-on-arrival travel to 185 destinations</li>
        <li>
          Access to a transparent and reputable financial centre and a prime
          jurisdiction for international business
        </li>
        <li>
          World’s strictest due diligence standards and vetting of applicants,
          thus ensuring only highly respectable applicants
        </li>
        <li>
          An attractive place to live or own a second home in, strategically
          located with excellent air links
        </li>
      </ul>
    </p>
    <p className="heading ">
      Requirements of Maltese citizenship by naturalization
    </p>
    <p>
      The application for Malta Citizenship by Naturalisation for Exceptional
      Services by Direct Investment is thoroughly checked and assessed and
      undergoes a four-tier due diligence process. To qualify, the following
      requirements must be fulfilled:
    </p>
    <p>A minimum age of 18 years for all applicants</p>
    <p>
      <ul>
        <li>
          A contribution of at least EUR 600,000 for a minimum residence period
          of 36 months or EUR 750,000 for a minimum of 12 months
        </li>
        <li>
          The purchase of a residential property in Malta of at least EUR
          700,000, which must be held for five years. Alternatively, the lease
          of a residential property with a rental value of at least EUR 16,000
          per annum, also held for five years. Please note that the property
          cannot be sublet during this five-year period. A 36-month (or
          18-month, by exception) lease agreement or property purchase is
          required during the residence period
        </li>
        <li>
          A donation of at least EUR 10,000 to a registered sport, cultural,
          scientific, philanthropic, animal welfare, or artistic
          non-governmental organization or society, as approved by the Community
          Malta Agency
        </li>
        <li>
          Legal residence of Malta for at least 36 months (or 12 months, by
          exception), which includes the lease of a residential property with a
          rental value of at least EUR 16,000 per annum, held for that same
          period. Applicants require a valid residence card in order to apply
          for citizenship
        </li>
      </ul>
    </p>
    <p className="heading">Procedures and time frame</p>
    <p>
      Applications must be made on the prescribed forms and be accompanied by
      the appropriate fees and specific documents. Highly detailed due diligence
      checks are carried out and an application will be declined if it turns out
      that it contains false information or omissions.
    </p>
    <p>
      If the Tier 1 due diligence checks completed by the Community Malta Agency
      are passed, the application for a residence permit will be submitted.
      After residence has been obtained, an eligibility application will be
      submitted and further (tiers 2, 3, and 4) due diligence checked will be
      made by the agency and presented to the relevant Maltese minister, who
      will decide on the applicant’s eligibility to apply for citizenship.
    </p>
    <p>
      If successful, a citizenship application will be submitted to the
      Community Malta Agency after 36 months of residence (or 12 months by
      exception). After the minister has decided if the applicant can be granted
      Maltese citizenship, the successful applicant will then be required to
      fulfil the exceptional investment, donation, and property requirements.
      Thereafter, the applicant will be invited to take the oath of allegiance
      in Malta and be presented with a Maltese certificate of naturalization
      className="heading".
    </p>
    <p>
      The Community Malta Agency will conduct continuous monitoring for five
      years.
    </p>

    <p className="heading">Dual citizenship</p>
    <p>There are no restrictions on dual citizenship in Malta.</p>
  </div>
);
export const MontenegroDetail = () => (
  <div className="country-resume">
    <p className="heading">Montenegro Citizenship by Investment</p>
    <p>
      The Montenegro Citizenship by Investment Program was launched by the
      Government of Montenegro as part of its ongoing efforts to attract foreign
      direct investment and increase economic activity in the country.
    </p>
    <p>
      The Montenegro Citizenship by Investment Program requires applicants to
      make a defined economic contribution to Montenegrin society through an
      investment in an approved development project, and a capital contribution
      to a fund designated by the government for the advancement of
      under-developed areas. In exchange, and subject to a stringent vetting and
      due diligence process, including thorough background checks, applicants
      and their families are granted citizenship.
    </p>
    <p className="heading">
      Benefits of the Montenegro Citizenship by Investment Program
    </p>
    <p>
      <ul>
        <li>
          Visa-free or visa-on-arrival access to 123 destinations including
          Europe’s Schengen Area, Russia, and Turkey
        </li>
        <li>
          Citizenship in a country that is an official EU candidate country
        </li>
        <li>
          Citizenship in a multinational and multilingual European community
          that enjoys a mild Mediterranean climate, beautiful scenery, and a low
          cost of living
        </li>
        <li>
          Citizenship in a member state of the European Monetary Union, the NATO
          Alliance, OSCE, and the WTO
        </li>
        <li>Full citizenship granted to the applicant and family members</li>
        <li>
          Investment in a development project operated by a renowned hotel brand
        </li>
      </ul>
    </p>
    <p className="heading ">
      Requirements of Montenegrin citizenship by investment
    </p>
    <p className="">
      To qualify for the Montenegro Citizenship by Investment Program, the main
      applicant must be over 18 years of age, meet the application requirements,
      and make the qualifying contributions to the Government of Montenegro.
      There are two routes to choose from to qualify for the program:
    </p>
    <p>
      <ul>
        <li>
          An investment of EUR 450,000 to development projects in the capital of
          Podgorica or in the coastal regions
        </li>
        <li>
          An investment of EUR 250,000 to development projects in northern or
          central Montenegro, excluding Podgorica
        </li>
      </ul>
    </p>
    <p>
      In addition, there is a government fee of EUR 200,000 per application.
      This contribution will be directed to a special fund for the advancement
      of underdeveloped areas (EUR 100,000) and towards the Innovation Fund of
      Montenegro (EUR 100,000).
    </p>
    <p className="heading">
      Procedures and time frame of the Montenegro Citizenship by Investment
      Program
    </p>
    <p>
      All applications are submitted through intermediary agents such as Henley
      & Partners, which have been officially accredited to the Government of
      Montenegro for this purpose. Once received by the relevant government
      department, applications are processed within six to eight months.
    </p>
    <p className="heading">Dual citizenship</p>
    <p>
      Successful applicants to the Montenegro Citizenship by Investment Program
      are exempt from the country’s restrictions on dual citizenship stipulated
      in Article 8 of the law on Montenegrin citizenship. Article 12 of the law
      states that citizenship may be exceptionally granted to individuals on the
      basis of special contributions (such as economic interest) to the country,
      which applies to successful program applicants.
    </p>
  </div>
);
export const NorthMacedoniaDetail = () => {};
export const TurkeyDetail = () => {};
export const AustriaDetail5 = () => {};
export const AustriaDetail6 = () => {};
export const AustriaDetail7 = () => {};
export const AustriaDetail8 = () => {};
export const AustriaDetail9 = () => {};
export const AustriaDetail10 = () => {};
export const AustriaDetail11 = () => {};
export const AustriaDetail12 = () => {};
