import Link from "next/link";
import React from "react";
import { imageResolver } from "../../../../utils/helpers";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const BlogCard = ({ data, service }) => {
  return (
    <Link
      href={service ? `/services/${data?.slug}` : `/blog/${data?.slug}` || "/"}
      className="flex"
    >
      <div className="relative flex flex-col items-stretch">
        <div className="absolute left-[5px] top-[5px] bg-white text-black px-[2px] py-[1px] rounded-md text-[12px]">
          {data?.category?.data?.attributes?.name}
        </div>
        {data?.image?.data !== null ? (
          <Image
            src={imageResolver(data?.image).path}
            alt={data?.image?.data?.attributes?.alternativeText}
            className="w-full h-[230px] object-cover"
            loader={() => imageResolver(data?.image).path}
            width={0}
            height={230}
          />
        ) : (
          <Image
            src={`https://admin.toppinoledental.com/uploads/${data?.imagePath}`}
            alt={data?.imagePath}
            loader={() =>
              `https://admin.toppinoledental.com/uploads/${data?.imagePath}`
            }
            className="h-[230px] w-full object-cover "
            width={0}
            height={230}
          />
        )}
        <div className="flex flex-col w-full max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md cursor-pointer dark:bg-gray-800">
          <div className="mt-2 min-h-[280px]">
            <h2
              href=""
              className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            >
              <ReactMarkdown>{data?.title}</ReactMarkdown>
            </h2>
            {data?.publishedDate && (
              <div className={`mt-2`}>
                <p className="text-[#963A2F]">{data?.publishedDate}</p>
              </div>
            )}
            <div className="mt-2 text-gray-600 dark:text-gray-300">
              <ReactMarkdown>{data?.description}</ReactMarkdown>
            </div>
          </div>
          <div className="flex items-center justify-between mt-auto">
            <p
              href="#"
              className="text-[#963A2F] dark:text-blue-400 hover:underline"
            >
              Read more ⟶
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
