import React from 'react'
import { Button } from 'shared/comps'

import styles from './login.module.css'

class Login extends React.Component {
    render() {
        return (
            <div className={styles.login}>
                <h1>登录</h1>
                <div style={{height: '1px', background: '#f8f8f8', width: '100%'}} ></div>
                <form className={styles.form}>
                    <input placeholder="Email" />
                    <input placeholder="Password" />
                    <Button>登录</Button>
                </form>
            </div>
        )
    }
}
export default Login