import Layout from "@/src/components/Layout";
import React from "react";
import { adminPath } from "@/utils/constants";
import CommonHero from "@/src/components/CommonHero";
import BlogBody from "@/src/components/BlogBody";

function OurPractice({ pageData, siteData, navServices }) {
  return (
    <>
      <Layout data={siteData} SeoData={pageData?.seo} navServices={navServices}>
        <CommonHero data={pageData?.hero} />
        <div id="blogbody">
          <BlogBody data={pageData?.body} cusClass={"custom-our-patient"} />
        </div>
      </Layout>
    </>
  );
}

export default OurPractice;
export async function getStaticProps() {
  let siteData = null;
  let pageData = null;
  let navServices = null;

  try {
    siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
    navServices = await (
      await fetch(`${adminPath}/services?fields[0]=title&fields[1]=slug`)
    ).json();
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
      navServices:
        navServices?.data
          ?.sort(
            (a, b) =>
              new Date(b.attributes.publishedAt) -
              new Date(a.attributes.publishedAt)
          )
          .slice(0, 12) || null,
    },
  };
}
