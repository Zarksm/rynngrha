import { notFound } from "next/navigation";
import { Blogs } from "@/lib/Blogs";
import Image from "next/image";
import Link from "next/link";

// This function is called at build time to generate static parameters
export async function generateStaticParams() {
  return Blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

// This is the actual page component
const BlogDetail = ({ params }) => {
  const { id } = params;
  const blog = Blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    notFound();
  }

  return (
    <div className="w-full h-auto bg-primary px-10 md:px-28 pb-20 pt-32">
      <div className="md:container border-b border-slate-400 pb-5">
        <p className="text-blue-600">
          <Link href="/blog">Blog</Link>{" "}
          <span className="text-white">/ {blog.title}</span>
        </p>
      </div>
      <div className="py-10 md:container">
        <h1 className="font-fairplay text-xl md:text-5xl text-white">
          {blog.title}
        </h1>
        <h2 className="text-md md:text-lg text-slate-500 mb-4 mt-4">
          {blog.subtitle}
        </h2>
        <p className="text-slate-500 text-sm">{blog.uploaded}</p>
        <div className="w-full h-auto flex flex-col justify-center my-4">
          {blog.description}
        </div>
        <p className="text-white">{blog.paragraph}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
