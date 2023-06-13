import React from 'react';
import Link from 'next/link';
import { imageResolver } from '../../../utils/helpers';
import dynamic from 'next/dynamic';
const Modal =dynamic(()=>import( '../common/ModalCard'));
import useModal from '../../../utils/useModal';
import { useRouter } from "next/router";
import Image from 'next/image';

const Footer = ({ data, ourservices }) => {
   const router = useRouter();
  const currentRoute = router.pathname.slice(0);
	const { isShowing, toggle } = useModal();
	return (
		<div className='relative overflow-visible bg-white shadow-2xl'>
			<div className='max-w-[1156px] mx-auto px-4 '>
				<div className='xl:flex grid grid-cols-12 sm:py-[90px] py-[30px] sm:justify-start justify-center  border-b border-[#FFFFFF59]'>
					<div className='xl:max-w-[211px] col-span-12 md:pr-[52px] xl:mb-0 mb-[30px] xl:pl-0 md:pl-[52px] xl:border-r border-[#FFFFFF59]'>
						<Link href={data?.cta?.link || '/'}>
							<a href={data?.cta?.link || '/'} className=''>
								<Image
									src={imageResolver(data?.cta?.img).path}
									alt={data?.cta?.img?.data?.attributes?.alternativeText}
									className='w-[160px] h-[50] cursor-pointer'
									loading='lazy'
									width='160'
									height='150px'
									loader={()=>imageResolver(data?.cta?.img).path}
								/>
							</a>
						</Link>
					</div>
					<div className='xl:max-w-[308px] lg:col-span-4 md:col-span-6 col-span-12 md:px-[52px] md:border-r border-[#FFFFFF59] lg:mb-0 mb-[30px]'>
						<h2 className=' text-[17px] font-[900] leading-[25px] text-white'>
							{data && data.Links && data?.Links[0]?.title}
						</h2>
						<div className='flex flex-col mt-[25px]'>
							{data &&
								data.Links &&
								data?.Links[0]?.cta?.map((item, index) => (
									<div key={index} className='mb-[15px] '>
										<p className='text-[17px]  font-[400] leading-[25px] text-[#605c44] transition-all duration-300 '>
											{index === 1 ? (
												<a className='hover:text-[#963A2F]' href={`tel:${item.name}`}>
													<strong>Tel</strong>:{item.name}
												</a>
											) : index === 2 ? (
												<a className='hover:text-[#963A2F]' href={`fax:${item.name}`}>
													<strong>Fax</strong>:{item.name}
												</a>
											) : index === 3 ? (
												<a className='hover:text-[#963A2F]' href={`mailto:${item.name}`}>
													<strong>Mail</strong>:{item.name}
												</a>
											) : (
												item.name
											)}
										</p>
									</div>
								))}
						</div>
					</div>
					<div className='xl:max-w-[375px] lg:col-span-4 md:col-span-6 col-span-12 md:px-[52px] lg:border-r border-[#FFFFFF59] mb-[30px] md:mb-0'>
						<h2 className=' text-[17px] font-[900] leading-[25px] text-[#605c44]  transition-all duration-300'>
							{data && data.Links && data?.Links[1]?.title}
						</h2>
						<div className='flex flex-col mt-[25px] '>
							{data &&
								data.Links &&
								data?.Links[1]?.cta?.map((item, index) => (
									<div key={index} className='mb-[15px]'>
										<div className='flex'>
											 
											<div className=''>
												<p className={`text-[17px] font-[400] leading-[25px] text-[#605c44] hover:text-[#963A2F] transition-all duration-300 cursor-pointer ${currentRoute == item.link ? "text-[#963A2F]" : ""}`}>
													{index === 5 ? (
														<span onClick={toggle}>{item.name}</span>
													) : (
														<Link href={`${item.link}`}>
															<a href={`${item.link}`} className=''>
																{item.name}
															</a>
														</Link>
													)}
												</p>
											</div>
											<Modal
												isShowing={isShowing}
												hide={toggle}
												ourservices={ourservices}
											/>
										</div>
									</div>
								))}
						</div>
					</div>
					<div className='xl:max-w-[257px] lg:col-span-4 md:col-span-6 col-span-12 md:pl-[52px]'>
						<h2 className=' text-[17px] font-[900] leading-[25px] text-[#605c44] hover:text-[#963A2F] transition-all duration-300'>
							{data && data.Links && data?.Links[2]?.title}
						</h2>
						<div className='flex flex-col mt-[25px]'>
							 
						</div>
						<div className='flex '>
							{data &&
								data?.Links &&
								data?.Links[2]?.cta?.map((item,idx) => (
									<div key={idx} className='mr-[25px] cursor-pointer relative min-w-[20px] h-[20px]'>
										<Link className='cursor-pointer' href={`${item.link}`}>
											<a href={`${item.link}`} >
												<Image
													src={imageResolver(item.img).path}
													loader={()=> imageResolver(item.img).path}
													alt={item?.img?.data?.attributes?.alternativeText}
													className='min-w-[20px] h-[20px]'
													layout='fill'
												/>
											</a>
										</Link>
									</div>
								))}
						</div>
					</div>
				</div>
				<div className='flex justify-center sm:py-[50px] py-[25px]'>
					<Link href={`https://vigorant.com/`}>
						<a
							href={`https://vigorant.com/`}
							className='text-[15px] inline-block font-[400] leading-[20px] text-center text-[#605c44] transition-all duration-300'
						>
							© {new Date().getFullYear()} {data?.copyright}
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
