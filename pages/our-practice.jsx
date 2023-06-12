import React from "react";
import CommonHero from "../src/components/CommonHero";
import Layout from "../src/components/Layout";
import { adminPath } from "../utils/constants";
import BlogBody from "../src/components/BlogBody";

const OurPractice = ({ pageData, siteData, navServices }) => {
  return (
    <Layout data={siteData} SeoData={pageData?.seo} navServices={navServices}>
      <CommonHero data={pageData?.hero} />
      <div id="blogbody">
        <BlogBody data={pageData?.body} cusClass={"custom-our-patient"} />
      </div>
    </Layout>
  )
};

export default OurPractice;

export async function getStaticProps() {
  let siteData = null;
  let pageData = null;
  let navServices = null;

  try {
    siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
    navServices = await (await fetch(`${adminPath}/services?populate=deep`)).json();
    pageData = await (
      await fetch(`${adminPath}/our-practice?populate=deep`)
    ).json();
  } catch (err) {
    console.log("error", err);
  }

  return {
    props: {
      siteData: siteData?.data?.attributes || null,
      pageData: pageData?.data?.attributes || null,
      navServices:navServices?.data?.sort(
        (a, b) =>
          new Date(b.attributes.publishedAt) -
          new Date(a.attributes.publishedAt),
      )
      .slice(0, 12) || null,
    },
  };
}
