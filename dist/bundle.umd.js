(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.JrsComponents = global.JrsComponents || {}),global.React));
}(this, (function (exports,React) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

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

var Card = function (props) {
  return (
    React__default.createElement( 'article', { className: 'mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10' },
      React__default.createElement( 'div', { className: 'tc' },
        React__default.createElement( 'img', {
          src: 'http://tachyons.io/img/avatar_1.jpg', className: 'br-100 h4 w4 dib ba b--black-05 pa2', title: 'Photo of a kitty staring at you' }),
        React__default.createElement( 'h1', { className: 'f3 mb2' }, props.title),
        React__default.createElement( 'h2', { className: 'f5 fw4 gray mt0' }, props.description)
      ),
      props.children
    )
  )
};

var TextField = function (props) {
  var width = props.width ? ("w-" + (props.width)) : 'w-100';
  return (
    React__default.createElement( 'div', { className: 'measure' },
      React__default.createElement( 'label', { htmlFor: props.label, className: 'f6 b db mb2' },
        props.label,
        ' ',
        props.optional && React__default.createElement( 'span', { className: 'normal black-60' }, "(optional)")
      ),
      React__default.createElement( 'input', {
        id: props.label, className: ("input-reset ba b--black-20 pa2 mb2 db " + width), type: 'text', 'aria-describedby': 'name-desc', value: props.value, onChange: props.onChange }),
      React__default.createElement( 'small', { className: 'f6 black-60 db mb2' }, props.help)
    )
  )
};

TextField.propTypes = {
  label: React__default.PropTypes.string.isRequired,
  value: React__default.PropTypes.string.isRequired,
  onChange: React__default.PropTypes.func.isRequired,
  help: React__default.PropTypes.string,
  optional: React__default.PropTypes.bool,
  width: React__default.PropTypes.string
};

exports.Button = Button;
exports.ImageListItem = ImageListItem;
exports.List = List;
exports.Card = Card;
exports.TextField = TextField;

Object.defineProperty(exports, '__esModule', { value: true });

})));
