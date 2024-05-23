import TechStack from "@/components/about/TechStack";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <main>
        <section className="w-full h-auto md:h-auto">
          <div className="pt-36 md:pt-52 pb-5 md:pb-20">
            <h1 className="font-fairplay text-[46px] md:text-[80px] text-greenl text-center font-bold px-10 md:px-0">
              I'm Riyan.
            </h1>
          </div>
          <div className="w-full h-auto pb-10 md:pb-20 md:py-20 flex flex-col px-2 md:px-20 md:flex-row">
            {/* left section */}
            <div className="md:w-2/5 flex justify-center ">
              <h1 className="text-greenls text-xl md:text-3xl font-sans text-center">
                " I love to create something simple and clean "
              </h1>
            </div>
            {/* right section */}
            <div className="md:w-3/5 md:ml-12 flex flex-col gap-5 pt-20 md:pt-0 px-5 md:px-0">
              <h1 className="font-bold font-fairplay text-greenl text-2xl md:text-4xl">
                I'm a Frontend Dev working remotely from Bandung, Indonesia.
              </h1>
              <p className="font-sans text-white font-thin md:font-normal">
                Over the past 2+ years, I've worked extensively in frontend
                development, crafting user interfaces and experiences for web
                applications. I have a solid foundation in HTML, CSS, and
                JavaScript, along with experience working with modern frontend
                frameworks like React, NextJS and Laravel.
              </p>
              <p className="font-sans text-white font-thin md:font-normal">
                I'm actively expanding my skills by diving deeper into Next.js,
                a powerful framework for building React applications. I'm
                excited to leverage Next.js to develop fast, scalable, and
                SEO-friendly web applications.
              </p>
            </div>
          </div>

          {/* tech stack */}
          <TechStack />
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
