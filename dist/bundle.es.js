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

var Card = function (props) {
  return (
    React.createElement( 'article', { className: 'mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10' },
      React.createElement( 'div', { className: 'tc' },
        React.createElement( 'img', {
          src: 'http://tachyons.io/img/avatar_1.jpg', className: 'br-100 h4 w4 dib ba b--black-05 pa2', title: 'Photo of a kitty staring at you' }),
        React.createElement( 'h1', { className: 'f3 mb2' }, props.title),
        React.createElement( 'h2', { className: 'f5 fw4 gray mt0' }, props.description)
      ),
      props.children
    )
  )
};

var TextField = function (props) {
  var width = props.width ? ("w-" + (props.width)) : 'w-100';
  return (
    React.createElement( 'div', { className: 'measure' },
      React.createElement( 'label', { htmlFor: props.label, className: 'f6 b db mb2' },
        props.label,
        ' ',
        props.optional && React.createElement( 'span', { className: 'normal black-60' }, "(optional)")
      ),
      React.createElement( 'input', {
        id: props.label, className: ("input-reset ba b--black-20 pa2 mb2 db " + width), type: 'text', 'aria-describedby': 'name-desc', value: props.value, onChange: props.onChange }),
      React.createElement( 'small', { className: 'f6 black-60 db mb2' }, props.help)
    )
  )
};

TextField.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  help: React.PropTypes.string,
  optional: React.PropTypes.bool,
  width: React.PropTypes.string
};

var Panel = function (props) {
  var bgColor = 'bg-' + props.bgColor || 'bg-purple';
  return (
    React.createElement( 'article', { className: 'ba' },
      React.createElement( 'header', { className: ("pa4 " + bgColor + " white-60") },
        React.createElement( 'h2', null, props.title )
      ),
      React.createElement( 'section', { className: 'pa2' },
        props.children
      ),
      React.createElement( 'footer', { className: ("pa4 " + bgColor + " white-80") },
        React.createElement( 'div', { className: 'cf' },
          React.createElement( 'div', { className: 'fr dark-purple' },
            props.onPrevious && (
            React.createElement( 'button', {
              className: ("ba grow bg-white " + bgColor + " b--green pa2"), onClick: props.onPrevious }, "Previous")
                ), "| ", props.onNext && (
            React.createElement( 'button', {
              className: ("ba grow bg-white " + bgColor + " b--green pa2"), onClick: props.onNext }, "Next")
                ), "| ", props.onFinish && (
            React.createElement( 'button', {
              className: ("ba grow bg-white " + bgColor + " b--green pa2"), onClick: props.onFinish }, "Finish")
                )
          )
        )
      )
    )
  )
};

Panel.propTypes = {
  onPrevious: React.PropTypes.func.isRequired,
  onNext: React.PropTypes.func.isRequired,
  onFinish: React.PropTypes.func,
  title: React.PropTypes.string
};

export { Button, ImageListItem, List, Card, TextField, Panel };
