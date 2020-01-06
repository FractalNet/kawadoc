import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './sidebar.module.css'

export default class SideBar extends Component {
    render() {
        const menus = ["A", "B"]
        return (
            <div className={styles.sidebar}>
                <Link style={{ textDecoration: 'none'}} to="/admin">
                    <h1 className={styles.wawa}>哇哇文档</h1>  
                </Link>              
                <div className={styles.site}>
                    独墅湖写码
                </div>
                
                <div>
                    {menus.map( menu => {
                        return <ListItem />
                    })}
                </div>

                
            </div>
        )
    }
}

const ListItem = ({}) => {
    return (
        <div className={styles.listitem}>
            Posts
        </div>
    )
}