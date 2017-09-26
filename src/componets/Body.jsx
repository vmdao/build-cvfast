import React, { Component } from 'react'
import ModelLayout from './ModelLayout'
import DataTemplate from '../../src/componets/DataTemplate'
import DataCVDocument from '../../src/componets/DataCVDocument'
import HtmlToReactParser from 'html-to-react'

const { Parser } = HtmlToReactParser,
    htmlToReactParser = new Parser();

class Body extends Component {

    constructor(props) {
        super(props)
    }
    createElement(element) {
        return React.createElement(
            element.type,
            element.props,
            (element.children || [])
                .map(c => {
                    return this.createElement(c)
                }),
            htmlToReactParser.parse(element.content) || ''
        );
    }

    render() {
        const modelLayout = new ModelLayout(DataTemplate.layout, DataTemplate.templates, DataCVDocument.sections)
        modelLayout.initLayout();
        const layout = modelLayout.layout
        return (
            <div className="app_body">
                <div className="app_body_inner cv-container">
                    {this.createElement(layout)}
                </div>
            </div>
        )
    }


}
export default Body