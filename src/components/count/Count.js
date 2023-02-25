import React from 'react'
import BtnTag from '../layouts/BtnTag'
import CountItem from '../layouts/CountItem'
import ImgTag from '../layouts/ImgTag'
import ParaText from '../layouts/ParaText'
import "./count.css"

const Count = () => {
  return (
    <section id="count">

        <div className="container">
            <div className="count_wrap">
                <div className="circle2">
                    <div className="cir_circle2"></div>
                </div>
                <div className="count_left">
                    <CountItem number="19+" text="Total top service"/>
                    <CountItem number="27+" text="Total top service"/>
                    <CountItem number="98%" text="Total top service"/>
                    <CountItem number="1,458" text="Usual users"/>
                </div>
                <div className="dig_item_right">
                    <h3>The hundred of completed works still counting</h3>
                    <ParaText text="Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels."/>
                    <div className="btn">
                        <BtnTag name="More about us"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="count_icon">
            <ImgTag src="images/count_body_icon.png"/>
        </div>
    </section>
  )
}

export default Count