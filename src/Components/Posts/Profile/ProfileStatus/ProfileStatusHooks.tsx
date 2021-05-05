import React, { ChangeEvent, useEffect, useState } from 'react'

type PropsType = {
   status: string
   updateStatus: (status: string) => void 
}

const ProfileStatusHooks: React.FC<PropsType> = (props) => {
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

   const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.target.value)   
   }
   

   return (
      <div >
         { !editMode &&
         <p onClick={activateEditMode}>{props.status || "No status"}</p> }
         
         { editMode &&
         <input onChange={onStatusChange} value={status}  autoFocus={true}  type="text" onBlur={deactivateEditMode} />}
      </div>
      ) 
   }


export default ProfileStatusHooks