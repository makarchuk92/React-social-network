
// import React from 'react'

// class ProfileStatus extends React.Component {
//    state = {
//       editMode: false
//    }
//    activateEditMode = () => {
//       this.setState({
//          editMode: true,
//          status: this.props.status
//       })
//    }

//    deactivateEditMode = () => {
//       this.setState({
//          editMode: false
//       })
//       this.props.updateStatus(this.state.status)
//    }

//    onStatusChange = (e) => {
//       this.setState({
//          status: e.target.value
//       })
//    }

//    componentDidUpdate (prevProps, prevState) {
//       if(prevProps.status !== this.props.status) {
//          this.setState({
//             status: this.props.status
//          })
//       }
//    }

//    render() {
//    return (
//       <div className={module.status_offer} >
//          {!this.state.editMode &&
//          <p onClick={this.activateEditMode} >{this.props.status || "No status"}</p> }
         
//          {this.state.editMode &&
//          <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status} />}
//       </div>
//       ) 
//    }
// }

// export default ProfileStatus