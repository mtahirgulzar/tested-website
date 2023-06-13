import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { adminPath } from "../utils/constants";
const Layout = dynamic(() => import("../src/components/Layout"));
const HeroCarousal = dynamic(() => import("../src/components/HeroCarousal"));
const GeneralServices = dynamic(() =>
  import("../src/components/GeneralServices")
);
const Welcome = dynamic(() => import("../src/components/Welcome"));
const OurDentists = dynamic(() => import("../src/components/OurDentists"));
const OurServices = dynamic(() => import("../src/components/OurServices"));
const ImageSlider = dynamic(() => import("../src/components/ImageSlider"));
const KeepTouch = dynamic(() => import("../src/components/KeepTouch"));
const PatientForm = dynamic(() => import("../src/components/PatientForms"));
const DentalProblemsCard = dynamic(() =>
  import("../src/components/OurServices/dentalProblemsCard")
);
const AboutUs = dynamic(() => import("../src/components/AboutUs"));
export default function Home({
  siteData,
  pageData,
  navServices,
  Services,
  ModalServices,
  navCat,
}) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  if (typeof window === "undefined" || !loaded) {
    return null;
  }
  return (
    <>
      <Layout
        data={siteData}
        SeoData={pageData?.seo}
        navServices={navServices}
        ourservices={ModalServices}
        navCat={navCat}
      >
        <HeroCarousal data={pageData?.hero} home={pageData} />
        <PatientForm />
        <Welcome
          data={pageData?.care}
          title={pageData?.titles && pageData?.titles[0]}
        />
        <GeneralServices data={Services} />
        <OurServices
          data={pageData?.services}
          title={pageData?.titles && pageData?.titles[2]}
        />
        <DentalProblemsCard />;
        <OurDentists
          data={pageData?.team}
          title={pageData?.titles && pageData?.titles[1]}
        />
        <ImageSlider data={pageData?.imgSlider} />
        <KeepTouch title={pageData?.titles && pageData?.titles[3]} />
        <AboutUs
        // data={pageData?.testimonials}
        // title={pageData?.titles && pageData?.titles[4]}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let siteData = null;
  let pageData = null;
  let navServices = null;
  let Services = null;
  let ModalServices = null;
  let navCat = null;

  try {
    siteData = await (
      await fetch(`${adminPath}/site?populate=deep`, {
        headers: {
          "Cache-Control": "max-age=3600",
        },
      })
    ).json();
    pageData = await (
      await fetch(`${adminPath}/home?populate=deep`, {
        headers: {
          "Cache-Control": "max-age=3600",
        },
      })
    ).json();
    Services = await (
      await fetch(`${adminPath}/services?populate=deep`, {
        headers: {
          "Cache-Control": "max-age=3600",
        },
      })
    ).json();
    ModalServices = await (
      await fetch(`${adminPath}/services?fields[0]=title&fields[1]=slug`, {
        headers: {
          "Cache-Control": "max-age=3600",
        },
      })
    ).json();
    navServices = await (
      await fetch(
        `${adminPath}/services?populate[0]=services_categories&fields[1]=title&fields[2]=slug`,
        {
          headers: {
            "Cache-Control": "max-age=3600",
          },
        }
      )
    ).json();
    navCat = await (
      await fetch(`${adminPath}/services-categories?fields[0]=name`, {
        headers: {
          "Cache-Control": "max-age=3600",
        },
      })
    ).json();
  } catch (err) {
    console.log("error", err);
  }

  return {
    props: {
      siteData: siteData?.data?.attributes || null,
      pageData: pageData?.data?.attributes || null,
      navCat:
        navCat?.data?.sort(
          (a, b) =>
            new Date(a.attributes.createdAt) - new Date(b.attributes.createdAt)
        ) || null,
      navServices:
        navServices?.data?.sort(
          (a, b) =>
            new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
        ) || null,
      Services:
        Services?.data
          ?.sort(
            (a, b) =>
              new Date(b.attributes.createdAt) -
              new Date(a.attributes.createdAt)
          )
          .slice(0, 6) || null,
      ModalServices:
        Services?.data
          ?.sort(
            (a, b) =>
              new Date(b.attributes.createdAt) -
              new Date(a.attributes.createdAt)
          )
          .slice(0, 10) || null,
    },
  };
}
