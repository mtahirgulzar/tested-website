import React from "react";
import BlogBody from "../../src/components/BlogBody";
import CommonHero from "../../src/components/CommonHero";
import Layout from "../../src/components/Layout";
import { adminPath } from "../../utils/constants";

const Index = ({ singleService, siteData, navServices }) => {


  return (
    <>
      <Layout data={siteData} navServices={navServices} SeoData={singleService?.seo}>
        <CommonHero data={singleService} blog />
        <div id="blogbody">
          <BlogBody
            data={singleService?.body}
            cusClass={"cus-our-service"}
            team
          />
        </div>
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticPaths() {
  const blogData = await (
    await fetch(`${adminPath}/services?populate=deep`)
  ).json();


  const paths = blogData?.data?.map((post) => {
    return {
      params: { slug: post?.attributes?.slug?.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context?.params?.slug;
  let singleService = null;
  let siteData = null;
  let navServices = null;

  try {
    siteData = await (await fetch(adminPath + `/site?populate=deep`)).json();
    navServices = await (await fetch(`${adminPath}/services?populate=deep`)).json();

  } catch (err) {
    console.log("dynamic page error", err);
  }
  singleService = await (
    await fetch(`${adminPath}/services/${slug}?populate=deep`)
  ).json();

  return {
    props: {
      singleService: singleService?.data?.attributes || null,
      siteData: siteData?.data?.attributes || null,
      navServices: navServices?.data?.sort(
        (a, b) =>
          new Date(b.attributes.publishedAt) -
          new Date(a.attributes.publishedAt),
      )
        .slice(0, 12) || null,
    },
  };
}
