import React from 'react'

const WorkItem = ({tittle,link,src}) => {
  return (
    <>
        <img src={src} alt="work_small.png"/>
        <div className="work_ov">
            <h3>{tittle}</h3>
            <a href="#">{link}</a>
        </div>
    </>
  )
}

export default WorkItem