import React, { Component } from 'react'
import { branch } from 'baobab-react/higher-order'
import { Switch, Route, withRouter } from 'react-router-dom'
import SideBar from './sidebar'
import Welcome from './welcome'

import { PostList } from './posts'

import styles from './index.module.css'

import { getSite } from 'service/utils/site'

class DashboardLayout extends Component {
    componentDidMount() {
        const { siteid } = this.props.match.params
        this.props.dispatch(getSite, siteid)
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.sidebar}>
                    <Switch>
                        <Route path="/dashboard/:siteid" component={SideBar} />
                    </Switch>
                </div>
                <div className={styles.content}>
                    <Switch>
                        <Route path="/dashboard/:siteid/posts" component={PostList} />
                        <Route path="/dashboard/:siteid" component={Welcome} />
                     </Switch>
                </div>
            </div>
        );
    }
}
export default withRouter(branch({}, DashboardLayout))