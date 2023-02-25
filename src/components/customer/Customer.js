import React from 'react'
import Header from '../header/Header'
import CustomerItem from '../layouts/CustomerItem'
import ImgTag from '../layouts/ImgTag'
import TittleHeading from '../layouts/TittleHeading'
import "./customer.css"

const Customer = () => {
  return (
    <section id="customer">
        <div className="container">
            <div className="customer_wrap">
                <div className="custom_left">
                    <Header>
                        <div className="header">
                            <TittleHeading tittle="Our customer say"/>
                        </div>
                    </Header>
                    <div className="cus_box_wrap">
                        <CustomerItem src="images/cus1.png"/>
                        <CustomerItem src="images/cus1.png"/>
                        <CustomerItem src="images/cus1.png"/>
                        <CustomerItem src="images/cus1.png"/>
                    </div>
                    <div className="com_pera">
                        <p>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.</p>
                    </div>
                    <div className="cus_btm">
                        <div className="cus_name">
                            <h3>Jonathon</h3>
                        </div>
                        <div className="cus_btns">
                            <a href="#"><i className="fa-solid fa-angle-left"></i></a>
                            <a href="#"><i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="custom_right">
                    <ImgTag src="images/customer_right.png"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Customer