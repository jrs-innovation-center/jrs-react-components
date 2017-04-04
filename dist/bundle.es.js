import React, { PropTypes } from 'react';

var Button = function (props) {
  var defaultClass = 'f6 link dim ph3 pv2 mb2 dib white bg-black';
  return (
    React.createElement( 'button', { onClick: props.onClick, className: props.className || defaultClass },
      props.children
    )
  )
};

Button.propTypes = { onClick: PropTypes.func, className: PropTypes.string };

var ImageListItem = function (ref) {
  var image = ref.image;
  var title = ref.title;
  var description = ref.description;
  var link = ref.link;

  return (
    React.createElement( 'li', { className: 'flex items-center lh-copy pa3 ph0-l bb b--black-10' },
      React.createElement( 'img', { className: 'w2 h2 w3-ns h3-ns br-100', src: image }),
      React.createElement( 'div', { className: 'pl3 flex-auto' },
        React.createElement( 'span', { className: 'f6 db black-70' }, title),
        React.createElement( 'span', { className: 'f6 db black-70' }, description)
      ),
      React.createElement( 'div', null,
        link
      )
    )
  )
};

ImageListItem.propTypes = {
  image: React.PropTypes.string,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  link: React.PropTypes.element
};

var List = function (props) {
  return (
    React.createElement( 'ul', { className: 'list pl0 mt0 measure center' },
      props.children
    )
  )
};

export { Button, ImageListItem, List };
