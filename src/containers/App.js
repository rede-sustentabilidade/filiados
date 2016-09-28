import React, { Component, PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


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
