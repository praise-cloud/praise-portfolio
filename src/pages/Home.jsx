import React from 'react'
import NavLinks from "../components/constant/NavLinks"

const Home = () => {
  return (
    <>
        <div className="w-[100wv] h-[100vh]">
            <div className="flex">
                {/* the section division of the website  */}
                    <div className="left-nav">
                        <div className="left-nav-item">LI</div>
                        <div className="left-nav-item">TW</div>
                        <div className="left-nav-item">DR</div>

                        {/* the line */}
                        <div className="left-nav-line"></div>

                        {/* copywrite */}
                        <div className="left-nav-copyright">
                            <div className="left-nav-copyright-item">@/2024</div>
                        </div>
                    </div>

                    {/* my information section */}

                    <div className="section-left">
                        <div className="section-left-content">
                            <div className="header-section">
                                <h1 className="header-section-head">PRAISE UGOCHIM GEORGEWILL</h1>
                            </div>
                            <div className="header-description">
                                <p>
                                Software Engineer /  Blockchain Engineer / Framer Developer / Product Designer.
                                </p>
                            </div>
                            <div className="header-description pt-10 w-[90%]">
                                <p>
                                Full-time Full Stack Developer working on <a href="https://github.com/praise-cloud/Medilink" className="px-2 underline">MediLink</a>, a platform improving healthcare management.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*pages */}

                    <div className="section-right">
                        <div className="section-right-content">
                            <ul>
                                {NavLinks.map((links, index) => (
                                        <li
                                            key={index}
                                            to={links.path}
                                            className="section-right-link">
                                            {links.name}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Home
