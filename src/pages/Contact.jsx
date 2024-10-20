import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-[100wv] h-[100vh] bg-[#1a1818]">
        <div className="flex">
          {/* the section division of the website  */}
          <div className="left-nav">
            <div className="left-nav-item">
              <a href="/home">Home</a>
            </div>

            {/* the line */}
            <div className="left-nav-line"></div>

            {/* copywrite */}
            <div className="left-nav-copyright-withoutLinks">
              <div className="left-nav-copyright-item">@/2024</div>
            </div>
          </div>

          {/* my information section */}

          <div className="section-left-contact">
            <div className="section-left-contact-content">
              <div className="header-section-contact">
                <h1 className="header-section-head-contact">Hello.</h1>

                <h3 className="text-[4.8rem] w-[90rem] text-[#ece7e1] leading-none">
                  Let's talk about a project, collaboration or an idea you may
                  have.
                </h3>
                <p className="text-[#ece7e1] pt-10 text-[16px]">
                  Email:{" "}
                  <a
                    className="px-2 underline tracking-wider"
                    href="mailto:someone@example.com"
                  >
                    georgewillpraise1@gmail.com
                  </a>
                </p>
                <p className="text-[#ece7e1] pt-5 text-[16px]">
                  Check me On:
                  <a href="" className="px-2 underline tracking-wider">
                    LinkedIn
                  </a>
                  /
                  <a href="" className="px-2 underline tracking-wide">
                    Instagram
                  </a>
                  /
                  <a href="" className="px-2 underline tracking-wide">
                    Twitter
                  </a>
                  /
                  <a href="" className="px-2 underline tracking-wide">
                    Github
                  </a>
                  /
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
