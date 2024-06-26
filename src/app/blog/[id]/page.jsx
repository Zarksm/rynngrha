import { notFound } from "next/navigation";
import { Blogs } from "@/lib/Blogs";
import Image from "next/image";

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
    <div className="w-full h-auto bg-primary px-10 md:px-28 pb-20">
      <div className="py-10 container">
        <h1 className="font-fairplay text-5xl text-greenls">{blog.title}</h1>
        <h2 className="text-2xl text-greenls mb-4">{blog.subtitle}</h2>
        <div className="w-full h-auto flex flex-col justify-center my-4">
          {blog.description}
        </div>
        <p className="text-white">{blog.paragraph}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
