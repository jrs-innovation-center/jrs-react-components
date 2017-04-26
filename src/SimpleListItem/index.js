import React from 'react'

const SimpleListItem = ({ title, description, link, themeStyles }) => {
  const simpleListItemLi = propOr('flex items-center lh-copy pa3 ph0-l bb b--black-10', 'simpleListItemLi', themeStyles)
  const simpleListItemDiv = propOr('pl3 flex-auto', 'simpleListItemDiv', themeStyles)
  const simpleListItemSpanTitle = propOr('f6 db black-70', 'simpleListItemSpanTitle', themeStyles)
  const simpleListItemSpanDescription = propOr('f6 db black-70', 'simpleListItemSpanDescription', themeStyles)

  return (
    <li className={`${simpleListItemLi}`}>
      <div className={`${simpleListItemDiv}`}>
        <span className={`${simpleListItemSpanTitle}`}>{title}</span>
        <span className={`${simpleListItemSpanDescription}`}>{description}</span>
      </div>
      <div>
        {link}
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
