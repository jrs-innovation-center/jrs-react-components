'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var Button = function (props) {
  var defaultClass = 'f6 link dim ph3 pv2 mb2 dib white bg-black';
  return (
    React__default.createElement( 'button', { onClick: props.onClick, className: props.className || defaultClass },
      props.children
    )
  )
};

Button.propTypes = { onClick: React.PropTypes.func, className: React.PropTypes.string };

var ImageListItem = function (ref) {
  var image = ref.image;
  var title = ref.title;
  var description = ref.description;
  var link = ref.link;

  return (
    React__default.createElement( 'li', { className: 'flex items-center lh-copy pa3 ph0-l bb b--black-10' },
      React__default.createElement( 'img', { className: 'w2 h2 w3-ns h3-ns br-100', src: image }),
      React__default.createElement( 'div', { className: 'pl3 flex-auto' },
        React__default.createElement( 'span', { className: 'f6 db black-70' }, title),
        React__default.createElement( 'span', { className: 'f6 db black-70' }, description)
      ),
      React__default.createElement( 'div', null,
        link
      )
    )
  )
};

ImageListItem.propTypes = {
  image: React__default.PropTypes.string,
  title: React__default.PropTypes.string,
  description: React__default.PropTypes.string,
  link: React__default.PropTypes.element
};

var List = function (props) {
  return (
    React__default.createElement( 'ul', { className: 'list pl0 mt0 measure center' },
      props.children
    )
  )
};

exports.Button = Button;
exports.ImageListItem = ImageListItem;
exports.List = List;
