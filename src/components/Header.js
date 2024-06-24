import React from "react";
import Wave from "./UI/Wave";

function Header({ setCurrentPage }) {
  return (
    <div className="relative">
      <div className="absolute w-screen -top-20 overflow-hidden">
        <Wave />
      </div>
      <div className="relative flex items-center justify-between w-screen pt-8 px-20">
        <div className="flex flex-col items-start text-primary-textgreen font-extrabold text-lg">
          <span>Sociable</span>
          <span>Spot</span>
          <div>
            {/* Uncomment and adjust the Image component if using Next.js or another framework */}
            {/* <Image src={`/public/Logo.png`} alt='Logo' width={100} height={100} /> */}
          </div>
        </div>
        <div className="flex items-center gap-x-8 font-semibold text-primary">
          <div onClick={() => setCurrentPage('Home')} className="cursor-pointer">Home</div>
          <div onClick={() => setCurrentPage('Services')} className="cursor-pointer">Services</div>
          <div onClick={() => setCurrentPage('Blogs')} className="cursor-pointer">Blogs</div>
          <div onClick={() => setCurrentPage('About')} className="cursor-pointer">About</div>
          <div onClick={() => setCurrentPage('Contact')} className="cursor-pointer">Contact</div>
        </div>
        <div>
          {/* <Button title="Contact Us" href="/" /> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
