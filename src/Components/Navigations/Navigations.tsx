import React from 'react';
import NavigationsLogo from './NavigationsLogo/NavigationsLogo'
import module from './Navigations.module.css';
import {Link} from 'react-router-dom';
import {Button, Col, Layout, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth, selectUserLogin} from "../../redux/auth-selectors";
import {logout} from "../../redux/auth-reducer";


export type MapStatePropsType = {}

export const Navigations: React.FC<MapStatePropsType> =
    (props) => {
        const isAuth = useSelector(selectIsAuth)
        const login = useSelector(selectUserLogin)

        const dispatch = useDispatch()

        const logoutCallback = () => {
            dispatch(logout())
        }
        const {Header} = Layout;
        return (
            <Header className="header">
                <Row>
                    <Col span={18}>
                        <NavigationsLogo/>
                    </Col>
                    {isAuth ? <>
                            <Col span={2}><h5>{login}</h5></Col>
                            <Col span={4}>
                                <Button onClick={logoutCallback} className={module.logout}>log out</Button>
                            </Col></>
                        : <Col span={5}>
                            <Link className={module.login} to={'/login'}>login in</Link>
                        </Col>}
                </Row>
            </Header>
        )
    }


