import React from 'react'
import { withRouter } from 'react-router-dom'
import { branch } from 'baobab-react/higher-order'
import { Button } from 'shared/comps'

import styles from './login.module.css'

import {
    getLoginCode,
    userLogin,
} from 'service/utils/login'

class Login extends React.Component {
    state = {
        phone: '',
        code: '',
    }

    handlePhoneChange = (e) => {
        this.setState({ phone: e.target.value})
    }

    handleCodeChange = (e) => {
        this.setState({ code: e.target.value})
    }

    handleCode = () => {
        const { phone } = this.state
        if (!phone) {
            alert("手机号为空."); return
        }
        getLoginCode("", phone).then( data => {
            console.log("get:", data)
            alert("验证码已发送..")
        }).catch( err => {
            console.log(err)
            alert("验证码发送失败..")
        })
    }

    handleLogin = (e) => {
        e.preventDefault();
        const { phone, code } = this.state
        if (!phone) {
            alert("手机号为空.."); return
        }
        if (!code) {
            alert("短信验证码为空.."); return
        }

        this.props.dispatch(userLogin, phone, code).then( data => {
            console.log("登录成功！", data)
            this.props.history.push("/admin/sites")
        }).catch( err => {
            console.log(err)
            alert("登录失败!")
        })
    }

    render() {
        return (
            <div className={styles.login}>
                <h1>登录</h1>
                <div style={{height: '1px', background: '#f8f8f8', width: '100%'}} ></div>
                <form className={styles.form}>
                    <input placeholder="手机号" onChange={this.handlePhoneChange} />
                    <input placeholder="短信验证码" onChange={this.handleCodeChange} />
                    <a href="#/" onClick={this.handleCode}>获取验证码</a>
                    <Button onClick={this.handleLogin}>登录</Button>
                </form>
            </div>
        )
    }
}
export default withRouter(branch({}, Login))