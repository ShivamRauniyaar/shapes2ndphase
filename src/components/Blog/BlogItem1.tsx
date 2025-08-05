"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogType } from "@/type/BlogType";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { CommonSvg } from "@/Common/CommonSvg";

interface BlogProps {
  data: BlogType;
  type: string;
}

const BlogItem1: React.FC<BlogProps> = ({ data, type }) => {
  const router = useRouter();
  const handleBlogClick = (blogId: string) => {
    // Go to blog detail with blogId selected
    router.push(`/blog/detail1?id=${blogId}`);
  };

  return (
    <>
      <div
        className="blog-item style-one  cursor-pointer"
      >
        <div className="blog-main h-full block">
          <div className="blog-thumb overflow-hidden">
            <Image
              src={"/images/newimages/blogsframe.png"}
              width={2000}
              height={1500}
              alt="blog-img"
              className="w-full duration-500"
            />
            <div className="blog_heading mt-[1rem]">{data?.title}</div>
            <div className="mt-[1rem] flex items-center">Read {CommonSvg.rightIconSvg}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem1;
