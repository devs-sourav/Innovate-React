import React from 'react'

const CountItem = ({number,text}) => {
  return (
    <div className="count_item">
        <div className="count_text">
            <h3>{number}</h3>
            <h4>{text}</h4>
        </div>
    </div>
  )
}

export default CountItem