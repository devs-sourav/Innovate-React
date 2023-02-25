import React from 'react'
import "./digital.css"
import Header from '../header/Header'
import TittleHeading from '../layouts/TittleHeading'
import ParaText from '../layouts/ParaText'
import BtnTag from '../layouts/BtnTag'
import ImgTag from '../layouts/ImgTag'

const Digital = () => {
  return (
    <section id="digital">
        <div className="circle2">
            <div className="cir_circle2"></div>
        </div>
        <div className="cross_dig"><i className="fa-solid fa-xmark"></i></div>
        <div className="container">
            <Header>
                <div className="header">
                    <h4>digital experience</h4>
                    <TittleHeading tittle="Connect people in digital life"/>
                </div>
            </Header>

        </div>
        <div className="dig_wrap">
            <div className="dig_item_left">
                <img src="images/digital_left_img.png" alt="digital_left_img.png"/>
            </div>
            <div className="dig_item_right">
                <h3>More than just an ad agency, we harness the tools of traditional and digital.</h3>
                <ParaText text="With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market."/>
                <div className="btn">
                    <BtnTag name="More about us"/>
                </div>
                <ImgTag src="images/digital_right_img_icon.png"/>
            </div>

        </div>
    </section>
  )
}

export default Digital