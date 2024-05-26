import Image from "next/image";

export const Blogs = [
    {
        id: 1,
        title: "How to use NextJS 13 in 2022",
        subtitle: "An Introduction to NextJS 13",
        image: "/Assets/icons/nextjs.png",
        description: (
            <>
                <p className="mb-4 font-thin">NextJS 13 introduces several new features that make building React applications even more efficient and enjoyable. In this blog, we{"'"}ll explore how to get started with NextJS 13 and highlight some of the key improvements and new capabilities.</p>
                <h2>Getting Started with NextJS 13</h2>
                <p>NextJS 13 builds on the strong foundation of its predecessors, offering a streamlined developer experience and powerful new tools. To get started with NextJS 13, you{"'"}ll need to set up a new project. Here{"'"}s a quick guide to help you get started:</p>
                <ol>
                    <li><strong>Install Node.js and npm</strong>: Ensure you have Node.js installed on your machine. You can download it from the <a href="https://nodejs.org/">official website</a>.</li>
                    <li><strong>Create a New NextJS Project</strong>: Use the command below to create a new NextJS application.
                        <pre><code>npx create-next-app@latest</code></pre>
                    </li>
                    <li><strong>Navigate to Your Project Directory</strong>:
                        <pre><code>cd your-project-name</code></pre>
                    </li>
                    <li><strong>Run the Development Server</strong>:
                        <pre><code>npm run dev</code></pre>
                    </li>
                </ol>
                <p>This will start the development server, and you can view your new NextJS 13 application at <code>http://localhost:3000</code>.</p>
                <h3>Key Improvements in NextJS 13</h3>
                <ul>
                    <li><strong>File-System Routing</strong>: NextJS 13 introduces an enhanced file-system routing mechanism. This allows developers to create routes by simply adding files to the <code>pages</code> directory. This system is more intuitive and reduces boilerplate code.</li>
                    <li><strong>Improved Data Fetching</strong>: Data fetching in NextJS 13 is more flexible and efficient, supporting both static generation and server-side rendering. The introduction of <code>getStaticProps</code> and <code>getServerSideProps</code> functions simplifies data management.</li>
                    <li><strong>New Image Component</strong>: The <code>Image</code> component in NextJS 13 has been optimized for better performance and automatic image optimization.</li>
                </ul>
                <h3>Enhanced Developer Experience</h3>
                <p>NextJS 13 focuses on providing a better developer experience with features like hot reloading, improved error handling, and comprehensive documentation. The built-in support for TypeScript and Sass further enhances the development workflow.</p>
                <div className="w-full h-auto flex flex-col justify-center my-4">
                    <Image
                        src="/Assets/images/project1.png"
                        alt="How to use NextJS 13 in 2022"
                        className="w-full h-auto max-w-lg"
                        width={800}
                        height={450}
                    />
                    <Image
                        src="/Assets/images/project1.png"
                        alt="How to use NextJS 13 in 2022"
                        className="w-full h-auto max-w-lg"
                        width={800}
                        height={450}
                    />
                </div>
            </>
        ),
    },
    {
        id: 2,
        title: "Understanding the New Features in NextJS 13",
        subtitle: "Whats New in NextJS 13",
        image: "/Assets/icons/nextjs.png",
        description: (
            <>
                <p>NextJS 13 comes with a variety of new features designed to improve performance and developer experience. This blog covers the latest updates, including the new file-system routing, improved data fetching methods, and more.</p>
                <h3>New File-System Routing</h3>
                <p>One of the most significant updates in NextJS 13 is the enhanced file-system routing. This feature allows you to create routes by simply adding files to the <code>pages</code> directory, making the process more straightforward and reducing the need for extensive configuration.</p>
                <h3>Improved Data Fetching Methods</h3>
                <p>NextJS 13 introduces improved data fetching methods that cater to both static and dynamic sites. With functions like <code>getStaticProps</code> and <code>getServerSideProps</code>, you can fetch data at build time or request time, respectively, providing greater flexibility in how you manage your application{"'"}s data.</p>
                <h3>New and Enhanced Components</h3>
                <p>NextJS 13 includes several new and enhanced components designed to optimize performance and streamline development:</p>
                <ul>
                    <li><strong>Image Component</strong>: Automatically optimizes images for better performance.</li>
                    <li><strong>Link Component</strong>: Improved for better navigation and prefetching.</li>
                </ul>
                <div className="w-full h-auto flex justify-center my-4">
                    <Image
                        src="/Assets/images/project2.png"
                        alt="Understanding the New Features in NextJS 13"
                        className="w-full h-auto max-w-lg"
                        width={800}
                        height={450}
                    />
                </div>
                <h3>Conclusion</h3>
                <p>NextJS 13 is a powerful update that brings many new features and improvements. From the enhanced file-system routing to improved data fetching and optimized components, it provides developers with the tools needed to build high-performance, modern web applications. Whether you{"'"}re a seasoned NextJS user or new to the framework, NextJS 13 offers a robust and efficient way to create amazing web experiences.</p>
            </>
        ),
    },
];