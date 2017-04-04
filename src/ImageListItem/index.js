import React from 'react'

const ImageListItem = ({ image, title, description, link }) => {
  return (
    <li className='flex items-center lh-copy pa3 ph0-l bb b--black-10'>
      <img className='w2 h2 w3-ns h3-ns br-100' src={image} />
      <div className='pl3 flex-auto'>
        <span className='f6 db black-70'>{title}</span>
        <span className='f6 db black-70'>{description}</span>
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
