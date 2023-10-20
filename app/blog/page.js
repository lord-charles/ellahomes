"use client";
import Image from "next/image";
import React, { useState } from "react";
import { blogs } from "../../utils/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter();

  const handleLinkClick = (blog) => {
    // console.log(blog);
    const data = blog.date;
    router.push(`/blog/${data}`);
  };

  return (
    <main className="flex flex-col flex-1">
      <div className="pb-0">
        <div className="absolute xxxs:top-[9vh] lg:top-[11vh] z-[1]">
          <Image
            src="/banners/bg3.jpeg"
            width={3000}
            height={3000}
            alt="bg"
            className="object-cover w-screen lg:h-[27rem] md:h-[27rem] xxxs:h-[25rem] blur-[0px]"
          />
        </div>
        <div className="px-6 py-16 mt-[340px]">
          <div className="relative max-w-6xl pt-16 pb-10 mx-auto md:pt-20">
            <h1 className="text-3xl leading-10 text-center uppercase font-heading font-semibold">
              Our Blog
            </h1>
          </div>
          <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {/* Repeat this block for each blog post */}
            {blogs.map((blog, index) => (
              <div key={index}>
                <Link href={`/blog/${blog.id}`}>
                  <div className="relative transition-all aspect-square hover:-translate-y-2 hover:shadow-2xl">
                    <Image
                      src={blog.image}
                      alt="Blog Post 1"
                      layout="fill"
                      className="object-cover w-full h-[400px]"
                    />
                  </div>
                </Link>
                <div className="mt-6">
                  <p className="text-sm text-gray-600">{blog.date}</p>
                  <h4 className="mt-2 font-semibold">{blog.description}</h4>
                  <Link
                    className="inline-block mt-3 text-sm font-medium underline text-lime-600"
                    href={`/blog/${blog.id}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
            {/* End of blog post block */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
