import React from 'react'
import ImgTag from './ImgTag'

const CustomerItem = ({src}) => {
  return (
    <div className="box">
        <ImgTag src={src}/>
    </div>
  )
}

export default CustomerItem