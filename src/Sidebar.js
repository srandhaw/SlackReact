import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
       {this.props.user.displayName}
      </div>
    )
  }
}

export default Sidebar