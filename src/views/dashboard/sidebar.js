import React, { Component } from 'react'
import { branch } from 'baobab-react/higher-order'
import { Link } from 'react-router-dom'

import styles from './sidebar.module.css'

class SideBar extends Component {
    render() {
        console.log("sidebar get props:", this.props.match.params)
        const menus = ["A"]
        const { site = {}} = this.props
        console.log("get side:", site)
        return (
            <div className={styles.sidebar}>
                <Link style={{ textDecoration: 'none'}} to="/admin/sites">
                    <h1 className={styles.wawa}>哇哇文档</h1>  
                </Link>              
                <div className={styles.site}>
                    {site.name || site.bizID}
                </div>
                <div>
                    {menus.map( menu => {
                        return <ListItem siteid={site.bizID}/>
                    })}
                </div>
            </div>
        )
    }
}
const binding = (props, context) => {
    const { siteid } = props.match.params
	return {
		site: ["sites", "data", siteid],
	};
};
export default branch(binding, SideBar)

const ListItem = ({siteid}) => {
    return (
        <div className={styles.listitem}>
            <Link to={`/dashboard/${siteid}/posts`}>Posts</Link>
        </div>
    )
}