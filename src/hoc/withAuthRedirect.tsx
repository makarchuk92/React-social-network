import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../redux/redux-store'


let mapStateToPropsForRedirect = (state: AppStateType) => ({
   isAuth: state.auth.isAuth
})

type MapStatePropsType = {
   isAuth: boolean
}

type MapDispatchPropsType = {}


type PropsType = MapStatePropsType & MapDispatchPropsType

export function withAuthredirect<WCP>(Component: React.ComponentType<WCP>) {
   const  RedirectComponent: React.FC<PropsType> = (props) => {
      let {isAuth, ...restProps} = props
         if (!isAuth) return <Redirect to="/Login"/>
         return <Component {...restProps as WCP} />
      }

   let ConnectedAuthRedirectComponent = connect<MapStatePropsType, MapDispatchPropsType, WCP, AppStateType >
   (mapStateToPropsForRedirect, {})
   (RedirectComponent)

   return ConnectedAuthRedirectComponent
}