import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import SiteList from './sitelist'
import Login from './login'

class AdminLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div style={{width: '800px', margin: '0px auto', minHeight: '70vh'}} >
                    <Switch>
                        <Route path="/admin/sites" component={ SiteList } />
                        <Route path="/admin/login" component={ Login } />
                    </Switch>
                </div>
                <Footer/> 
            </div>
        );
    }
}
export default AdminLayout;