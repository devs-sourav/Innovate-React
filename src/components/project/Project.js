import React from 'react'
import Header from '../header/Header'
import BtnTag from '../layouts/BtnTag'
import ImgTag from '../layouts/ImgTag'
import ParaText from '../layouts/ParaText'
import TittleHeading from '../layouts/TittleHeading'
import "./project.css"

const Project = () => {
  return (
    <section id="project">
        <div className="container">
            <div className="project_head">
                <Header>
                    <div className="header">
                        <h4>Lets talk</h4>
                        <TittleHeading tittle="Got a project?"/>
                    </div>
                </Header>
                <div className="btn">
                    <BtnTag name="View all"/>
                </div>
            </div>
            <div className="project_pera">
                <ParaText text="As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with."/>
            </div>
        </div>
        <div className="project_ov">
            <ImgTag src="images/project_ov.png"/>
        </div>
    </section>
  )
}

export default Project