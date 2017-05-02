# JRS React Components

Simple React UX Components using the Tachyons Functional CSS Style.

This components are mainly built to provide simple prototypes and mockup applications as well as
readable documentation to learn about react components.

## Install

```
npm install jrs-react-components --save
```

## Showcase

Our [showcase](https://jrscomponentshowcase.now.sh/) displays the various available themes applied to various JRS React Components.

## Code Example

```
import React from 'react'
import {
  Button,
  ImageListItem,
  SimpleListItem,
  List,
  Card,
  Panel,
  TextField,
  Tile
} from 'jrs-react-components'

const Example1 = (props) => {
  return (
    <div className='pa4'>
      <h1 className='tc'>Example 1</h1>
      <h2 className=''>Button</h2>
      <Button onClick={e => alert('You Clicked Me')}>
        Hello World
      </Button>
      <h2 className=''>List and ImageListItem</h2>
      <List>
        <ImageListItem
          title='Hello'
          image='http://fillmurray.com/100/100'
          link={<Button onClick={e => alert('Check out fillmurray.com')}>Click Here</Button>}
        />
      </List>
      <h2>SimpleListItem</h2>
        <List>
          <SimpleListItem
            title='Ghostbusters'
            description='1984'
            link={<Button onClick={e => alert('Then, during the third reconciliation of the last of the Meketrex Supplicants they chose a new form for him... that of a Giant Sloar!')}>Click Here</Button>}
          />
        </List>

      <h2>Panel with TextField</h2>

      <Panel
        title='Register Bill Murray Movies - Step by Step Wizard Workflow (Step 1 of 5)'
        onNext={e => alert('Use panels to step a user through a complicated process or complete a form with lots of data.')}
        >
          <TextField
            label='Name'
            value='The Life Aquatic with Steve Zissou '
            onChange={e => alert(e.target.value + " - Maybe you should store this value in a redux store")}
            />
      </Panel>

      <h2>Card (without Children)</h2>
      <Card
        image="http://fillmurray.com/125/125"
        title="fillmurray.com"
        description="The internet was missing the ability to provide custom-sized placeholder images of Bill Murray. Now it can."
        />


      <h2>Card (with children)</h2>
      <Card
        image="http://fillmurray.com/125/125"
        title="fillmurray.com"
        description="The internet was missing the ability to provide custom-sized placeholder images of Bill Murray. Now it can."
        >
        <List>
          <ImageListItem
            title='Hello'
            image='http://fillmurray.com/200/200'
            link={<Button onClick={e => alert('Check out fillmurray.com')}>Click Here</Button>}
          />
        </List>
      </Card>

      <h2>Tiles (with Children)</h2>
      <div className="cf">
        <Tile
          backgroundColor="bg-dark-blue"
          width="w-100 w-50-m w-20-ns"
          h1MainText="Water Temp"
          h1SecondaryText="(80 F)"
          h2Text="Time to swim">
           <a className="db link dim tc" href="http://www.fillmurray.com/">
             <i className={`fa fa-cog fa-4x`} aria-hidden="true"></i>
           </a>
        </Tile>
      </div>
    </div>
  )
}

export default Example1
```

## Requirements

* React
* Tachyons

## Component Documentation

* [Button - A Styled Button Component](./src/Button)
* [List - A basic ul component used to house fancy list items, such as SimpleListItem and ImageListItem](./src/List)
* [ImageListItem - A ListItem that has an image and description and call to action link](./src/ImageListItem)
* [SimpleListItem - A ListItem that has a title, description and call to action link](./src/SimpleListItem)
* [TextField - A label, input and help section](./src/TextField)
* [TextArea - A label, textarea and help section](./src/TextArea)
* [Card - A basic card component](./src/Card)
* [Panel - A basic panel component](./src/Panel)
* [Tile - a flat, simple way to display metrics](./src/Tile)

## Themes

Style JRS React Components with a theme. Grab a theme from [jrs-react-components-themes](https://github.com/jrs-innovation-center/jrs-react-components-themes) or provide your own custom theme. Pass the theme's `themeStyles` object to each component to a prop named `themeStyles`.

```
import React from 'react'
import {
  List,
  ImageListItem,
  Button,
  ThemeManager
} from 'jrs-react-components'

import {dark} from 'jrs-react-components-themes'

const ExampleComponentThemeManager1 = (props) => {

  return (
    <div className='pa4'>
      <h1 className='tc'>Theme Example 1</h1>
      <h2 className=''>List and ImageListItem</h2>
      <List themeStyles={dark.themeStyles}>
        <ImageListItem themeStyles={dark.themeStyles}
          title='Hello'
          image='http://fillmurray.com/100/100'
          link={<Button onClick={e => alert('Check out fillmurray.com')}>Click Here</Button>}
        />
      </List>
    </div>
  )
}

export default ExampleComponentThemeManager1
```

##  ThemeManager

Need to change the css style classes for a component?  Use the ThemeManager. JRS React Components come with a `ThemeManager` library used to store and modify themeStyles. It's not a component. ThemeManager may be used used with a custom theme or a theme within [jrs-react-components-themes](https://github.com/jrs-innovation-center/jrs-react-components-themes).  

- Load a theme into the ThemeManager with `addTheme()`.
- Replace tachyons classes.  Use `replaceThemeStyles()` when you wish to replace the tachyons css class values of specific keys within a theme's `themeStyles` object.
- Append tachyons classes.  Use `appendThemeStyles()` when you want to append new class values to one or several keys within a theme's `themeStyles` object.

### `addTheme()`

Before you can modify the css of a theme, you must add a theme to the ThemeManager.  Use the `ThemeManager.addTheme()` to store one or multiple themes from either [jrs-react-components-themes](https://github.com/jrs-innovation-center/jrs-react-components-themes) or your own custom themes.  

```
import React from 'react'
import {
  List,
  ImageListItem,
  Button,
  ThemeManager
} from 'jrs-react-components'  

import {dark, light} from 'jrs-react-components-themes'

ThemeManager.addTheme(dark)
ThemeManager.addTheme(light)
```

### Getting and setting the default theme

`ThemeManager` can manage more than one theme at a time. The last theme added is automatically set as the default theme. To retrieve the default theme, use `getDefaultTheme()`:

```
import React from 'react'
import { ThemeManager } from 'jrs-react-components'

import {dark, icy} from 'jrs-react-components-themes'

ThemeManager.addTheme(dark)
ThemeManager.addTheme(icy)

let defaultTheme = ThemeManager.getDefaultTheme()
console.log('default theme', defaultTheme.themeName) // default theme icy
```

If you are managing more than one theme, you may want to change the default theme.  Assuming you have loaded the theme into the ThemeManager with `addTheme()`, use `setDefaultTheme()` to set the default theme, followed by `getDefaultTheme()` to pull the default theme out of the `ThemeManager`.

```
import React from 'react'
import { ThemeManager } from 'jrs-react-components'

import {dark, icy} from 'jrs-react-components-themes'

ThemeManager.addTheme(dark)
ThemeManager.addTheme(icy)

let defaultTheme = ThemeManager.getDefaultTheme()
console.log('default theme', defaultTheme.themeName) // default theme icy

ThemeManager.setDefaultTheme('dark')
defaultTheme = ThemeManager.getDefaultTheme()
console.log('default theme', defaultTheme.themeName) // default theme dark
```

### Modifying theme CSS

Once you've added a theme into `ThemeManager` via `addTheme()`, you can modify one or several styles within a theme using either `replaceThemeStyles()` or `appendThemeStyles()`.  

Use `replaceThemeStyles()` when you wish to replace the tachyons css class values of specific keys within a theme's `themeStyles` object. Use `appendThemeStyles()` when you want to append new class values to one or several keys within a theme's `themeStyles` object.

Let's run though a few examples:

### `replaceThemeStyles()`

Assume you have loaded the `dark` theme from 'jrs-react-components-themes' into the `ThemeManager` like this:

```
import React from 'react'
import {
  List,
  ImageListItem,
  Button,
  ThemeManager
} from 'jrs-react-components'

import {dark} from 'jrs-react-components-themes'

ThemeManager.addTheme(dark)
```

Here's a partial look at the structure of the `dark` theme object:

```
const dark = {
  themeName: 'dark',
  themeStyles: {
    panelBorder: `ba ${borderRound} ${backgroundColor} ${childBorderColor}`,
    panelHeader: `${paddingAll} ${backgroundColor} ${textColor}`,
    panelH2: `${h2}`,
    panelChildrenSection: `${paddingAll} ${backgroundColor}`,
    panelFooter:  `${paddingAll} ${backgroundColor} ${textColor}`,
    panelButtonDiv: `fr`,
    panelButton: `ba dim ${paddingAll} ${backgroundColor} ${textColor}`,
    listUl: `list pl0 mt0 measure ba br2 b--black-10`,
    ... remaining themeStyles keys omitted for brevity ...
```

A theme object contains a `themeName` and a `themeStyles` object.  The former is used to identify the theme. `themeStyles` contains a series of key and value pairs.  Each key is used within a particular JRS react component.  For example, the `listUl` key contains the tachyons css style classes for the JRS React Components' [list](./src/list)'s `<ul>` tag.  

Let's say we wanted to change the list's `<ul>` css classes. We want a more rounded list border so we will change the border radius from a scale of 2 to 3. We also want a darker border, so we will change the border color from 10 percent black to 80 percent. We'll need to replace the `listUl` key value.  We'll keep any classes that we don't want to change and swap out the `br2` with `br3` and `b--black-10` with `b--black-80`.  

We will call `replaceThemeStyles()` and provide the name of the theme and an object containing a list of key value pairs of all the themeStyles we wish to replace.  Since we are only changing one value, our object only contains a single themeStyle key value pair:

```
ThemeManager.replaceThemeStyles('dark', {
  listUl: 'list pl0 mt0 measure ba br3 b--black-80'
})
```

To replace multiple styles, simply add more key value pairs. Below we are changing the font size and color of the title on an `ImagelistItem` component.

```
ThemeManager.replaceThemeStyles('dark', {
  listUl: 'list pl0 mt0 measure ba br3 b--black-80',
  imageListItemSpanTitle: `f3 db dark-green`
})
```

Once you have modified your theme styles, grab the theme back out of the theme manager with `getDefaultTheme()` and pass the theme's `themeStyles` object as props to the components.  Here's the entire sample:

```
import React from 'react'
import {
  List,
  ImageListItem,
  Button,
  ThemeManager
} from 'jrs-react-components'

import {dark} from 'jrs-react-components-themes'

ThemeManager.addTheme(dark)

ThemeManager.replaceThemeStyles('dark', {
  listUl: 'list pl0 mt0 measure ba br3 b--black-80',
  imageListItemSpanTitle: `f3 db dark-green`
})

const darkTheme = ThemeManager.getDefaultTheme()
const ExampleComponentThemeManager1 = (props) => {

  return (
    <div className='pa4'>
      <h1 className='tc'>Theme Example 1</h1>
      <h2 className=''>List and ImageListItem</h2>
      <List themeStyles={darkTheme.themeStyles}>
        <ImageListItem themeStyles={darkTheme.themeStyles}
          title='Hello'
          image='http://fillmurray.com/100/100'
          link={<Button onClick={e => alert('Check out fillmurray.com')}>Click Here</Button>}
        />
      </List>
    </div>
  )
}

export default ExampleComponentThemeManager1
```

### `appendThemeStyles()`

Use `appendThemeStyles` when you want to simply add a css class or classes to an existing themeStyle. `appendThemeStyles` doesn't replace the specified styles but rather adds or appends styles.  If the same style is appended, the last style overrides the former style.  

Here's a sample of the `imageListItemSpanTitle` value before using `appendThemeStyles`.  

```
f4 db washed-green
```

Let's call `appendThemeStyles()` to add a font weight style (fw1) and override the font size scale by increasing the size of the font from f4 to f1.  See [tachyons typography scale](http://tachyons.io/docs/typography/scale/).  

```
ThemeManager.appendThemeStyles('dark', {
  imageListItemSpanTitle: `fw1 f1`
})
```

And here's the style after appending.

```
f4 db washed-green fw1 f1
```

> Tip: If you have trouble overriding a style with `appendThemeStyles`, use  `replaceThemeStyles`, as a work around.


## License

MIT

## Contributions

Contributions are welcome, all code is styled using standard and formatted using prettier.
