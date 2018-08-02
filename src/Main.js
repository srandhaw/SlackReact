import React from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends React.Component {
  render() {
    return (
      <div className="Main" style = {styles}>
        <Sidebar />
        <Chat />
      </div>
    )
  }
}

export default Main

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
}