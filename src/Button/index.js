import React, { PropTypes } from 'react'

const Button = props => {

  const button = propOr('f6 link dim ph3 pv2 mb2 dib white bg-black', 'button', props.themeStyles)

  return (
    <button onClick={props.onClick} className={`${button}`}>
      {props.children}
    </button>
  )
}

Button.propTypes = { onClick: PropTypes.func }

export default Button
