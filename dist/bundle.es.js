import React, { PropTypes } from 'react';
import { append, compose, concat, find, keys, map, merge, mergeWith, propOr as propOr$1, reject, zipObj } from 'ramda';

var Button = function (props) {

  var button = propOr('f6 link dim ph3 pv2 mb2 dib white bg-black', 'button', props.themeStyles);

  return (
    React.createElement( 'button', { onClick: props.onClick, className: ("" + button) },
      props.children
    )
  )
};

Button.propTypes = { onClick: PropTypes.func };

var ImageListItem = function (ref) {
  var image = ref.image;
  var title = ref.title;
  var description = ref.description;
  var link = ref.link;
  var themeStyles = ref.themeStyles;

  var imageListItemLi = propOr('flex items-center lh-copy pa3 ph0-l bb b--black-10', 'imageListItemLi', themeStyles);
  var imageListItemImg = propOr('w2 h2 w3-ns h3-ns br-100', 'imageListItemImg', themeStyles);
  var imageListItemDiv = propOr('pl3 flex-auto', 'imageListItemDiv', themeStyles);
  var imageListItemSpanTitle = propOr('f6 db black-70', 'imageListItemSpanTitle', themeStyles);
  var imageListItemSpanDescription = propOr('f6 db black-70', 'imageListItemSpanDescription', themeStyles);

  return (
    React.createElement( 'li', { className: ("" + imageListItemLi) },
      React.createElement( 'img', { className: ("" + imageListItemImg), src: image }),
      React.createElement( 'div', { className: ("" + imageListItemDiv) },
        React.createElement( 'span', { className: ("" + imageListItemSpanTitle) }, title),
        React.createElement( 'span', { className: ("" + imageListItemSpanDescription) }, description)
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
  var listUl = propOr('list pl0 mt0 measure center', 'listUl', props.themeStyles);
  return (
    React.createElement( 'ul', { className: ("" + listUl) },
      props.children
    )
  )
};

var Card = function (props) {
  var cardArticle = propOr('mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10', 'cardArticle', props.themeStyles);
  var cardDiv = propOr('tc', 'cardDiv', props.themeStyles);
  var cardImg = propOr('br-100 h4 w4 dib ba b--black-05 pa2', 'cardImg', props.themeStyles);
  var cardH1 = propOr('f3 mb2', 'cardH1', props.themeStyles);
  var cardH2 = propOr('f5 fw4 gray mt0', 'cardH2', props.themeStyles);

  return (
    React.createElement( 'article', { className: ("" + cardArticle) },
      React.createElement( 'div', { className: ("" + cardDiv) },
        React.createElement( 'img', {
          src: props.image, className: ("" + cardImg), title: props.title }),
        React.createElement( 'h1', { className: ("" + cardH1) }, props.title),
        React.createElement( 'h2', { className: ("" + cardH2) }, props.description)
      ),
      props.children
    )
  )
};

Card.propTypes = {
  image: React.PropTypes.string,
  title: React.PropTypes.string,
  description: React.PropTypes.string
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
  var panelBorder = propOr$1('ba br2 b--dark-gray','panelBorder', props.themeStyles);
  var panelHeader = propOr$1('pa2 bg-near-white dark-gray','panelHeader', props.themeStyles);
  var panelH2 = propOr$1('fw1 f3 mt1 mb0', 'panelH2',  props.themeStyles);
  var panelChildrenSection = propOr$1('pa2 bg-near-white', 'panelChildrenSection', props.themeStyles);
  var panelFooter = propOr$1('pa2 bg-near-white dark-gray', 'panelFooter', props.themeStyles);
  var panelButtonDiv = propOr$1('fr dark-gray', 'panelButtonDiv', props.themeStyles);
  var panelButton = propOr$1('ba grow pa2 bg-near-white dark-gray', 'panelButton', props.themeStyles);
  return (
    React.createElement( 'article', { className: ("" + panelBorder) },
      React.createElement( 'header', { className: ("" + panelHeader) },
        React.createElement( 'h2', { className: ("" + panelH2) }, props.title)
      ),
      React.createElement( 'section', { className: ("" + panelChildrenSection) },
        props.children
      ),
      React.createElement( 'footer', { className: ("" + panelFooter) },
        React.createElement( 'div', { className: 'cf' },
          React.createElement( 'div', { className: ("" + panelButtonDiv) },
            props.onPrevious && (
            React.createElement( 'button', {
              className: ("" + panelButton), onClick: props.onPrevious }, "Previous")
                ), "| ", props.onNext && (
            React.createElement( 'button', {
              className: ("" + panelButton), onClick: props.onNext }, "Next")
                ), "| ", props.onFinish && (
            React.createElement( 'button', {
              className: ("" + panelButton), onClick: props.onFinish }, "Finish")
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

var backgroundColor = 'bg-near-black';
var textColor = 'yellow';
var paddingAll = 'pa2';
var borderRound = 'br2';
var h2 = 'fw1 f3 mt1 mb0';
var parentBorderColor = 'b--black-90';
var childBorderColor = 'b--black-10';

var defaultTheme$1 = {
  themeName: 'near black and yellow',
  themeStyles: {
    panelBorder: ("ba " + borderRound + " " + backgroundColor + " " + parentBorderColor),
    panelHeader: (paddingAll + " " + backgroundColor + " " + textColor),
    panelH2: ("" + h2),
    panelChildrenSection: (paddingAll + " " + backgroundColor),
    panelFooter:  (paddingAll + " " + backgroundColor + " " + textColor),
    panelButtonDiv: "fr",
    panelButton: ("ba dim " + paddingAll + " " + backgroundColor + " " + textColor),
    listUl: "list pl0 mt0 measure center",
    imageListItemLi: ("flex items-center lh-copy " + paddingAll + " ph0-l bb " + childBorderColor),
    imageListItemImg: "w2 h2 w3-ns h3-ns br-100",
    imageListItemDiv: "pl3 flex-auto",
    imageListItemSpanTitle: ("f6 db " + textColor),
    imageListItemSpanDescription: ("f6 db " + textColor),
    simpleListItemLi: ("flex items-center lh-copy " + paddingAll + " ph0-l bb " + childBorderColor),
    simpleListItemDiv: "pl3 flex-auto",
    simpleListItemSpanTitle: ("f6 db " + textColor),
    simpleListItemSpanDescription: ("f6 db " + textColor),
    cardArticle: ("mw5 center " + backgroundColor + " " + borderRound + " " + paddingAll + " pa4-ns mv3 ba " + childBorderColor),
    cardDiv: "tc",
    cardImg: ("br-100 h4 w4 dib ba " + childBorderColor + " " + paddingAll),
    cardH1: "f3 mb2",
    cardH2: ("f5 fw4 " + textColor + " mt0"),
    button: ("f6 link dim ph3 pv2 mb2 dib " + textColor + " " + backgroundColor)
  }
};

// Use a default theme in case dev isnt using a theme from jrs-react-components-themes.
// set the default theme
var defaultTheme = 'near black and yellow';

// add a single default theme to the themes array
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
