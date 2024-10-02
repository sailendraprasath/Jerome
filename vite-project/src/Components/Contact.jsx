import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="bg-rose-300/75 p-10">
        <div className="flex  mx-auto items-center  flex-col container font-welcome space-y-3 space-x-6 ">
          <h1 className="text-5xl max-sm:text-3xl font-extrabold text-Contact1  ">
            Contact US
          </h1>
          <p className="text-center   max-sm:text-[15px]  text-3xl">
            {/* New ECR, 100 Feet Rd, Solai Nagar, Kottakuppam, Tamil Nadu 605104 */}
            115 mela kailasapuram thathaneri main road madurai
          </p>
          <p className="text-xl">(06384000472)</p>
        </div>
      </div>
      <div>
        <iframe
          className="mx-auto flex relative  w-full h-[250px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.118915474929!2d79.83351417510646!3d11.966267888264257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5363a7667693d9%3A0xe3d42802b8180b18!2sRose%20Supermarket%20(%20SUPER%20MARKET%20NEAR%20ME)!5e0!3m2!1sen!2sin!4v1726849019697!5m2!1sen!2sin"
        ></iframe>
      </div>
      <div className="bg-rose-300/75 p-12">
        <div className="flex  mx-auto items-center  flex-col container font-welcome space-y-3 space-x-6 ">
          <h1 className="text-5xl max-sm:text-3xl font-extrabold text-Contact1  ">
            Opening hours
          </h1>
          <p className="text-3xl max-sm:text-base">
            Monday - Sunday: 9am - 10pm
          </p>
        </div>
      </div>
      <div className="p-10">
        <div className="flex  mx-auto items-center  flex-col container font-welcome space-y-5 space-x-6 ">
          <h1 className="text-4xl max-sm:text-2xl font-extrabold text-black ">
            Sailesh Super Market
          </h1>
          <p>Contact @TheSaileshSuperMarket.com </p>
        </div>
      </div>
      <div className="bg-rose-300/75 p-10">
        <div className="flex  mx-auto items-center  flex-col container font-welcome space-y-3 space-x-6 ">
          <h1 className="text-5xl max-sm:text-3xl font-extrabold text-Contact1  ">
            Social Media
          </h1>
          <div className="flex flex-row text-4xl space-x-8">
            <FaSquareFacebook />
            <IoLogoYoutube />
            <FaInstagram />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
