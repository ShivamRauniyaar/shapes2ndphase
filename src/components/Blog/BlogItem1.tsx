"use client";

import React from "react";
import Image from "next/image";
import { BlogType } from "@/type/BlogType";
import { CommonSvg } from "@/Common/CommonSvg";

interface BlogProps {
  data: BlogType;
  type: string;
}

const BlogItem1: React.FC<BlogProps> = ({ data, type }) => {
  return (
    <>
      <div className="blog-item style-one  cursor-pointer">
        <div className="blog-main h-full block">
          <div className=" overflow-hidden">
            <Image
              src={"/images/newimages/blogsframe.png"}
              width={2000}
              height={1500}
              alt="blog-img"
              className="w-full"
            />
            <div className="blog_heading mt-[1rem]">{data?.title}</div>
            <div className="mt-[1rem] flex items-center header_design">
              Read <span className="rotate_deg">{CommonSvg.rightIconSvg}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem1;
