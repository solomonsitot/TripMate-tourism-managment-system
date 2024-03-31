import React from 'react'
function Cards(props) {
  return (
    <div className={props.classname}>
    <img src={props.image} alt="" />
    <p>{props.text}</p>
  </div>
  )
}

export default Cards