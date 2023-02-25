import React from 'react'
import Header from '../header/Header'
import TittleHeading from '../layouts/TittleHeading'
import TrustItem from '../layouts/TrustItem'
import "./trust.css"

const Trust = () => {
  return (
    <section id="trust">
        <div className="container">
            <div className="trust_wrap">
                <Header>
                    <div className="header">
                        <TittleHeading tittle="Trusted by top global companies And orginizations"/>
                    </div>
                </Header>
                <div className="trust_com">
                    <TrustItem src="images/count_icon1.png"/>
                    <TrustItem src="images/count_icon2.png"/>
                    <TrustItem src="images/count_icon3.png"/>
                    <TrustItem src="images/count_icon4.png"/>
                    <TrustItem src="images/count_icon5.png"/>
                    <TrustItem src="images/count_icon6.png"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trust