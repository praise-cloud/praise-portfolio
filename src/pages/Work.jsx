import React from 'react'
import WorkList from '../components/constant/Work'

const Work = () => {
  return (
    <>
    <div className="w-[100wv] h-[100vh] bg-[#1a1818]">
        <div className="flex">
            {/* the section division of the website  */}
                <div className="left-nav">
                    <div className="left-nav-item">
                        <a href="/home">
                            Home
                        </a>
                    </div>

                    {/* the line */}
                        <div className="left-nav-line"></div>

                        {/* copywrite */}
                        <div className="left-nav-copyright-withoutLinks">
                            <div className="left-nav-copyright-item">@/2024</div>
                        </div>
                    </div>

                    {/* my information section */}

                    <div className="section-left">
                        <div className="section-left-content">
                            <div className="header-section">
                                <h1 className="header-section-head-work">Work</h1>
                            </div>
                            <div className="header-description-work">
                                <p>
                                Welcome to a collection of my finest projects, where I combine creativity and strategy to deliver impactful solutions in web development, no-code innovation, product design, and management. Each piece reflects my passion for turning ideas into reality
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*pages */}

                    <div className="section-right-work">
                        <div className="section-right-content ">
                            <ul>
                                {WorkList.map((links, index) => (
                                        <li
                                            key={index}
                                            className="section-right-link">
                                        <a href={links.path} className="section-right-work-link">
                                            {links.name}
                                                <p className="section-right-work-link-category">
                                                    {links.category}
                                                </p>
                                            </a>
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

export default Work
