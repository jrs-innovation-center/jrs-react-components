import React from 'react'
import R from 'ramda'
const { propOr, toLower, trim } = R

const Tile = props => {
  // themeStyles
  const tileDivParentWrapper = propOr(
    'pa3 fl tc',
    'tileDivParentWrapper',
    props.themeStyles
  )
  const tileDivH1 = propOr('pa1 fl v-mid', 'tileDivH1', props.themeStyles)
  const tileH1MainText = propOr(
    'f3 f4-ns fw2 black-90',
    'tileH1MainText',
    props.themeStyles
  )
  const tileH1SecondaryText = propOr(
    'f5 fw1',
    'tileH1SecondaryText',
    props.themeStyles
  )
  const tileDivChildrenWrapper = propOr(
    'pa3 fl',
    'tileDivChildrenWrapper',
    props.themeStyles
  )
  const tileDivH2 = propOr('fl w-100', 'tileDivH2', props.themeStyles)
  const tileH2 = propOr(
    'f3 fw2 black-50 mt0 lh-copy',
    'tileH1SecondaryText',
    props.themeStyles
  )

  // props then fallback to themeStyle then fallback to white
  const backgroundColor = propOr(
    propOr('bg-white', 'tileBackgroundColor', props.themeStyles),
    'backgroundColor',
    props
  )

  //props
  const width = propOr('w-50 w-25-ns', 'width', props)
  const h1Width = props.children ? 'w-50' : 'w-100'
  const h1MainText = propOr('N/A', 'h1MainText', props)
  const h1SecondaryText = toLower(propOr('', 'h1SecondaryText', props))
  const h2Text = propOr('N/A', 'h2Text', props)

  const children = props.children
    ? <div className={`${tileDivChildrenWrapper} ${h1Width}`}>
        {props.children}
      </div>
    : ``

  const h2 = h2Text === 'N/A' || trim(h2Text) === ''
    ? ``
    : <div className={`${tileDivH2} `}>
        <h2 className={`${tileH2}`}>{h2Text}</h2>
      </div>

  return (
    <div className={`${tileDivParentWrapper} ${backgroundColor} ${width}`}>
      <div className={`${tileDivH1} ${h1Width}`}>
        <h1 className={`${tileH1MainText}`}>
          {h1MainText}{' '}
          <span className={`${tileH1SecondaryText}`}>{h1SecondaryText}</span>
        </h1>
      </div>
      {children}
      {h2}
    </div>
  )
}

export default Tile
