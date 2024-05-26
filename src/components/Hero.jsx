import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="w-full h-auto md:h-screen bg-primary">
        <div className="hero-container relative">
          <Image
            src="/Assets/icons/star.svg"
            alt="hero"
            width={30}
            height={30}
            className="absolute right-8 md:top-50 md:right-96 rotate-45 animate-bounce"
          />
          <h1 className="hero-title revAnim">Hi. I{"'"}m Riyan</h1>
          <p className="hero-subtitle revAnim2 opacity-0">
            I{"'"}m passionate about crafting beautiful web design, that work
            great on any device, and write clean tidy code.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
