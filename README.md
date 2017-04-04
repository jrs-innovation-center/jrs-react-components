# JRS React Components

Simple React UX Components using the Tachyons Functional CSS Style.

This components are mainly built to provide simple prototypes and mockup applications as well as
readable documentation to learn about react components.

## Install

```
npm install jrs-react-components --save
```

## Code Example

```
import React, { Component } from 'react'
import { Button, ImageListItem, List } from 'jrs-react-components'

class App extends Component {
  render () {
    return (
      <div className='pa4'>
        <Button
          className='ba br2 bg-white hover-bg-black hover-white pa2 blue'
          onClick={e => alert('You Clicked Me')}
        >
          Hello World
        </Button>
        <List>
          <ImageListItem
            title='Hello'
            image='http://fillmurray.com/200/200'
            link={<Button>Click Here</Button>}
          />
        </List>
      </div>
    )
  }
}

export default App
```

## Requirements

* React
* Tachyons

## Component Documentation

* [Button - A Styled Button Component](./src/Button)
* [ImageListItem - A ListItem that has an image and description and call to action link](./src/ImageListItem)
* [TextField - A label, input and help section](./src/TextField)
* [TextArea - A label, textarea and help section](./src/TextArea)
* [Card - A basic card component](./src/Card)
* [Panel - A basic panel component](./src/Panel)

## License

MIT

## Contributions

Contributions are welcome, all code is styled using standard and formatted using prettier.
