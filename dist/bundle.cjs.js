'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ramda = require('ramda');

var Button = function (props) {

  //const button = propOr('ba dim pa1 bg-near-white dark-gray', 'button', props.themeStyles)
  var button = ramda.propOr('f6 link dim br1 ba ph3 pv2 mb2 dib black', 'button', props.themeStyles);
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
  var imageListItemSpanTitle = ramda.propOr('f4 db black-70', 'imageListItemSpanTitle', themeStyles);
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
  var simpleListItemSpanTitle = ramda.propOr('f4 db black-70', 'simpleListItemSpanTitle', props.themeStyles);
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
  var listUl = ramda.propOr('list pl0 mt0 measure', 'listUl', props.themeStyles);
  return (
    React__default.createElement( 'ul', { className: ("" + listUl) },
      props.children
    )
  )
};

var Card = function (props) {
  var cardArticle = ramda.propOr('mw5 bg-white br3 pa2 mv3 ba b--black-10', 'cardArticle', props.themeStyles);
  var cardDiv = ramda.propOr('tc', 'cardDiv', props.themeStyles);
  var cardImg = ramda.propOr('br-100 h4 w4 dib ba b--black-05 pa2', 'cardImg', props.themeStyles);
  var cardH1 = ramda.propOr('f3 mb2', 'cardH1', props.themeStyles);
  var cardH2 = ramda.propOr('f5 fw4 gray mt0', 'cardH2', props.themeStyles);

  return (
    React__default.createElement( 'article', { className: ("" + cardArticle) },
      React__default.createElement( 'div', { className: ("" + cardDiv) },
        React__default.createElement( 'img', {
          src: props.image, className: ("" + cardImg), title: props.title, alt: props.title }),
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
  var panelHeader = ramda.propOr('pa2','panelHeader', props.themeStyles);
  var panelH2 = ramda.propOr('fw1 f3 mt1 mb0', 'panelH2',  props.themeStyles);
  var panelChildrenSection = ramda.propOr('pa2 ', 'panelChildrenSection', props.themeStyles);
  var panelFooter = ramda.propOr('pa2', 'panelFooter', props.themeStyles);
  var panelButtonDiv = ramda.propOr('fr', 'panelButtonDiv', props.themeStyles);
  var panelButton = ramda.propOr('ba dim pa2 ', 'panelButton', props.themeStyles);
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

var Tile = function (props) {
  // themeStyles
  var tileDivParentWrapper = ramda.propOr('pa3 fl tc', 'tileDivParentWrapper',  props.themeStyles );
  var tileDivH1 = ramda.propOr('pa1 fl v-mid', 'tileDivH1',  props.themeStyles);
  var tileH1MainText = ramda.propOr('f3 f4-ns fw2 black-90', 'tileH1MainText',  props.themeStyles);
  var tileH1SecondaryText = ramda.propOr('f5 fw1', 'tileH1SecondaryText',  props.themeStyles);
  var tileDivChildrenWrapper = ramda.propOr('pa3 fl', 'tileDivChildrenWrapper',  props.themeStyles);
  var tileDivH2 = ramda.propOr('fl w-100', 'tileDivH2',  props.themeStyles);
  var tileH2 = ramda.propOr('f3 fw2 black-50 mt0 lh-copy', 'tileH1SecondaryText',  props.themeStyles);

  // props then fallback to themeStyle then fallback to white
  var backgroundColor = ramda.propOr(ramda.propOr('bg-white', 'tileBackgroundColor',  props.themeStyles ), 'backgroundColor', props);

  //props
  var width = ramda.propOr('w-50 w-25-ns', 'width', props);
  var h1Width = props.children ? 'w-50' : 'w-100';
  var h1MainText = ramda.propOr('N/A', 'h1MainText', props);
  var h1SecondaryText = ramda.toLower(ramda.propOr('', 'h1SecondaryText', props));
  var h2Text = ramda.propOr('N/A', 'h2Text', props);

  var children = props.children ?
    React__default.createElement( 'div', { className: (tileDivChildrenWrapper + " " + h1Width) },
      props.children
    ) :
    "";

  var h2 = h2Text === 'N/A' || ramda.trim(h2Text) === '' ? "" :
    React__default.createElement( 'div', { className: (tileDivH2 + " ") },
      React__default.createElement( 'h2', { className: ("" + tileH2) }, h2Text)
    );

  return (
    React__default.createElement( 'div', { className: (tileDivParentWrapper + " " + backgroundColor + " " + width) },
      React__default.createElement( 'div', { className: (tileDivH1 + " " + h1Width) },
        React__default.createElement( 'h1', { className: ("" + tileH1MainText) }, h1MainText, " ", React__default.createElement( 'span', { className: ("" + tileH1SecondaryText) }, h1SecondaryText))
      ),
      children,
      h2
    )
  )
};

// use setDefaultTheme() to set the value of defaultTheme to a string
var defaultTheme = null;

// use addTheme() to add a theme to the themes array
var themes = [];

function setDefaultTheme(themeName) {
  if (themes.length === 0) {
    throw new Error('There are no themes in the ThemeManager. Use addTheme() to add a theme and set it as the default.')
  } else {
      defaultTheme = themeName;
  }
}

function addTheme(theme) {

  if (ramda.prop('themeName', theme)) {
    themes = ramda.append(theme, themes);
    defaultTheme = ramda.prop('themeName', theme);
  } else {
    throw new Error("addTheme() failed due to missing 'themeName' property in theme object parameter.")
  }

}

function updateTheme(themeName, theme) {
  if (themes.length === 0) {
    throw new Error('There are no themes in the ThemeManager. Use addTheme() to add a theme and set it as the default.')
  } else if (ramda.prop('themeName', theme) === undefined) {
    throw new Error("updateTheme() failed due to missing 'themeName' property in theme object parameter.")
  } else {
    return ramda.compose(
      ramda.append(theme),
      ramda.reject(function (theme) { return theme.themeName === themeName; })
     )(themes)
  }
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

var ThemeManager = {
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
exports.Tile = Tile;
exports.ThemeManager = ThemeManager;
