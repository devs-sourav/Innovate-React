import React from 'react'
import Header from '../header/Header'
import BtnTag from '../layouts/BtnTag'
import TittleHeading from '../layouts/TittleHeading'
import WorkItem from '../layouts/WorkItem'
import "./work.css"

const Work = () => {
  return (
    <section id="work">
        <div className="icon_img">
            <img src="images/Work_icon.png" alt="Work_icon.png"/>
        </div>
        <div className="container">
            <div className="work_wrap">
                <div className="work_head">
                    <Header>
                        <div className="header">
                            <h4>digital experience</h4>
                            <TittleHeading tittle="The hundred of completed works still counting"/>
                        </div>
                    </Header>

                    <div className="btn">
                        <BtnTag name="View all"/>
                    </div>
                </div>
                <div className="work_img_wrap">
                    <div className="img_left">
                        <WorkItem tittle="Mobile App" link="Read More" src="images/work_small.png"/>
                    </div>
                    <div className="img_left img_right">
                        <WorkItem tittle="eCommerce Solution" link="Read More" src="images/work_big.png"/>
                    </div>
                    <div className="img_left img_right">
                        <WorkItem tittle="eCommerce Solution" link="Read More" src="images/work_big.png"/>
                    </div>
                    <div className="img_left">
                        <WorkItem tittle="Mobile App" link="Read More" src="images/work_small.png"/>
                    </div>

                </div>
                <div className="cross_work"><i className="fa-solid fa-xmark"></i></div>
            </div>
        </div>
        
    </section>
  )
}

export default Work