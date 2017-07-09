import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';

var propOr = R.propOr;

var Button = function (props) {
  //const button = propOr('ba dim pa1 bg-near-white dark-gray', 'button', props.themeStyles)
  var button = propOr(
    'f6 link dim br1 ba ph3 pv2 mb2 dib black',
    'button',
    props.themeStyles
  );
  return (
    React.createElement( 'button', { onClick: props.onClick, className: ("" + button) },
      props.children
    )
  )
};

Button.propTypes = { onClick: PropTypes.func };

var propOr$1 = R.propOr;

var ImageListItem = function (ref) {
  var image = ref.image;
  var title = ref.title;
  var description = ref.description;
  var link = ref.link;
  var themeStyles = ref.themeStyles;

  var imageListItemLi = propOr$1(
    'flex items-center lh-copy pa2 ph0-l bb b--black-10',
    'imageListItemLi',
    themeStyles
  );
  var imageListItemImg = propOr$1(
    'w2 h2 w3-ns h3-ns br-100',
    'imageListItemImg',
    themeStyles
  );
  var imageListItemDiv = propOr$1(
    'pl3 flex-auto',
    'imageListItemDiv',
    themeStyles
  );
  var imageListItemSpanTitle = propOr$1(
    'f4 db black-70',
    'imageListItemSpanTitle',
    themeStyles
  );
  var imageListItemSpanDescription = propOr$1(
    'f6 db black-70',
    'imageListItemSpanDescription',
    themeStyles
  );

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

var propOr$2 = R.propOr;

var SimpleListItem = function (props) {
  var simpleListItemLi = propOr$2(
    'flex items-center lh-copy pa3 ph0-l bb b--black-10',
    'simpleListItemLi',
    props.themeStyles
  );
  var simpleListItemDiv = propOr$2(
    'pl3 flex-auto',
    'simpleListItemDiv',
    props.themeStyles
  );
  var simpleListItemSpanTitle = propOr$2(
    'f4 db black-70',
    'simpleListItemSpanTitle',
    props.themeStyles
  );
  var simpleListItemSpanDescription = propOr$2(
    'f6 db black-70',
    'simpleListItemSpanDescription',
    props.themeStyles
  );

  return (
    React.createElement( 'li', { className: ("" + simpleListItemLi) },
      React.createElement( 'div', { className: ("" + simpleListItemDiv) },
        React.createElement( 'span', { className: ("" + simpleListItemSpanTitle) }, props.title),
        React.createElement( 'span', { className: ("" + simpleListItemSpanDescription) },
          props.description
        )
      ),
      React.createElement( 'div', null,
        props.link
      )
    )
  )
};

SimpleListItem.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  link: React.PropTypes.element
};

var propOr$3 = R.propOr;

var List = function (props) {
  var listUl = propOr$3('list pl0 mt0 measure', 'listUl', props.themeStyles);
  return (
    React.createElement( 'ul', { className: ("" + listUl) },
      props.children
    )
  )
};

var propOr$4 = R.propOr;

var Card = function (props) {
  var cardArticle = propOr$4(
    'mw5 bg-white br3 pa2 mv3 ba b--black-10',
    'cardArticle',
    props.themeStyles
  );
  var cardDiv = propOr$4('tc', 'cardDiv', props.themeStyles);
  var cardImg = propOr$4(
    'br-100 h4 w4 dib ba b--black-05 pa2',
    'cardImg',
    props.themeStyles
  );
  var cardH1 = propOr$4('f3 mb2', 'cardH1', props.themeStyles);
  var cardH2 = propOr$4('f5 fw4 gray mt0', 'cardH2', props.themeStyles);

  return (
    React.createElement( 'article', { className: ("" + cardArticle) },
      React.createElement( 'div', { className: ("" + cardDiv) },
        React.createElement( 'img', {
          src: props.image, className: ("" + cardImg), title: props.title, alt: props.title }),
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
    React.createElement( 'div', { className: "measure" },
      React.createElement( 'label', { htmlFor: props.label, className: "f6 b db mb2" },
        props.label,
        ' ',
        props.optional && React.createElement( 'span', { className: "normal black-60" }, "(optional)")
      ),
      React.createElement( 'input', {
        id: props.label, className: ("input-reset ba b--black-20 pa2 mb2 db " + width), type: "text", 'aria-describedby': "name-desc", value: props.value, onChange: props.onChange }),
      React.createElement( 'small', { className: "f6 black-60 db mb2" }, props.help)
    )
  )
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  help: PropTypes.string,
  optional: PropTypes.bool,
  width: PropTypes.string
};

var propOr$6 = R.propOr;

var Panel = function (props) {
  var panelBorder = propOr$6(
    'ba br2 b--dark-gray',
    'panelBorder',
    props.themeStyles
  );
  var panelHeader = propOr$6('pa2', 'panelHeader', props.themeStyles);
  var panelH2 = propOr$6('fw1 f3 mt1 mb0', 'panelH2', props.themeStyles);
  var panelChildrenSection = propOr$6(
    'pa2 ',
    'panelChildrenSection',
    props.themeStyles
  );
  var panelFooter = propOr$6('pa2', 'panelFooter', props.themeStyles);
  var panelButtonDiv = propOr$6('fr', 'panelButtonDiv', props.themeStyles);
  var panelButton = propOr$6('ba dim pa2 ', 'panelButton', props.themeStyles);
  return (
    React.createElement( 'article', { className: ("" + panelBorder) },
      React.createElement( 'header', { className: ("" + panelHeader) },
        React.createElement( 'h2', { className: ("" + panelH2) }, props.title)
      ),
      React.createElement( 'section', { className: ("" + panelChildrenSection) },
        props.children
      ),
      React.createElement( 'footer', { className: ("" + panelFooter) },
        React.createElement( 'div', { className: "cf" },
          React.createElement( 'div', { className: ("" + panelButtonDiv) },
            props.onPrevious &&
              React.createElement( 'button', { className: ("" + panelButton), onClick: props.onPrevious }, "Previous"), "| ", props.onNext &&
              React.createElement( 'button', { className: ("" + panelButton), onClick: props.onNext }, "Next"), "| ", props.onFinish &&
              React.createElement( 'button', { className: ("" + panelButton), onClick: props.onFinish }, "Finish")
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

var propOr$7 = R.propOr;
var toLower = R.toLower;
var trim = R.trim;

var Tile = function (props) {
  // themeStyles
  var tileDivParentWrapper = propOr$7(
    'pa3 fl tc',
    'tileDivParentWrapper',
    props.themeStyles
  );
  var tileDivH1 = propOr$7('pa1 fl v-mid', 'tileDivH1', props.themeStyles);
  var tileH1MainText = propOr$7(
    'f3 f4-ns fw2 black-90',
    'tileH1MainText',
    props.themeStyles
  );
  var tileH1SecondaryText = propOr$7(
    'f5 fw1',
    'tileH1SecondaryText',
    props.themeStyles
  );
  var tileDivChildrenWrapper = propOr$7(
    'pa3 fl',
    'tileDivChildrenWrapper',
    props.themeStyles
  );
  var tileDivH2 = propOr$7('fl w-100', 'tileDivH2', props.themeStyles);
  var tileH2 = propOr$7(
    'f3 fw2 black-50 mt0 lh-copy',
    'tileH1SecondaryText',
    props.themeStyles
  );

  // props then fallback to themeStyle then fallback to white
  var backgroundColor = propOr$7(
    propOr$7('bg-white', 'tileBackgroundColor', props.themeStyles),
    'backgroundColor',
    props
  );

  //props
  var width = propOr$7('w-50 w-25-ns', 'width', props);
  var h1Width = props.children ? 'w-50' : 'w-100';
  var h1MainText = propOr$7('N/A', 'h1MainText', props);
  var h1SecondaryText = toLower(propOr$7('', 'h1SecondaryText', props));
  var h2Text = propOr$7('N/A', 'h2Text', props);

  var children = props.children
    ? React.createElement( 'div', { className: (tileDivChildrenWrapper + " " + h1Width) },
        props.children
      )
    : "";

  var h2 = h2Text === 'N/A' || trim(h2Text) === ''
    ? ""
    : React.createElement( 'div', { className: (tileDivH2 + " ") },
        React.createElement( 'h2', { className: ("" + tileH2) }, h2Text)
      );

  return (
    React.createElement( 'div', { className: (tileDivParentWrapper + " " + backgroundColor + " " + width) },
      React.createElement( 'div', { className: (tileDivH1 + " " + h1Width) },
        React.createElement( 'h1', { className: ("" + tileH1MainText) },
          h1MainText, ' ',
          React.createElement( 'span', { className: ("" + tileH1SecondaryText) }, h1SecondaryText)
        )
      ),
      children,
      h2
    )
  )
};

var compose = R.compose;
var reject = R.reject;
var find = R.find;
var merge = R.merge;
var mergeWith = R.mergeWith;
var zipObj = R.zipObj;
var map = R.map;
var keys = R.keys;
var append = R.append;
var concat = R.concat;
var prop = R.prop;

// use setDefaultTheme() to set the value of defaultTheme to a string
var defaultTheme = null;

// use addTheme() to add a theme to the themes array
var themes = [];

function setDefaultTheme(themeName) {
  if (themes.length === 0) {
    throw new Error(
      'There are no themes in the ThemeManager. Use addTheme() to add a theme and set it as the default.'
    )
  } else {
    defaultTheme = themeName;
  }
}

function addTheme(theme) {
  if (prop('themeName', theme)) {
    themes = append(theme, themes);
    defaultTheme = prop('themeName', theme);
  } else {
    throw new Error(
      "addTheme() failed due to missing 'themeName' property in theme object parameter."
    )
  }
}

function updateTheme(themeName, theme) {
  if (themes.length === 0) {
    throw new Error(
      'There are no themes in the ThemeManager. Use addTheme() to add a theme and set it as the default.'
    )
  } else if (prop('themeName', theme) === undefined) {
    throw new Error(
      "updateTheme() failed due to missing 'themeName' property in theme object parameter."
    )
  } else {
    return compose(
      append(theme),
      reject(function (theme) { return theme.themeName === themeName; })
    )(themes)
  }
}

function replaceThemeStyles(themeName, themeStyles) {
  var foundTheme = find(function (theme) { return theme.themeName === themeName; })(themes);

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
    foundTheme = compose(
      mergeWith(concat, foundTheme.themeStyles),
      zipObj(keys(themeStyles)),
      map(function (key) { return ' ' + themeStyles[key]; })
    )(keys(themeStyles));

    // 4) update the entire theme
    return replaceThemeStyles(themeName, foundTheme)
  } else {
    return null
  }
}

function getDefaultTheme() {
  return find(function (theme) { return theme.themeName === defaultTheme; }, themes)
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

export { Button, ImageListItem, SimpleListItem, List, Card, TextField, Panel, Tile, ThemeManager };
