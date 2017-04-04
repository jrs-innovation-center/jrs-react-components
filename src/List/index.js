import React from 'react'

const List = props => {
  return (
    <ul className='list pl0 mt0 measure center'>
      {props.children}
    </ul>
  )
}

export default List
