import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

import styles from './index.module.css'

class AdminLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={styles.content} style={{padding: '48px'}}>
                    <div className={styles.container}>
                        Hello 
                    </div>    
                </div>
                <Footer/> 
            </div>
        );
    }
}
export default AdminLayout;