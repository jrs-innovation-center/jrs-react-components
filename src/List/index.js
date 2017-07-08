import React from 'react'
import R from 'ramda'
const { propOr } = R

const List = props => {
  const listUl = propOr('list pl0 mt0 measure', 'listUl', props.themeStyles)
  return (
    <ul className={`${listUl}`}>
      {props.children}
    </ul>
  )
}

export default List
