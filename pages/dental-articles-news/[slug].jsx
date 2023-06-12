import React from "react";
import { adminPath } from "@/utils/constants";
import Layout from "@/src/components/Layout";
import CommonHero from "@/src/components/CommonHero";
import Types from "@/src/components/DentalArticlesNews/Types";

function Index({ siteData, singleService, navServices, blogsData }) {
  return (
    <>
      <Layout
        data={siteData}
        navServices={navServices}
        SeoData={singleService?.SEO}
      >
        <CommonHero data={singleService} testimonial blog />
        <Types
        data={singleService}
        blogs={blogsData}
        singleService={singleService}
      />
      </Layout>
    </>
  );
}

export default Index;

export async function getStaticPaths() {
  const blogsData = await (
    await fetch(`${adminPath}/blogs?fields[0]=slug`)
  ).json();

  const paths = blogsData?.data?.map((post) => {
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
  let blogsData = null;
  try {
    siteData = await (await fetch(adminPath + `/site?populate=deep`)).json();
    navServices = await (
      await fetch(`${adminPath}/services?fields[0]=title&fields[1]=slug`)
    ).json();
    singleService = await (
      await fetch(`${adminPath}/blogs/${slug}?populate=deep`)
    ).json();
    blogsData = await (
      await fetch(
        `${adminPath}/blogs?fields[0]=title&fields[1]=slug&fields[2]=description&fields[3]=imagePath&populate[4]=image`
      )
    ).json();
  } catch (err) {
    console.log("dynamic page error", err);
  }

  return {
    props: {
      singleService: singleService?.data?.attributes || null,
      siteData: siteData?.data?.attributes || null,
      navServices:
        navServices?.data
          ?.sort(
            (a, b) =>
              new Date(b.attributes.publishedAt) -
              new Date(a.attributes.publishedAt)
          )
          .slice(0, 12) || null,
      blogsData: blogsData?.data?.slice(0, 4) || null,
    },
  };
}
