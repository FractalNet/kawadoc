import React, { Component } from 'react'
import { Switch, Route, NavLink, withRouter } from 'react-router-dom'
import SideBar from './sidebar'
import Welcome from './welcome'

import { PostList } from './posts'

import styles from './index.module.css'

class DashboardLayout extends Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.sidebar}>
                    <SideBar />
                </div>
                <div className={styles.content}>
                    <Switch>
                        <Route path="/dashboard/posts" component={PostList} />
                        <Route path="/dashboard" component={Welcome} />
                     </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(DashboardLayout)