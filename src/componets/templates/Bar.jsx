import React, { Component } from 'react'

export default class Bar extends Component {

    render() {
        let { level } = this.props;
        level = level ? parseInt(level,10) + '%' : 0

        return (
            <div className="competency-bar" >
                <div className="competency-level" data-field="level" style={{ width: level }}></div>
            </div>)
    }
}