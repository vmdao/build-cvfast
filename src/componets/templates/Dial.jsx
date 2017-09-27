import React, { Component } from 'react'

export default class Dial extends Component {

    render() {
        let { level } = this.props
        level = level ? parseInt(level, 10) : 0
        return (
            <div className="competency-dial" data-competency={level}>
                <div className="competency-level">{level / 10}</div>
                <svg width="60" height="60">
                    <circle cx="30" cy="30" r="30" fill="#CCC"></circle>
                    <path d="M 30,30 L 30,0 A 30,30 0 1 1 9.44172803516728,8.151488521641276 Z" fill="#202020" >
                    </path>
                    <circle cx="30" cy="30" r="25.5" fill="#FFF"></circle>
                </svg>
            </div>)
    }
}