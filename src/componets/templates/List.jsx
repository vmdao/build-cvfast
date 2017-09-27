import React, { Component } from 'react'

export default class List extends Component {
    createItem() {
        let { level } = this.props
        level = level ? parseInt(level,10) / 10 : 0

        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((l, index) => {
            return <li className={index <= level ? 'filled' : ''} key={index}></li>
        })
    }
    render() {

        return (
            <ul className="competency-list">
                {this.createItem()}
            </ul>)
    }
}