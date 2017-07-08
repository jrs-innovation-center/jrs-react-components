import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
const { propOr } = R

const Button = props => {
  //const button = propOr('ba dim pa1 bg-near-white dark-gray', 'button', props.themeStyles)
  const button = propOr(
    'f6 link dim br1 ba ph3 pv2 mb2 dib black',
    'button',
    props.themeStyles
  )
  return (
    <button onClick={props.onClick} className={`${button}`}>
      {props.children}
    </button>
  )
}

Button.propTypes = { onClick: PropTypes.func }

export default Button
