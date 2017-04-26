import React, { PropTypes } from 'react'
import {propOr} from 'ramda'

const Card = props => {
  const cardArticle = propOr('mw5 center bg-white br3 pa2 mv3 ba b--black-10', 'cardArticle', props.themeStyles)
  const cardDiv = propOr('tc', 'cardDiv', props.themeStyles)
  const cardImg = propOr('br-100 h4 w4 dib ba b--black-05 pa2', 'cardImg', props.themeStyles)
  const cardH1 = propOr('f3 mb2', 'cardH1', props.themeStyles)
  const cardH2 = propOr('f5 fw4 gray mt0', 'cardH2', props.themeStyles)

  return (
    <article className={`${cardArticle}`}>
      <div className={`${cardDiv}`}>
        <img
          src={props.image}
          className={`${cardImg}`}
          title={props.title}
        />
        <h1 className={`${cardH1}`}>{props.title}</h1>
        <h2 className={`${cardH2}`}>{props.description}</h2>
      </div>
      {props.children}
    </article>
  )
}

Card.propTypes = {
  image: React.PropTypes.string,
  title: React.PropTypes.string,
  description: React.PropTypes.string
}

export default Card
