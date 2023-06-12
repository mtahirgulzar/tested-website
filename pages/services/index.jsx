import React from "react";
import CommonHero from "../../src/components/CommonHero";
import Layout from "../../src/components/Layout";
import OurServices from "../../src/components/Services";
import { adminPath } from "../../utils/constants";

const Services = ({ pageData, siteData, navServices, cutServices }) => {
  // const cardsData = [
  //   {
  //     id: "1",
  //     img: "/static/images/smiling.png",
  //     title: "Dental Implants",
  //     line: "/static/images/Line3.png",
  //     txt: "The modern-day alternative for bridges and dentures. ",
  //     btn: "More About Dental Implants",
  //   },
  //   {
  //     id: "2",
  //     img: "/static/images/dentistry1.png",
  //     title: "Family Dentistry",
  //     line: "/static/images/Line3.png",
  //     txt: "Our dental clinic serves infants to the elderly, making it a complete dental solution for you and your family.",
  //     btn: "More About Family Dentistry",
  //   },
  //   {
  //     id: "3",
  //     img: "/static/images/young.png",
  //     title: "Root Canal Therapy",
  //     line: "/static/images/Line3.png",
  //     txt: "Worry no more; our team of expert endodontists is available to help you. ",
  //     btn: "More About Root Canal",
  //   },
  //   {
  //     id: "4",
  //     img: "/static/images/woman.png",
  //     title: "Invisalign",
  //     line: "/static/images/Line3.png",
  //     txt: "These are the most efficient yet discreet aligners out there.",
  //     btn: "More About Invisalign",
  //   },
  // ];
  return (
    <Layout data={siteData} navServices={navServices} SeoData={pageData?.seo}>
      <CommonHero data={pageData?.hero} blog />
      <div id="blogbody">
        <OurServices data={pageData?.serviceTitle} cardsData={cutServices} />
      </div>
    </Layout>
  );
};

export default Services;
export async function getStaticProps() {
  let siteData = null;
  let pageData = null;
  let navServices = null;
  let cutServices = null;

  try {
    siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
    pageData = await (
      await fetch(`${adminPath}/our-service?populate=deep`)
    ).json();
    navServices = await (await fetch(`${adminPath}/services?populate=deep`)).json();
    cutServices = await (await fetch(`${adminPath}/services?populate=deep`)).json();
  } catch (err) {
    console.log("error", err);
  }

  return {
    props: {
      siteData: siteData?.data?.attributes || null,
      pageData: pageData?.data?.attributes || null,
      navServices: navServices?.data?.sort(
        (a, b) =>
          new Date(b.attributes.publishedAt) -
          new Date(a.attributes.publishedAt),
      )
        .slice(0, 12) || null,
      cutServices: cutServices?.data?.sort(
        (a, b) =>
          new Date(b.attributes.publishedAt) -
          new Date(a.attributes.publishedAt),
      )
        || null,
    },
  };
}
