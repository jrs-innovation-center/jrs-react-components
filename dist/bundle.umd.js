(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('ramda')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'ramda'], factory) :
	(factory((global.JrsComponents = global.JrsComponents || {}),global.React,global.ramda));
}(this, (function (exports,React,ramda) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

var Button = function (props) {

  var button = ramda.propOr('ba dim pa1 bg-near-white dark-gray', 'button', props.themeStyles);

  return (
    React__default.createElement( 'button', { onClick: props.onClick, className: ("" + button) },
      props.children
    )
  )
};

Button.propTypes = { onClick: React.PropTypes.func };

var ImageListItem = function (ref) {
  var image = ref.image;
  var title = ref.title;
  var description = ref.description;
  var link = ref.link;
  var themeStyles = ref.themeStyles;

  var imageListItemLi = ramda.propOr('flex items-center lh-copy pa2 ph0-l bb b--black-10', 'imageListItemLi', themeStyles);
  var imageListItemImg = ramda.propOr('w2 h2 w3-ns h3-ns br-100', 'imageListItemImg', themeStyles);
  var imageListItemDiv = ramda.propOr('pl3 flex-auto', 'imageListItemDiv', themeStyles);
  var imageListItemSpanTitle = ramda.propOr('f6 db black-70', 'imageListItemSpanTitle', themeStyles);
  var imageListItemSpanDescription = ramda.propOr('f6 db black-70', 'imageListItemSpanDescription', themeStyles);

  return (
    React__default.createElement( 'li', { className: ("" + imageListItemLi) },
      React__default.createElement( 'img', { className: ("" + imageListItemImg), src: image }),
      React__default.createElement( 'div', { className: ("" + imageListItemDiv) },
        React__default.createElement( 'span', { className: ("" + imageListItemSpanTitle) }, title),
        React__default.createElement( 'span', { className: ("" + imageListItemSpanDescription) }, description)
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

var SimpleListItem = function (props) {
  var simpleListItemLi = ramda.propOr('flex items-center lh-copy pa3 ph0-l bb b--black-10', 'simpleListItemLi', props.themeStyles);
  var simpleListItemDiv = ramda.propOr('pl3 flex-auto', 'simpleListItemDiv', props.themeStyles);
  var simpleListItemSpanTitle = ramda.propOr('f6 db black-70', 'simpleListItemSpanTitle', props.themeStyles);
  var simpleListItemSpanDescription = ramda.propOr('f6 db black-70', 'simpleListItemSpanDescription', props.themeStyles);

  return (
    React__default.createElement( 'li', { className: ("" + simpleListItemLi) },
      React__default.createElement( 'div', { className: ("" + simpleListItemDiv) },
        React__default.createElement( 'span', { className: ("" + simpleListItemSpanTitle) }, props.title),
        React__default.createElement( 'span', { className: ("" + simpleListItemSpanDescription) }, props.description)
      ),
      React__default.createElement( 'div', null,
        props.link
      )
    )
  )
};

SimpleListItem.propTypes = {
  title: React__default.PropTypes.string,
  description: React__default.PropTypes.string,
  link: React__default.PropTypes.element
};

var List = function (props) {
  var listUl = ramda.propOr('list pl0 mt0 measure center', 'listUl', props.themeStyles);
  return (
    React__default.createElement( 'ul', { className: ("" + listUl) },
      props.children
    )
  )
};

var Card = function (props) {
  var cardArticle = ramda.propOr('mw5 center bg-white br3 pa2 mv3 ba b--black-10', 'cardArticle', props.themeStyles);
  var cardDiv = ramda.propOr('tc', 'cardDiv', props.themeStyles);
  var cardImg = ramda.propOr('br-100 h4 w4 dib ba b--black-05 pa2', 'cardImg', props.themeStyles);
  var cardH1 = ramda.propOr('f3 mb2', 'cardH1', props.themeStyles);
  var cardH2 = ramda.propOr('f5 fw4 gray mt0', 'cardH2', props.themeStyles);

  return (
    React__default.createElement( 'article', { className: ("" + cardArticle) },
      React__default.createElement( 'div', { className: ("" + cardDiv) },
        React__default.createElement( 'img', {
          src: props.image, className: ("" + cardImg), title: props.title }),
        React__default.createElement( 'h1', { className: ("" + cardH1) }, props.title),
        React__default.createElement( 'h2', { className: ("" + cardH2) }, props.description)
      ),
      props.children
    )
  )
};

Card.propTypes = {
  image: React__default.PropTypes.string,
  title: React__default.PropTypes.string,
  description: React__default.PropTypes.string
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

var Panel = function (props) {
  var panelBorder = ramda.propOr('ba br2 b--dark-gray','panelBorder', props.themeStyles);
  var panelHeader = ramda.propOr('pa2 bg-near-white dark-gray','panelHeader', props.themeStyles);
  var panelH2 = ramda.propOr('fw1 f3 mt1 mb0', 'panelH2',  props.themeStyles);
  var panelChildrenSection = ramda.propOr('pa2 bg-near-white', 'panelChildrenSection', props.themeStyles);
  var panelFooter = ramda.propOr('pa2 bg-near-white dark-gray', 'panelFooter', props.themeStyles);
  var panelButtonDiv = ramda.propOr('fr dark-gray', 'panelButtonDiv', props.themeStyles);
  var panelButton = ramda.propOr('ba dim pa2 bg-near-white dark-gray', 'panelButton', props.themeStyles);
  return (
    React__default.createElement( 'article', { className: ("" + panelBorder) },
      React__default.createElement( 'header', { className: ("" + panelHeader) },
        React__default.createElement( 'h2', { className: ("" + panelH2) }, props.title)
      ),
      React__default.createElement( 'section', { className: ("" + panelChildrenSection) },
        props.children
      ),
      React__default.createElement( 'footer', { className: ("" + panelFooter) },
        React__default.createElement( 'div', { className: 'cf' },
          React__default.createElement( 'div', { className: ("" + panelButtonDiv) },
            props.onPrevious && (
            React__default.createElement( 'button', {
              className: ("" + panelButton), onClick: props.onPrevious }, "Previous")
                ), "| ", props.onNext && (
            React__default.createElement( 'button', {
              className: ("" + panelButton), onClick: props.onNext }, "Next")
                ), "| ", props.onFinish && (
            React__default.createElement( 'button', {
              className: ("" + panelButton), onClick: props.onFinish }, "Finish")
                )
          )
        )
      )
    )
  )
};

Panel.propTypes = {
  onPrevious: React__default.PropTypes.func,
  onNext: React__default.PropTypes.func.isRequired,
  onFinish: React__default.PropTypes.func,
  title: React__default.PropTypes.string
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
  themes = ramda.append(theme, themes);
}

function updateTheme(themeName, theme) {
  return ramda.compose(
    ramda.append(theme),
    ramda.reject(function (theme) { return theme.themeName === themeName; })
   )(themes)
}

function replaceThemeStyles(themeName, themeStyles) {
 var foundTheme =  ramda.find(function (theme) { return theme.themeName === themeName; })(themes);
 foundTheme.themeStyles = ramda.merge(foundTheme.themeStyles, themeStyles);

  return updateTheme(themeName, foundTheme)
}


function appendThemeStyles(themeName, themeStyles) {
 var foundTheme = ramda.find(function (theme) { return theme.themeName === themeName; })(themes);

 // 1) map through the keys in the incoming themeStyles object and
 //     prepend a space to the key value
 // 2) zip the keys in the object with the new values
 // 3) merge the new values with a concatenation of the
 //     original values

 if (foundTheme) {
    foundTheme =  ramda.compose(
      ramda.mergeWith(ramda.concat, foundTheme.themeStyles),
      ramda.zipObj(ramda.keys(themeStyles)),
      ramda.map(function (key) { return ' z ' + themeStyles[key]; }))
      (ramda.keys(themeStyles));

    // 4) update the entire theme
    return replaceThemeStyles(themeName, foundTheme)
  } else {
    return null
  }

}

function getDefaultTheme () {
  return ramda.find (function (theme) { return theme.themeName === defaultTheme; }, themes)
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

exports.Button = Button;
exports.ImageListItem = ImageListItem;
exports.SimpleListItem = SimpleListItem;
exports.List = List;
exports.Card = Card;
exports.TextField = TextField;
exports.Panel = Panel;
exports.Themes = Themes;

Object.defineProperty(exports, '__esModule', { value: true });

})));
