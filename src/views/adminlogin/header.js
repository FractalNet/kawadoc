import React, { Component } from 'react'
import { branch } from 'baobab-react/higher-order'

import styles from './header.module.css'


class Header extends Component {

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.brand} style={{marginLeft:'10%'}}>
                    <a href="https://kawaapp.com" style={{color: 'inherit'}}> </a>
                </div>
            </div>
        );
    }
}
export default branch({}, Header)