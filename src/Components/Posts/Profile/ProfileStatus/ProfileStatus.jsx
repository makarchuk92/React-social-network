
import React from 'react'

class ProfileStatus extends React.Component {
   state = {
      editMode: false
   }
   activateEditMode() {
      this.setState({
         editMode: true
      })
   }

   deactivateEditMode() {
      this.setState({
         editMode: false
      })
   }

   render() {
   return (
      <div className={module.status_offer} >
         {!this.state.editMode &&
         <p onClick={this.activateEditMode.bind(this)} >{this.props.status}</p> }
         
         {this.state.editMode &&
         <input autoFocus="true" onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status} />}
      </div>
      ) 
   }
}

export default ProfileStatus