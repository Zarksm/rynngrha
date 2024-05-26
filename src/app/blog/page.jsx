import React from "react";
import { Blogs } from "@/lib/Blogs";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="w-full h-auto bg-primary px-10 md:px-28 py-40">
      <div className="py-10 container flex flex-col gap-20">
        <div className="">
          <h1 className="font-fairplay text-[46px] md:text-[80px] text-greenl text-center font-bold px-10 md:px-0 mb-5 md:mb-0">
            Blogs
          </h1>
          <p className="text-center text-greenls font-sans mt-10 text-xs md:text-lg md:w-2/3 md:mx-auto px-10 md:px-0">
            I write about web development, business, and personal growth. You
            can find my latest articles below.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 w-full gap-5">
          {Blogs.map((blog) => (
            <div
              key={blog.id}
              className="w-full bg-primary border border-greenls rounded-md overflow-hidden"
            >
              <Link href={`/blog/${blog.id}`}>
                <div className="flex justify-between items-center p-10 hover:bg-greenls transition duration-300 ease-in-out">
                  <div>
                    <h1 className="font-fairplay font-bold text-[20px] text-greenl">
                      {blog.title}
                    </h1>
                    <p className="fontsans text-greenls text-md mt-2">
                      {blog.subtitle}
                    </p>
                  </div>
                  <div>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
