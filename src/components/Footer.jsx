import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto">
        <div className="pt-5 pb-10 md:pb-20 flex flex-col-reverse md:flex-row  gap-14 md:gap-0 justify-between items-start md:items-end px-7 md:px-48 bg-primary font-sans text-white">
          <div className="flex-1 w-full">
            <h1 className="text-center md:text-left items-center">
              &copy; 2024 Riyan Nugraha.
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <div>
              <h1 className="text-greenl font-bold">Social Media</h1>
              <div className="flex gap-5 pt-3 md:pt-5">
                <BsFacebook />
                <BsGithub />
                <BsInstagram />
              </div>
            </div>
            <div>
              <h1 className="text-greenl font-bold">Contact</h1>
              <div className="pt-2 md:pt-4">
                <p className="text-md">Message</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
