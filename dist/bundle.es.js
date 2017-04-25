import React, { PropTypes } from 'react';
import { append, compose, concat, find, keys, map, merge, mergeWith, propOr, reject, zipObj } from 'ramda';

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

//import Themes from '../Themes/index'

//const theme = Themes.getDefaultTheme()


var Panel = function (props) {
  var panelBorder = propOr('ba br2 b--dark-gray','panelBorder', props.themeStyles);
  var bgColor = propOr('bg-near-white','panelBackgroundColor', props.themeStyles);
  var textColor = propOr('dark-gray', 'panelTextColor',  props.themeStyles);

  return (
    React.createElement( 'article', { className: ("" + panelBorder) },
      React.createElement( 'header', { className: ("pa2 " + bgColor + " " + textColor) },
        React.createElement( 'h2', { className: 'fw1 f3 mt1 mb0' }, props.title)
      ),
      React.createElement( 'section', { className: ("pa2 " + bgColor) },
        props.children
      ),
      React.createElement( 'footer', { className: ("pa2 " + bgColor + " gray") },
        React.createElement( 'div', { className: 'cf' },
          React.createElement( 'div', { className: ("fr " + textColor) },
            props.onPrevious && (
            React.createElement( 'button', {
              className: ("ba grow " + bgColor + " " + textColor + " pa2"), onClick: props.onPrevious }, "Previous")
                ), "| ", props.onNext && (
            React.createElement( 'button', {
              className: ("ba grow " + bgColor + " " + textColor + " pa2"), onClick: props.onNext }, "Next")
                ), "| ", props.onFinish && (
            React.createElement( 'button', {
              className: ("ba grow " + bgColor + " " + textColor + " pa2"), onClick: props.onFinish }, "Finish")
                )
          )
        )
      )
    )
  )
};

Panel.propTypes = {
  onPrevious: React.PropTypes.func,
  onNext: React.PropTypes.func.isRequired,
  onFinish: React.PropTypes.func,
  title: React.PropTypes.string
};

var defaultTheme$1 = {
  themeName: 'default-red-theme',
  themeStyles: {
    panelBorder: 'ba bg-black-20',
    panelBackgroundColor: 'bg-dark-red',
    panelTextColor: 'light-gray'
  }
};

var defaultTheme = 'default-red-theme';
var themes = [defaultTheme$1];

function setDefaultTheme(themeName) {
  defaultTheme = themeName;
}

function addTheme(theme) {
  themes = append(theme, themes);
}

function updateTheme(themeName, theme) {
  return compose(
    append(theme),
    reject(function (theme) { return theme.themeName === themeName; })
   )(themes)
}

function replaceThemeStyles(themeName, themeStyles) {
 var foundTheme =  find(function (theme) { return theme.themeName === themeName; })(themes);
 foundTheme.themeStyles = merge(foundTheme.themeStyles, themeStyles);

  return updateTheme(themeName, foundTheme)
 // return compose(
 //   append(foundTheme),
 //   reject(theme => theme.name === themeName)
 //  )(themes)

}


function appendThemeStyles(themeName, themeStyles) {
 var foundTheme = find(function (theme) { return theme.themeName === themeName; })(themes);

 // 1) map through the keys in the incoming themeStyles object and
 //     prepend a space to the key value
 // 2) zip the keys in the object with the new values
 // 3) merge the new values with a concatenation of the
 //     original values

 if (foundTheme) {
    foundTheme =  compose(
      mergeWith(concat, foundTheme.themeStyles),
      zipObj(keys(themeStyles)),
      map(function (key) { return ' z ' + themeStyles[key]; }))
      (keys(themeStyles));

    // 4) update the entire theme
    return replaceThemeStyles(themeName, foundTheme)
  } else {
    return null
  }

}

function getDefaultTheme () {
  return find (function (theme) { return theme.themeName === defaultTheme; }, themes)
}

var Themes = {
  addTheme: addTheme,
  setDefaultTheme: setDefaultTheme,
  replaceThemeStyles: replaceThemeStyles,
  appendThemeStyles: appendThemeStyles,
  getDefaultTheme: getDefaultTheme
};




// Examples

// addTheme({
//   name: 'near-white',
//   styles: {
//     panelBorder: 'ba b--dark-gray',
//     backgroundColor: 'bg-white',
//     textColor: 'black-90'
//   }
// })
//
// setDefaultTheme('near-white')
//
// updateThemeStyles('near-white', {
//       textColor: 'black-60'
// })

// appendThemeStyles('near-white', {
//       textColor: 'black-90',
//       backgroundColor: 'bg-light-green',
// })


// getDefaultTheme()  // retrieve the default theme

export { Button, ImageListItem, List, Card, TextField, Panel, Themes };
