import React from 'react'
import BtnTag from '../layouts/BtnTag'
import ImgTag from '../layouts/ImgTag'
import ParaText from '../layouts/ParaText'

const BanOvItem = ({link,name,para}) => {
  return (
    <div className="ban_ov_item">
        <div className="ov_img">
            <ImgTag src={link}/>
        </div>
        <div className="ov_text">
            <BtnTag name={name}/>
            <ParaText text={para}/>
        </div>
    </div>
  )
}

export default BanOvItem