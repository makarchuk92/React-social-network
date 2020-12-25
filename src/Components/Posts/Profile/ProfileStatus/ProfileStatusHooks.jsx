import React, { useEffect, useState } from 'react'

const ProfileStatusHooks = (props) => {
   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)
    useEffect(() => {
      setStatus(props.status)
    }, [props.status])

   const activateEditMode = () => {
   setEditMode(true)
   } 

   const deactivateEditMode = () => {
   setEditMode(false)
   props.updateStatus(status)
   }

   const onStatusChange = (e) => {
      setStatus(e.target.value)   
   }
   

   return (
      <div className={module.status_offer} >
         { !editMode &&
         <p onClick={activateEditMode}>{props.status || "No status"}</p> }
         
         { editMode &&
         <input onChange={onStatusChange} value={status}  autoFocus={true}  type="text" onBlur={deactivateEditMode} />}
      </div>
      ) 
   }


export default ProfileStatusHooks