import CardBlogv1 from "@/components/blogs/CardBlogv1";
import Image from "next/image";

export const Blogs = [
    {
        id: 1,
        title: "Deep Dive into React Hooks: Best Practices",
        subtitle: "Optimizing Your React Components",
        image: "/Assets/icons/react.png",
        uploaded: "March 1, 2024",
        description: (
            <>
                <CardBlogv1 />
                <div className="header">

                </div>
            </>
        ),
    },
    {
        id: 2,
        title: "Mastering Tailwind CSS: Advanced Techniques",
        subtitle: "Unlocking Tailwinds Full Potential",
        image: "/Assets/icons/tailwind.png",
        uploaded: "March 15, 2024",
        description: (
            <>
                <p>Tailwind CSS offers a utility-first approach to styling web applications, enabling rapid development and consistent design. This blog explores advanced techniques to master Tailwind CSS effectively.</p>
                <h3>Customizing Tailwind Configuration</h3>
                <p>One of Tailwind{"'"}s strengths is its customizable configuration. By modifying the tailwind.config.js file, you can:</p>
                <ul>
                    <li><strong>Add Custom Colors and Variants</strong>: Extend Tailwind{"'"}s default color palette and create custom variants for buttons, cards, and other UI elements.</li>
                    <li><strong>Optimize PurgeCSS Settings</strong>: Configure PurgeCSS to remove unused styles in production builds, reducing CSS file size and improving load times.</li>
                </ul>
                <h3>Optimizing Performance with JIT Mode</h3>
                <p>Tailwind CSS JIT (Just-In-Time) mode further enhances performance by generating CSS on-demand. Enable JIT mode in your Tailwind project to:</p>
                <ul>
                    <li><strong>Reduce CSS File Size</strong>: Generate only the styles used in your project, eliminating unused utility classes and reducing the overall CSS file size.</li>
                    <li><strong>Improve Development Workflow</strong>: Enjoy instant style updates without rebuilding the entire project, speeding up development cycles.</li>
                </ul>
                <div className="w-full h-auto flex justify-center my-4">
                    <Image
                        src="https://source.unsplash.com/random/800x450"
                        alt="Mastering Tailwind CSS: Advanced Techniques"
                        className="w-full h-auto max-w-lg"
                        width={800}
                        height={450}
                    />
                </div>
                <h3>Conclusion</h3>
                <p>By mastering these advanced Tailwind CSS techniques, you can leverage its full potential to create responsive, scalable, and performant UIs for your web applications.</p>
            </>
        ),
    },
];
