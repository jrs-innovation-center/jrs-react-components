import React from 'react'

const Panel = props => {
  const bgColor = 'bg-' + props.bgColor || 'bg-purple'
  return (
    <article className='ba'>
      <header className={`pa4 ${bgColor} white-60`}>
        <h2>{props.title}</h2>
      </header>
      <section className='pa2'>
        {props.children}
      </section>
      <footer className={`pa4 ${bgColor} white-80`}>
        <div className='cf'>
          <div className='fr dark-purple'>
            {props.onPrevious && (
            <button
              className={`ba grow bg-white ${bgColor} b--green pa2`}
              onClick={props.onPrevious}
                  >
                    Previous
                  </button>
                )}
            |
            {props.onNext && (
            <button
              className={`ba grow bg-white ${bgColor} b--green pa2`}
              onClick={props.onNext}
                  >
                    Next
                  </button>
                )}
            |
            {props.onFinish && (
            <button
              className={`ba grow bg-white ${bgColor} b--green pa2`}
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
  onPrevious: React.PropTypes.func.isRequired,
  onNext: React.PropTypes.func.isRequired,
  onFinish: React.PropTypes.func,
  title: React.PropTypes.string
}

export default Panel
