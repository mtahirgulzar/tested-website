import React from "react";
import CommonHero from "../../src/components/CommonHero";
import Layout from "../../src/components/Layout";
import PaginatedServices from "../../src/components/PaginatedServices";
import OurServices from "../../src/components/Services";
import { adminPath } from "../../utils/constants";

const DentalArticleNews = ({ pageData, siteData, navServices,blogsData }) => {

  return (
    <Layout data={siteData} SeoData={pageData?.seo} navServices={navServices}>
      <CommonHero data={pageData?.hero} />
      <div id="blogbody">
        <PaginatedServices data={blogsData} />
      </div>
    </Layout>
  );
};

export default DentalArticleNews;

export async function getStaticProps() {
  let pageData = null;
  let siteData = null;
  let navServices = null;
  let blogsData=null
  try {
    pageData = await (
      await fetch(`${adminPath}/dental-new?populate=deep`)
    ).json();
    blogsData = await (
      await fetch(`${adminPath}/blogs?populate=deep`)
    ).json();
    siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
    navServices = await (await fetch(`${adminPath}/services?populate=deep`)).json();
  } catch (err) {
    console.log("error here", err);
  }

  return {
    props: {
      pageData: pageData?.data?.attributes || null,
      siteData: siteData?.data?.attributes || null,
      navServices:navServices?.data?.sort(
        (a, b) =>
          new Date(b.attributes.publishedAt) -
          new Date(a.attributes.publishedAt),
      )
      .slice(0, 12) || null,
      blogsData:blogsData?.data?.sort(
        (a, b) =>
          new Date(b.attributes.publishedAt) -
          new Date(a.attributes.publishedAt),
      ) || null,
    },
  };
}
