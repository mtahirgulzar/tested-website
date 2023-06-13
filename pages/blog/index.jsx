import dynamic from 'next/dynamic';
import React from 'react';
const Hero = dynamic(() => import('../../src/components/Hero'));
const PaginatedBlogs = dynamic(() =>
	import('../../src/components/PaginatedBlogs'),
);
const Layout = dynamic(() => import('../../src/components/Layout'));

import { adminPath } from '../../utils/constants';

const Blog = ({
	siteData,
	pageData,
	navServices,
	blogsData,
	navCat,
	ModalServices,
}) => {
	return (
		<Layout
			data={siteData}
			SeoData={pageData?.seo}
			navServices={navServices}
			navCat={navCat}
			ourservices={ModalServices}
		>
			<Hero data={pageData?.hero} blogpage={pageData} />
			<PaginatedBlogs data={blogsData} />
		</Layout>
	);
};

export default Blog;

export async function getStaticProps() {
	let siteData = null;
	let pageData = null;
	let navServices = null;
	let blogsData = null;
	let navCat = null;
	let ModalServices = null;

	try {
		siteData = await (
			await fetch(`${adminPath}/site?populate=deep`, {
				headers: {
					'Cache-Control': 'max-age=3600',
				},
			})
		).json();
		pageData = await (
			await fetch(`${adminPath}/our-blog?populate=deep`, {
				headers: {
					'Cache-Control': 'max-age=3600',
				},
			})
		).json();
		blogsData = await (
			await fetch(
				`${adminPath}/blogs?fields[0]=title&fields[1]=slug&fields[2]=description&populate[3]=image&populate[4]=services_categories&fields[5]=imagePath&fields[6]=publishedDate`,
				{
					headers: {
						'Cache-Control': 'max-age=3600',
					},
				},
			)
		).json();
		navServices = await (
			await fetch(
				`${adminPath}/services?populate[0]=services_categories&fields[1]=title&fields[2]=slug`,
				{
					headers: {
						'Cache-Control': 'max-age=3600',
					},
				},
			)
		).json();
		ModalServices = await (
			await fetch(`${adminPath}/services?fields[0]=title&fields[1]=slug`, {
				headers: {
					'Cache-Control': 'max-age=3600',
				},
			})
		).json();
		navCat = await (
			await fetch(`${adminPath}/services-categories?fields[0]=name`, {
				headers: {
					'Cache-Control': 'max-age=3600',
				},
			})
		).json();
	} catch (err) {
		console.log('error', err);
	}

	return {
		props: {
			siteData: siteData?.data?.attributes || null,
			pageData: pageData?.data?.attributes || null,
			navCat:
				navCat?.data?.sort(
					(a, b) =>
						new Date(a.attributes.createdAt) - new Date(b.attributes.createdAt),
				) || null,
			navServices:
				navServices?.data?.sort(
					(a, b) =>
						new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt),
				) || null,
			blogsData:
				blogsData?.data?.sort(
					(a, b) =>
						new Date(b.attributes.publishedDate) -
						new Date(a.attributes.publishedDate),
				) || null,
			ModalServices:
				ModalServices?.data
					?.sort(
						(a, b) =>
							new Date(b.attributes.createdAt) -
							new Date(a.attributes.createdAt),
					)
					.slice(0, 10) || null,
		},
	};
}
