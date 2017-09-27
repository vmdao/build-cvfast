import React, { Component } from 'react'
import ModelLayout from './ModelLayout'
import DataTemplate from '../../src/componets/DataTemplate'
import DataCVDocument from '../../src/componets/DataCVDocument'
import ContentEditable from './ContentEditable'
import { Helmet } from 'react-helmet';
import List from './templates/List.jsx';
import Bar from './templates/Bar.jsx';
import Dial from './templates/Dial.jsx';

class Body extends Component {

    constructor(props) {
        super(props)
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.key = 1;
    }
    handleEditorChange(e) {
        console.log('Content was updated:', e.target);
    }

    createElement(element) {

        if (typeof element === 'undefined' || !element) return;
        console.log('eeeee', element)
        element.props.key = this.key++;

        const field = element.props['data-field'];
        if (field === 'level') {
            const type = element.props['data-type'];

            switch (type) {
                case 'bar': return <Bar level={element.content} key={element.props.key} />
                case 'list': return <List level={element.content} key={element.props.key} />
                case 'dial': return <Dial level={element.content} key={element.props.key} />
            }
        }


        return React.createElement(
            element.type,
            element.props,
            (element.children || [])
                .map(c => {
                    return this.createElement(c)
                }),
            typeof element.content === 'string' ?
                <ContentEditable
                    tagName="span"
                    html={element.content} // innerHTML of the editable div
                    disabled={false}       // use true to disable edition
                    onChange={this.handleEditorChange}
                /> : ''
            // htmlToReactParser.parse(element.content) || ''
        );
    }

    generatorUID() {
        return `${Date.now()}.${this.getRandomNumber(1, 50)}`;
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render() {

        const theme = DataTemplate[1]
        const modelLayout = new ModelLayout(theme.layout, theme.templates, DataCVDocument.sections)
        modelLayout.initLayout();
        const layout = modelLayout.layout;

        return (
            <div>
                <Helmet>
                    <title>{theme.theme}</title>
                    <link rel="stylesheet" type="text/css" href={theme.css + '.css'} />
                </Helmet>
                <div className="app_body cv-editor">
                    <div className="app_body_inner cv-container">
                        {this.createElement(layout)}
                    </div>
                </div>
            </div>
        )
    }


}
export default Body