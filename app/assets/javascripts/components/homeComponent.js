import React from 'react'

export default class SideBarComponent extends React.Component{
  render(){
    return(
      <div className="sidebar-left">
        <h1>Welcome, {this.props.username}</h1>
        <h3>Room: {this.props.roomNumber}</h3>

        <div className="list-group">
          <div className="list-group-item">Home</div>
          <div className="list-group-item">Edit User</div>
          <div className="list-group-item">Add Child</div>
          <div className="list-group-item">Activity Log</div>
        </div>
      </div>
    )
  }
}
