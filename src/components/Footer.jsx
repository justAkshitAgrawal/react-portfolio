import React from "react";
import ContactForm from "./ContactForm";
import Socials from "./Socials";

function Footer() {
  return (
    <div>
      <div
        className="flex flex-col px-20 pb-10 mt-20 lg:mt-40 lg:justify-between lg:flex-row"
        id="footer"
      >
        <div className="flex flex-col max-w-screen-md space-y-10">
          <h1 className="text-5xl font-bold">Just say hi.</h1>
          <h1 className="text-3xl">
            I'm always open to discuss projects and talk about new things.
          </h1>
          <div className="flex flex-col justify-between space-y-8 lg:space-y-0 lg:flex-row">
            <div className="flex flex-col space-y-3">
              <h1>Mail me at:</h1>
              <a href="mailto:akshitaggarwal7@gmail.com">
                <h1>akshitaggarwal7@gmail.com</h1>
              </a>
            </div>
            <div className="flex flex-col space-y-3">
              <h1>Follow me</h1>
              <Socials />
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <h1 className="pt-10 pb-10 text-xl font-light text-center lg:pt-20">
        Copyright © 2022, All rights reserved
      </h1>
    </div>
  );
}

export default Footer;
