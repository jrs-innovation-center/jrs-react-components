import {compose,
  reject,
  find,
  merge,
  mergeWith,
  zipObj,
  map,
  keys,
  append,
  concat, prop
} from 'ramda'


// use setDefaultTheme() to set the value of defaultTheme to a string
let defaultTheme = null

// use addTheme() to add a theme to the themes array
let themes = []

function setDefaultTheme(themeName) {
  if (themes.length === 0) {
    throw new Error('There are no themes in the ThemeManager. Use addTheme() to add a theme and set it as the default.')
  } else {
      defaultTheme = themeName
  }
}

function addTheme(theme) {

  if (prop('themeName', theme)) {
    themes = append(theme, themes)
    defaultTheme = prop('themeName', theme)
  } else {
    throw new Error("addTheme() failed due to missing 'themeName' property in theme object parameter.")
  }

}

function updateTheme(themeName, theme) {
  if (themes.length === 0) {
    throw new Error('There are no themes in the ThemeManager. Use addTheme() to add a theme and set it as the default.')
  } else if (prop('themeName', theme) === undefined) {
    throw new Error("updateTheme() failed due to missing 'themeName' property in theme object parameter.")
  } else {
    return compose(
      append(theme),
      reject(theme => theme.themeName === themeName)
     )(themes)
  }
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
      map(key => ' ' + themeStyles[key]))
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

const ThemeManager = {
  addTheme: addTheme,
  setDefaultTheme: setDefaultTheme,
  replaceThemeStyles: replaceThemeStyles,
  appendThemeStyles: appendThemeStyles,
  getDefaultTheme: getDefaultTheme
}

export default ThemeManager


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
