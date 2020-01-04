import React, { Component } from 'react'

import styles from './footer.module.css'

export default class Footer extends Component {

    render() {
        return (
            <div className={styles.footer}>
                <div className={styles.footercontent}>
                <p>
                    <small>©2019 卡哇 · <a href="https://kawaapp.com/terms.html" rel="noopener noreferrer" target="_blank" >条款</a> · <a href="https://kawaapp.com/about.html" rel="noopener noreferrer" target="_blank">关于</a></small>
                </p>
                <p>
                    <small>卡哇隶属苏州分形网络科技有限公司 · <a href="http://www.miitbeian.gov.cn" rel="noopener noreferrer" target="_blank">苏ICP备19013971号</a></small>
                </p>
                </div>
            </div>
        );
    }
}