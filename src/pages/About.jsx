import React from "react";

const About = () => {
  return (
    <>
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

        <div className="section-left-about">
          <div className="section-left-about-content">
            <div className="header-section">
              <h1 className="header-section-head-about">
                About
                <span className="header-section-head-about-span">me</span>
              </h1>
            </div>
            <div className="header-description">
              <h2 className="about-description-head">
                Hi, I'm Praise, a software engineer and solution maker
              </h2>
              <p className="about-description-p">
                My journey in tech began with a deep curiosity and passion for
                building things from a young age. I was always fascinated by how
                technology could be used to create solutions.
              </p>

              <p className="about-description-p">
                Over the years, that fascination has evolved into a career where
                I continuously seek to solve problems, no matter how complex or
                time-consuming. I thrive on the challenge of finding solutions
                and turning ideas into functional, impactful products.
              </p>

              <p className="about-description-p">
                As I delved deeper into technology, my passion for innovation
                only grew. Every project taught me something new, from
                developing complex software systems to designing seamless user
                experiences. I’ve embraced the challenges along the way,
                constantly learning and refining my skills to stay ahead in this
                ever-evolving field.
              </p>
            </div>

            <div className="about-services">
              <h2 className="about-services-head">I can help you with ...</h2>
              <div className="about-services-section">
                <div className="about-services-section-item">
                  <h1 className="about-services-section-item-number">01</h1>
                  <h3 className="about-services-section-item-header">Design</h3>
                  <p className="about-services-section-item-p">
                    I create visually engaging and user-centered websites that
                    balance creativity with functionality. By focusing on
                    intuitive layouts and seamless user experiences, I design
                    websites that not only look great but also convert visitors
                    into customers.
                  </p>
                </div>
                <div className="about-services-section-item">
                  <h1 className="about-services-section-item-number">02</h1>
                  <h3 className="about-services-section-item-header">
                    Development
                  </h3>
                  <p className="about-services-section-item-p">
                    From front-end to back-end development, I build robust and
                    responsive websites tailored to meet business needs. My
                    expertise spans a range of technologies, ensuring your site
                    is scalable, secure, and optimized for performance.
                  </p>
                </div>
                <div className="about-services-section-item">
                  <h1 className="about-services-section-item-number">03</h1>
                  <h3 className="about-services-section-item-header">
                    Smart Contract
                  </h3>
                  <p className="about-services-section-item-p">
                    Specializing in blockchain solutions, I develop secure and
                    efficient smart contracts that drive decentralized
                    applications (DApps). Whether you're launching a token or
                    implementing a decentralized finance (DeFi) solution, I
                    ensure your contracts are reliable and aligned with industry
                    standards
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <h2 className="about-experience-head">EXPERIENCE</h2>

                <div className="about-experience-content">
                  <p className="about-experience-p">
                    - Certification in Ethical Hacking
                  </p>
                  <p className="about-experience-p">
                    - Certification in Software Engineering
                  </p>
                </div>

                <div className="flex">
                  <p className="about-experience-p py-5">
                    with 2 years of experience in frontend development and web
                    design
                  </p>
                </div>

                <div className="relative">
                  <h2 className="about-experience-head2">SKILLS</h2>
                  <p className="w-[35rem] leading-[2rem]">
                    Javascript / Typescript / Java / Python / HTML & CSS /
                    Framer Developer / Tailwind / Bootstrap / Nodejs / React /
                    UI Design / Sodility / MySql / MonogoDB / Firebase
                  </p>
                </div>

                <div className="relative py-10">
                  <a
                    href="/"
                    className="bg-[#1a1818] text-white text-[1.5rem] px-16 py-2 justify-center items-center rounded-full transition-all duration-500 hover:px-20"
                  >
                    My CV
                  </a>
                </div>

                <div className="relative">
                  <p className="about-experience-p w-[40rem]">
                    While all the work in this portfolio is solely developed by
                    me—from design to UX, process, engineering, and
                    strategy—none of it would have been possible without the
                    inspiration and creativity sparked by others. The ideas,
                    insights, and knowledge I've gained from various sources
                    have deeply influenced my growth and career. I'm grateful to
                    those who have inspired and motivated me along the way
                  </p>
                </div>

                <div className="relative pt-10 pb-64">
                  <a
                    href="/"
                    className="bg-[#1a1818] text-white text-[1.5rem] px-16 py-2 justify-center items-center rounded-full transition-all duration-500 hover:px-20 "
                  >
                    Contact me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
