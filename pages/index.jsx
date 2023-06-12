import Hero from "@/src/components/Hero";
import { adminPath } from "@/utils/constants";
import OurServices from "@/src/components/Hero/Services";
import DentalPractice from "@/src/components/DentalPractice";
import Contact from "@/src/components/Contact";
import Towel from "@/src/components/Towel";
import Layout from "@/src/components/Layout";

export default function Home({ siteData, pageData, navServices, cutServices }) {
  return (
    <>
      <Layout data={siteData} SeoData={pageData?.seo} navServices={navServices}>
        <Hero data={pageData} />
        <OurServices data={pageData?.blogTitle} cardsData={cutServices} />
        <DentalPractice data={pageData?.cardOne} />
        <Contact data={pageData?.contact} />
        <Towel data={pageData?.cardTwo} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let siteData = null;
  let pageData = null;
  let navServices = null;
  let cutServices = null;

  try {
    siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
    pageData = await (await fetch(`${adminPath}/home?populate=deep`)).json();
    navServices = await (
      await fetch(`${adminPath}/services?fields[0]=title&fields[1]=slug`)
    ).json();
    cutServices = await (
      await fetch(
        `${adminPath}/services?fields[0]=title&fields[1]=slug&fields[2]=description&populate[3]=image`
      )
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
      cutServices: cutServices?.data,
    },
  };
}
