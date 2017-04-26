import {compose,
  reject,
  find,
  merge,
  mergeWith,
  zipObj,
  map,
  keys,
  append,
  concat
} from 'ramda'


// Use a default theme in case dev isnt using a theme from jrs-react-components-themes.
import fallBackDefaultTheme from './default-theme'

// set the default theme
let defaultTheme = 'near black and yellow'

// add a single default theme to the themes array
let themes = [fallBackDefaultTheme]

function setDefaultTheme(themeName) {
  defaultTheme = themeName
}

function addTheme(theme) {
  themes = append(theme, themes)
}

function updateTheme(themeName, theme) {
  return compose(
    append(theme),
    reject(theme => theme.themeName === themeName)
   )(themes)
}

function replaceThemeStyles(themeName, themeStyles) {
 const foundTheme =  find(theme => theme.themeName === themeName)(themes)
 foundTheme.themeStyles = merge(foundTheme.themeStyles, themeStyles)

  return updateTheme(themeName, foundTheme)
}


function appendThemeStyles(themeName, themeStyles) {
 let foundTheme = find(theme => theme.themeName === themeName)(themes)

 // 1) map through the keys in the incoming themeStyles object and
 //     prepend a space to the key value
 // 2) zip the keys in the object with the new values
 // 3) merge the new values with a concatenation of the
 //     original values

 if (foundTheme) {
    foundTheme =  compose(
      mergeWith(concat, foundTheme.themeStyles),
      zipObj(keys(themeStyles)),
      map(key => ' z ' + themeStyles[key]))
      (keys(themeStyles))

    // 4) update the entire theme
    return replaceThemeStyles(themeName, foundTheme)
  } else {
    return null
  }

}

function getDefaultTheme () {
  return find (theme => theme.themeName === defaultTheme, themes)
}

const Themes = {
  addTheme: addTheme,
  setDefaultTheme: setDefaultTheme,
  replaceThemeStyles: replaceThemeStyles,
  appendThemeStyles: appendThemeStyles,
  getDefaultTheme: getDefaultTheme
}

export default Themes


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
