import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
const { propOr } = R

const TextField = props => {
  const width = props.width ? `w-${props.width}` : 'w-100'
  return (
    <div className="measure">
      <label htmlFor={props.label} className="f6 b db mb2">
        {props.label}
        {' '}
        {props.optional && <span className="normal black-60">(optional)</span>}
      </label>
      <input
        id={props.label}
        className={`input-reset ba b--black-20 pa2 mb2 db ${width}`}
        type="text"
        aria-describedby="name-desc"
        value={props.value}
        onChange={props.onChange}
      />
      <small className="f6 black-60 db mb2">{props.help}</small>
    </div>
  )
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  help: PropTypes.string,
  optional: PropTypes.bool,
  width: PropTypes.string
}

export default TextField
