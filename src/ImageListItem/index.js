import React, { PropTypes } from 'react'
import {propOr} from 'ramda'

const ImageListItem = ({ image, title, description, link, themeStyles }) => {
  const imageListItemLi = propOr('flex items-center lh-copy pa2 ph0-l bb b--black-10', 'imageListItemLi', themeStyles)
  const imageListItemImg = propOr('w2 h2 w3-ns h3-ns br-100', 'imageListItemImg', themeStyles)
  const imageListItemDiv = propOr('pl3 flex-auto', 'imageListItemDiv', themeStyles)
  const imageListItemSpanTitle = propOr('f6 db black-70', 'imageListItemSpanTitle', themeStyles)
  const imageListItemSpanDescription = propOr('f6 db black-70', 'imageListItemSpanDescription', themeStyles)

  return (
    <li className={`${imageListItemLi}`}>
      <img className={`${imageListItemImg}`} src={image} />
      <div className={`${imageListItemDiv}`}>
        <span className={`${imageListItemSpanTitle}`}>{title}</span>
        <span className={`${imageListItemSpanDescription}`}>{description}</span>
      </div>
      <div>
        {link}
      </div>
    </li>
  )
}

ImageListItem.propTypes = {
  image: React.PropTypes.string,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  link: React.PropTypes.element
}

export default ImageListItem
