import React, { Component, PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()


class App extends Component {

  render() {
    const { children } = this.props
    return (
      <MuiThemeProvider>
        {children}
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
}

export default App
