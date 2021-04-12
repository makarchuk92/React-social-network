import React from 'react'

type PropsType = {
   status: string
   updateStatus: (newStatus: string) => void
}

type StateType = {
   editMode: boolean
   status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
   state = {
      editMode: false,
      status: this.props.status
   }
   activateEditMode = () => {
      this.setState({
         editMode: true
      })
   }

   deactivateEditMode = () => {
      this.setState({
         editMode: false
      })
      this.props.updateStatus(this.state.status)
   }

   onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
         status: e.target.value
      })
   }

   componentDidUpdate (prevProps: PropsType, prevState: StateType) {
      if(prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }

   render() {
   return (
      <div>
         {!this.state.editMode &&
         <p onClick={this.activateEditMode} >{this.props.status || "No status"}</p>} 
         <h1>Andrei</h1>       
         {this.state.editMode &&
         <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status} />}
      </div>
      ) 
   }
}

export default ProfileStatus