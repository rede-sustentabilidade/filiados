import React, { Component, PropTypes } from 'react'

import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()


class App extends Component {

  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
}

export default App
