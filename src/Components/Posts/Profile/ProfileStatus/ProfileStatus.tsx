import React from 'react'
import module from './ProfileStatus.module.css';

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

   componentDidUpdate(prevProps: PropsType, prevState: StateType) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }

   render() {
      return (
         <div >
            {!this.state.editMode &&
               <p className={module.status} onClick={this.activateEditMode} >{this.props.status || "No status"}</p>}
            {this.state.editMode &&
               <div className={module.text}>
                  <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                     type="text" value={this.state.status} />
               </div>}
         </div>
      )
   }
}

export default ProfileStatus