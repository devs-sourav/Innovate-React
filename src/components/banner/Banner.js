import React from 'react'
import BanOvItem from '../layouts/BanOvItem'
import BtnTag from '../layouts/BtnTag'
import ImgTag from '../layouts/ImgTag'
import ParaText from '../layouts/ParaText'
import "./banner.css"

const Banner = () => {
  return (
    <section id="banner">
        <div className="container ban_pos">
            <div className="ban_wrap">
                <div className="ban_text">
                    <h1>We are a full range design agency</h1>
                    <ParaText text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime."/>
                    <div className="ban_btn">
                        <BtnTag name="Contact us"/>
                        <BtnTag name="Showcase"/>
                    </div>
                </div>
            </div>
            <div className="foot_circle">
                <ImgTag src="images/Rectangle.png"/>
            </div>
            <div className="circle2">
                <div className="cir_circle2"></div>
            </div>
            <div className="dot1"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
            <div className="dot4"></div>

            <div className="cross1"><i className="fa-solid fa-xmark"></i></div>
            <div className="cross2"><i className="fa-solid fa-xmark"></i></div>
            <div className="cross3"><i className="fa-solid fa-xmark"></i></div>
            <div className="cross4"><i className="fa-solid fa-xmark"></i></div>

            <div className="ban_ov_wrapper">
                <BanOvItem link="images/grow icon.png" name="Grow your business" para="Nam libero tempore, cum soluta nobis est eligendi optio cumque"/>
                <BanOvItem link="images/digital icon.png" name="Digital marketing" para="Nam libero tempore, cum soluta nobis est eligendi optio cumque "/>
                <BanOvItem link="images/enmgine icon.png" name="Search engine optimization" para="Nam libero tempore, cum soluta nobis est eligendi optio cumque "/>
            </div>
        </div>
        <div className="img_left_ov">
            <ImgTag src="images/Rectangle1.png"/>
        </div>
    </section>
  )
}

export default Banner