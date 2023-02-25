import React from 'react'
import BtnTag from '../layouts/BtnTag'
import FootItem from '../layouts/FootItem'
import Footlist from '../layouts/Footlist'
import ImgTag from '../layouts/ImgTag'
import NavListItem from '../layouts/NavListItem'
import ParaText from '../layouts/ParaText'
import "./footer.css"

const Footer = () => {
  return (
    <footer id="foot">
        <div class="container">
            <div class="foot_wrap">
                <div class="foot_part1">
                    <div class="logo">
                        <a href="#"><ImgTag src="images/Foot Logo.png"/></a>
                    </div>
                    <div class="pera">
                        <ParaText text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page."/>
                    </div>
                </div>
                <div class="foot_part2">
                    <div class="foot_part2_item">
                        <FootItem>
                            <div class="head">
                                <h3>Features</h3>
                                <ul>
                                    <Footlist name="Home"/>
                                    <Footlist name="About"/>
                                    <Footlist name="Benifit"/>
                                    <Footlist name="Price"/>
                                    <Footlist name="Blog"/>
                                </ul>
                            </div>
                        </FootItem>
                    </div>
                    <div class="foot_part2_item">
                        <FootItem>
                            <div class="head">
                                <h3>Products</h3>
                                <ul>
                                    <Footlist name="Task Management"/>
                                    <Footlist name="Company growth"/>
                                    <Footlist name="Time tracking"/>
                                </ul>
                            </div>
                        </FootItem>

                    </div>
                    <div class="foot_part2_item">
                        <FootItem>
                            <div class="head">
                                <h3>Support</h3>
                                <ul>
                                    <Footlist name="Customer service"/>
                                    <Footlist name="Accessibility"/>
                                    <Footlist name="Contact us"/>
                                </ul>
                            </div>
                        </FootItem>
                    </div>
                </div>
            </div>
            <div class="foot_bottom_wrap">
                <h4>@20201 Innovate.All rights reserved.</h4>
                <ul>
                    <Footlist name="Privacy policy"/>
                    <Footlist name="Terms & condition"/>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer