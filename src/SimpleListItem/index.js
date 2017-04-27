import React, { PropTypes } from 'react'
import {propOr} from 'ramda'

const SimpleListItem = (props) => {
  const simpleListItemLi = propOr('flex items-center lh-copy pa3 ph0-l bb b--black-10', 'simpleListItemLi', props.themeStyles)
  const simpleListItemDiv = propOr('pl3 flex-auto', 'simpleListItemDiv', props.themeStyles)
  const simpleListItemSpanTitle = propOr('f4 db black-70', 'simpleListItemSpanTitle', props.themeStyles)
  const simpleListItemSpanDescription = propOr('f6 db black-70', 'simpleListItemSpanDescription', props.themeStyles)

  return (
    <li className={`${simpleListItemLi}`}>
      <div className={`${simpleListItemDiv}`}>
        <span className={`${simpleListItemSpanTitle}`}>{props.title}</span>
        <span className={`${simpleListItemSpanDescription}`}>{props.description}</span>
      </div>
      <div>
        {props.link}
      </div>
    </li>
  )
}

SimpleListItem.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  link: React.PropTypes.element
}

export default SimpleListItem
