import DataTemplate from './DataTemplate'
import DataCVDocument from './DataCVDocument'

class Data {
    constructor() {

    }

    scanLayout() {
        return this.deepLayout(DataTemplate.layout)
    }

    deepLayout(element) {
        const field = element.props['data-field'];

        if (field === 'sections') {
            console.log('SECTIONS: ', field, element)
            // const sections = this.scanData();
            console.log(sections)
        }

        if (field === 'profile' || field === 'sitebar_profile') {
            console.log('PROFILE: ', field, element)
        }

        return element.children.map(e => this.deepLayout(e))
    }

    scanData() {
        const data = []
        const sections = DataCVDocument.sections;
        if (typeof sections !== 'object') return data
        for (let key in sections) {
            if (sections.hasOwnProperty(key)) {
                const section = sections[key];
                data.push(this.deepData(section))
            }
        }

        return data;
    }

    deepData(section) {
        if (section.label) {
            console.log('Label: ', section.label)
        }

        if (section.contents) {

            return section.contents.map(s => this.deepData(s))

        } else if (section.content) {

            return this.deepData(section.content)

        } else {

            for (let key in section) {
                if (section.hasOwnProperty(key)) {
                    const element = section[key];
                    // console.log("element: ", element)
                }
            }
        }
        // data.children.map(d => this.deepData(d))
    }

    scanTemplate() {
        DataTemplate.templates.map(t => this.deepTemplate(t))
    }

    deepTemplate(element) {
        console.log(element)
        if (element.props) {
            const field = element.props['data-field'],
                id = element.props.id;

            if (id) {
                console.log('Id: ', id)
            }

            if (field) {
                console.log('Field: ', field)
            }
        }

        return Array.isArray(element.children) && element.children.map(e => this.deepTemplate(e))
    }


    getDataLayout() {

    }

    getDeepDataLayout(element) {
        const field = element.props['data-field'];

        if (field === 'sections') {
            console.log('SECTIONS: ', field, element)
            const sections = this.scanData();
            console.log(sections)
        }

        if (field === 'profile' || field === 'sitebar_profile') {
            console.log('PROFILE: ', field, element)
        }

        return element.children.map(e => this.deepLayout(e))
    }

    getDataDocument(){
        
    }

}
export default Data 