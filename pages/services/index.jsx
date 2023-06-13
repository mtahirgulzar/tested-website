import React from "react";
import CommonHero from "../../src/components/CommonHero";
import Layout from "../../src/components/Layout";
import OurServices from "../../src/components/Services";
import { adminPath } from "../../utils/constants";

const Services = ({ pageData, siteData, navServices, cutServices }) => {
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
