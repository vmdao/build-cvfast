export default class ModelTemplate {
    constructor(type, template, data) {
        this.type = type;
        this.data = data;
        this.template = template;
        this.setContentTemplate(template);
        try {
            this.layoutTemplate = JSON.parse(JSON.stringify(template));
        } catch (error) {
            console.log('error clone')
            this.layoutTemplate = {}
        }

        this.fillDataToTemplate(this.data)
    }

    setContentTemplate(template) {
        this.contentTemplate = this.scanContentTemplate(template, ['contents', 'content'])
    }

    getContentTemplate() {
        return this.contentTemplate;
    }

    scanContentTemplate(template, selector) {
        if (typeof template !== 'object') return null;

        const field = template.props['data-field'];

        if (typeof field === 'string' && (selector === field || (Array.isArray(selector) && selector.find(s => s === field)))) {
            // console.log(field, template)
            return template
        } else if (Array.isArray(template.children) && template.children.length > 0) {
            let i,
                result = null;

            for (i = 0; result === null && i < template.children.length; i++) {
                result = this.scanContentTemplate(template.children[i], selector)
            }

            return result
        }

        return null;
    }

    fillDataToTemplate(data) {
        // setClasname
        this.layoutTemplate.props = { className: data.type }
        // set Label
        const label = this.scanContentTemplate(this.layoutTemplate, ['label']);
        if (label) {
            label.content = data.label;
        }

        // set Content
        if (data.content) {

            const { content } = data;

            for (var key in content) {
                if (content.hasOwnProperty(key)) {
                    var element = this.scanContentTemplate(this.layoutTemplate, [key])
                    if (element === null) {
                        continue
                    }
                    element.content = content[key]
                }
            }

        } else if (data.contents) {

            const { contents } = data;

            const sections = contents.map(content => {
                const cloneContent = JSON.parse(JSON.stringify(this.contentTemplate))

                for (var key in content) {

                    if (content.hasOwnProperty(key)) {

                        var element = this.scanContentTemplate(cloneContent, key);

                        if (element === null) {
                            continue
                        }
                        element.content = content[key]
                        // console.log('element', element)

                    }
                }
                return cloneContent
            });
            // this.contentTemplate = sections;
            // console.log('sections', sections, this.layoutTemplate)
            this.replaceIntoLayoutTemplate(this.layoutTemplate, 'contents', sections)
        }

    }

    replaceIntoLayoutTemplate(layoutTemplate, selectorOld, dataNew) {
        layoutTemplate.children.pop()
        dataNew.forEach(d => {
            layoutTemplate.children.push(d)
        })
    }


}