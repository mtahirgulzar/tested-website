import React from "react";
import CommonHero from "../src/components/CommonHero";
import Layout from "../src/components/Layout";
import OurDentists from "../src/components/OurDentists";
import { adminPath } from "../utils/constants";

const DentistStaff = ({ pageData, siteData, navServices }) => {
  return (
    <Layout data={siteData}  SeoData={pageData?.seo} navServices={navServices}>
      <CommonHero data={pageData?.hero} />
      <div id="blogbody">
        <OurDentists
          dentists={pageData?.MeetDentist}
          description={pageData?.description}
          desk={pageData?.desk}
        />
      </div>
    </Layout>
  );
};

export default DentistStaff;

export async function getStaticProps() {
  let siteData = null;
  let pageData = null;
  let navServices = null;

  try {
    siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
    navServices = await (await fetch(`${adminPath}/services?populate=deep`)).json();
    pageData = await (
      await fetch(`${adminPath}/dentist-staff?populate=deep`)
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
