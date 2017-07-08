import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
const { propOr } = R

const Panel = props => {
  const panelBorder = propOr(
    'ba br2 b--dark-gray',
    'panelBorder',
    props.themeStyles
  )
  const panelHeader = propOr('pa2', 'panelHeader', props.themeStyles)
  const panelH2 = propOr('fw1 f3 mt1 mb0', 'panelH2', props.themeStyles)
  const panelChildrenSection = propOr(
    'pa2 ',
    'panelChildrenSection',
    props.themeStyles
  )
  const panelFooter = propOr('pa2', 'panelFooter', props.themeStyles)
  const panelButtonDiv = propOr('fr', 'panelButtonDiv', props.themeStyles)
  const panelButton = propOr('ba dim pa2 ', 'panelButton', props.themeStyles)
  return (
    <article className={`${panelBorder}`}>
      <header className={`${panelHeader}`}>
        <h2 className={`${panelH2}`}>{props.title}</h2>
      </header>
      <section className={`${panelChildrenSection}`}>
        {props.children}
      </section>
      <footer className={`${panelFooter}`}>
        <div className="cf">
          <div className={`${panelButtonDiv}`}>
            {props.onPrevious &&
              <button className={`${panelButton}`} onClick={props.onPrevious}>
                Previous
              </button>}
            |
            {props.onNext &&
              <button className={`${panelButton}`} onClick={props.onNext}>
                Next
              </button>}
            |
            {props.onFinish &&
              <button className={`${panelButton}`} onClick={props.onFinish}>
                Finish
              </button>}
          </div>
        </div>
      </footer>
    </article>
  )
}

Panel.propTypes = {
  onPrevious: React.PropTypes.func,
  onNext: React.PropTypes.func.isRequired,
  onFinish: React.PropTypes.func,
  title: React.PropTypes.string
}

export default Panel
