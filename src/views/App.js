import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { root } from 'baobab-react/higher-order'
import tree from 'model/state'
import client from 'service/client'
import {
    isTokenExpired,
} from 'service/utils/util'

import DashboardLayout from './dashboard'
import AdminLayout from './adminlogin'

import './App.css';

// Update token
tree.select('token', 'value').on('update', function(e) {
    var token = e.data.currentData;
    if (token) {
        client.setToken(token)
    }
});

// Update appkey
tree.select('current', 'app_key').on('update', function(e) {
    var appkey = e.data.currentData
    client.setAppkey(appkey)
})

// 持久化存储, tree.commit() 强制一次提交，避免 Baobab 延迟
const token = localStorage.getItem("token")
if (token && !isTokenExpired(token)) {
    tree.set(['token', 'value'], token)
    tree.commit()
} else {
    tree.unset(['token', 'value'])
    tree.commit()
}

function App() {
    return (
        <BrowserRouter basename="/b">
        <Switch>
            <Route path="/admin" component={AdminLayout} />
            <Route path="/dashboard" component={DashboardLayout} />
        </Switch>
        </BrowserRouter>
    );
}

// 此处注入：
// 1. kawa API 客户端 kawa(client, App)
// 2. baobab 组件 root(tree, App)
export default root(tree, App)
