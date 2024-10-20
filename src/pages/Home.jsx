import React from 'react'
import SocialMedia from "../components/constant/Socials"
import NavLinks from "../components/constant/NavLinks"

const Home = () => {
  return (
    <>
        <div className="container">
            <div className="nav-left">
                    {SocialMedia.map((links, index) => (
                <div className="nav-left-item">
                        <a
                            href={links.path}
                            key={index}
                            className="nav-left-link">
                            {links.name}
                        </a>
                </div>
                    ))}
                <div className="nav-line"></div>
                <div className="nav-left-item nav-copyright">
                    <div className="copyright">@/2024</div>
                </div>
            </div>

            <div className="wrapper">
                <div className="section-left">
                    <div className="content content-main">
                        <div className="header-mask">
                            <h1 className="">
                                PRAISE UGOCHIM GEORGEWILL
                            </h1>
                        </div>
                        <div className="description-mask">
                            <p className="description">
                                Software Engineer / Smart Contract Developer / Cybersecurity Analyst / Product Desginer
                            </p>
                        </div>
                        <div className="description-mask">
                            <p className="description">
                                Currently upscaling my skills and portfolio, still working on
                                <a
                                    href="/"
                                    target="_blank"
                                    className="px-2 underline">
                                    MediLink
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section-right">
                    <div className="nav">
                        {NavLinks.map((link, index) => (
                            <div className="nav-item">
                                <a
                                    href={link.path}
                                    className="nav-link"
                                    key={index}
                                    >
                                    {link.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
