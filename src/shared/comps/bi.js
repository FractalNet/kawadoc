import React from 'react'

class BIGroup extends React.Component {
    render() {
        const { children = [] } = this.props
        const array = []
        var i = 0, n = children.length
        for (; i < n; i++) {
            array.push(children[i])
            if (i != n-1) {
                array.push("/")
            }
        }

        return (
            <div>
                { array }                
            </div>
        )
    }
}

export default BIGroup