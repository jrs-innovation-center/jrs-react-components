import React, { PropTypes } from 'react'

const Button = props => {
  const defaultClass = 'f6 link dim ph3 pv2 mb2 dib white bg-black'
  return (
    <button onClick={props.onClick} className={props.className || defaultClass}>
      {props.children}
    </button>
  )
}

Button.propTypes = { onClick: PropTypes.func, className: PropTypes.string }

export default Button
