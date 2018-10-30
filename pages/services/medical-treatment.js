import React, { Component } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import PageHeader from "../../components/General/PageHeader";
import TextContent from "../../components/General/TextContent";

class BusinessInvestment extends Component {
  state = {};
  render() {
    return (
      <Layout title="Services :: CHISLON">
        <div
          style={{
            backgroundImage: "url(/static/about/medical.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 0",
            backgroundSize: "cover",
            height: "60vh",
            textAlign: "center"
          }}
        >
          <Header />
        </div>
        <PageHeader
          title="Medical Treatment"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, adipisci
            expedita deserunt id in molestiae consectetur quam dolorum veniam
            autem sed quae deleniti eveniet atque nemo enim, repellendus quo
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            adipisci expedita deserunt id in molestiae consectetur quam dolorum
            veniam autem sed quae deleniti eveniet atque nemo enim, repellendus
            quo quos."
        />
        <TextContent image="medical2.jpg" />
      </Layout>
    );
  }
}

export default BusinessInvestment;
