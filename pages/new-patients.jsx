import React from 'react'
import { adminPath } from '@/utils/constants';
import Layout from '@/src/components/Layout';
import CommonHero from '@/src/components/CommonHero';
import BlogBody from '@/src/components/BlogBody';

function NewPatients({ pageData, siteData, navServices }) {
    return (
        <>
            <Layout data={siteData} SeoData={pageData?.seo} navServices={navServices}>
                <CommonHero data={pageData?.hero} />
                <div id="blogbody">
                    <BlogBody data={pageData?.body} cusClass={"custom-our-patient"} />
                </div>
            </Layout>
        </>
    )
}

export default NewPatients

export async function getStaticProps() {
    let pageData = null;
    let siteData = null;
    let navServices = null;
    try {
        pageData = await (
            await fetch(`${adminPath}/new-patient?populate=deep`)
        ).json();
        siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
        navServices = await (await fetch(`${adminPath}/services?fields[0]=title&fields[1]=slug`)).json();
    } catch (err) {
        console.log("error here", err);
    }

    return {
        props: {
            pageData: pageData?.data?.attributes || null,
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
