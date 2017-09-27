import ModelTemplate from './ModelTemplate'

export default class ModelLayout {
    constructor(layout, templates, data) {
        try {
            this.layout = JSON.parse(JSON.stringify(layout));
        } catch (error) {
            console.log('error clone')
            this.layout = layout
        }

        this.layoutOrigin = this.layout

        this.data = data || [];
        this.templates = templates || [];
    }

    setData(data) {
        this.data = data;
    }

    setTemplate(templates) {
        this.templates = templates;
    }

    addData(item) {
        this.data.push(item)
    }

    addTemplate(template) {
        this.templates.push(template)
    }

    initLayout() {
        this.setContentProfile()
        this.setContentTemplate(this.layout)
    }

    setContentTemplate(element) {

        if (!element) return;

        const field = element.props['data-field'];

        if ('sections' === field) {
            const sections = this.getLayoutSections();
            element.children = sections;
        }

        element.children.map(e => this.setContentTemplate(e))
    }

    setContentProfile() {
        const layout = this.getLayoutProfile('profile');
        this.layout = layout;
    }

    getLayoutProfile(field) {
        let layout = null;
        this.data.forEach(d => {
            if (d.name === 'profile') {
                const modelTemplate = new ModelTemplate('profile', this.layout, d)
                layout = modelTemplate.layoutTemplate
            }
        })

        return layout;
    }

    getLayoutSections() {
        return this.data.map(d => {
            const template = this.findTemplate(d.type);
            if (template) {
                const modelTemplate = new ModelTemplate('infomation', template, d);
                modelTemplate.addEditor();
                return modelTemplate.layoutTemplate;
            }
            return template;
        })
    }


    deepFillDataToTemplate(element) {
        const field = element.props['data-field']

        if (field === 'sections') return;
        element.children.forEach(e => this.deepFillDataToTemplate(e))
    }

    getContent(current, data) {
        if (data.name === 'profile') {
            return ''
        }

        const currentItem = current.split('|')

        if (currentItem.length === 3 && currentItem[1] === 'label') {
            return data.label
        }

        if (currentItem.length >= 4) {
            if (currentItem[0] === 'profile' || currentItem[0] === 'profile_sidebar') {
                return data.content[currentItem[2]]
            }

            if (currentItem[1] === 'contents') {
                // console.log(123, data)
                return ''
                // return data.contents[currentItem[2]]
                // return htmlToReactParser.parse(data.content[currentItem[2]])
            }

            // console.log(321, data)
            return data.content[currentItem[2]]

        }

        return '';
    }

    findTemplate(type) {
        return this.templates.find(t => t.props.id === type)
    }
}