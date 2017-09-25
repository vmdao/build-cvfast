import React, { Component } from 'react'
import DataTemplate from './DataTemplate'
import DataCVDocument from './DataCVDocument'



class Body extends Component {

    constructor(props) {
        super(props)
        this.dataTemplate = DataTemplate.templates;
        this.dataCVDocument = DataCVDocument;
        this.dataLayout = DataTemplate.layout;
    }

    fillData(field) {
        if (!field) return null;

        if (field === 'sections') {
            return this.getDataSections();
        }

        if (field === 'profile') {

        }

    }

    getDataSections() {
        let data = [];
        for (let field in this.dataCVDocument.sections) {
            if (this.dataCVDocument.sections.hasOwnProperty(field)) {
                let template = this.getTemplate(field);
                data.push(template)
            }
        }
        return data;
    }

    getTemplate(field) {
        let template = {};
        switch (field) {

            case 'portfolio': {
                template = this.dataTemplate.find(t => {
                    return t.props.id.search('portfolio') > -1
                })
                break;
            }
            case 'strengths': {
                template = this.dataTemplate.find(t => {
                    return t.props.id.search('strengths') > -1
                })
                break;
            }
            case 'dated_story':
            case 'positions':
            case 'degrees': {
                template = this.dataTemplate.find(t => {
                    return t.props.id.search('dated_story') > -1
                })
                break;
            }
            case 'text_story':
            case 'summary':
            default: {
                template = this.dataTemplate.find(t => {
                    return t.props.id.search('text_story') > -1
                })
                break;
            }
        }
        template.type = 'section';
        return template;
    }

    createContent(data, current) {
        const field = data.props['data-field'],
            id = data.props['id'],
            fillData = this.fillData(field);

        if (field === 'sections') {
            data.children = fillData;
        }

        // const content = this.getContent();
        if (id) {
            current = id + '|';
        }
        if (field) {
            current += field + '|';
        }

        const content = this.getContent(current)
        // console.log("Props: ", data.props, "Count: ", data.children.length, current, 'content: ', content)
        console.log('current: ', current, ' ** Content', content)
        data.content = content;
        return data.children.map(c => this.createContent(c, current))
    }

    getContent(current) {
        const currentItem = current.split('|')

        if (currentItem.length === 3 && currentItem[1] === 'label') {
            const section = this.dataCVDocument.sections[currentItem[0]]
            if (section) return section[currentItem[1]]
        }

        if (currentItem.length >= 4) {
            if (currentItem[0] === 'profile' || currentItem[0] === 'profile_sidebar') {
                return this.dataCVDocument.sections.profile.content[currentItem[2]]
            }

            if (currentItem[0] === 'text_story') {
                const section = this.dataCVDocument.sections[currentItem[0]]
                if (section) return React.createElement(section.content[currentItem[2]])

            }

        }

        return '';
    }
    getContentInObject() {

    }

    createElement(element) {
        return React.createElement(
            element.type,
            element.props,
            (element.children || [])
                .map(c => {
                    return this.createElement(c)
                }),
            element.content || ''
        );
    }

    render() {
        this.createContent(DataTemplate.layout, '');

        return (
            <div className="app_body">
                <div className="app_body_inner cv-container">
                    {this.createElement(DataTemplate.layout)}
                </div>
            </div>
        )
    }


}
export default Body