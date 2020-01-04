import React, { Component } from 'react'
import { Switch, Route, NavLink, withRouter } from 'react-router-dom'
import styles from './index.module.css'

class DashboardLayout extends Component {
    render() {
        return (
            <div>
                Hello Dashboard!!
            </div>
        );
    }
}

export default withRouter(DashboardLayout)