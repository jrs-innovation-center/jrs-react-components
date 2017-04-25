import React from 'react'
import {propOr} from 'ramda'
//import Themes from '../Themes/index'

//const theme = Themes.getDefaultTheme()


const Panel = props => {
  const panelBorder = propOr('ba br2 b--dark-gray','panelBorder', props.themeStyles)
  const bgColor = propOr('bg-near-white','panelBackgroundColor', props.themeStyles)
  const textColor = propOr('dark-gray', 'panelTextColor',  props.themeStyles)

  return (
    <article className={`${panelBorder}`}>
      <header className={`pa2 ${bgColor} ${textColor}`}>
        <h2 className='fw1 f3 mt1 mb0'>{props.title}</h2>
      </header>
      <section className={`pa2 ${bgColor}`}>
        {props.children}
      </section>
      <footer className={`pa2 ${bgColor} gray`}>
        <div className='cf'>
          <div className={`fr ${textColor}`}>
            {props.onPrevious && (
            <button
              className={`ba grow ${bgColor} ${textColor} pa2`}
              onClick={props.onPrevious}
                  >
                    Previous
                  </button>
                )}
            |
            {props.onNext && (
            <button
              className={`ba grow ${bgColor} ${textColor} pa2`}
              onClick={props.onNext}
                  >
                    Next
                  </button>
                )}
            |
            {props.onFinish && (
            <button
              className={`ba grow ${bgColor} ${textColor} pa2`}
              onClick={props.onFinish}
                  >
                    Finish
                  </button>
                )}
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
