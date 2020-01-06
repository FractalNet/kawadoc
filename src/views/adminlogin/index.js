import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import SiteList from './sitelist'

import styles from './index.module.css'

class AdminLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SiteList/>
                <Footer/> 
            </div>
        );
    }
}
export default AdminLayout;