import React from 'react'

const List = props => {
  const listUl = propOr('list pl0 mt0 measure center', 'listUl', props.themeStyles)
  return (
    <ul className={`${listUl}`}>
      {props.children}
    </ul>
  )
}

export default List
