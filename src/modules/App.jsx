import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import RaisedButton from 'material-ui/RaisedButton'

const muiTheme = getMuiTheme(null, {userAgent: 'all'})

import Header from './Header'
import Search from './Search'
import Setup from './Setup'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header />
          <Search />
          <Setup />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App