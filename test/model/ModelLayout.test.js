import { expect } from 'chai'
import ModelTemplate from '../../src/componets/ModelTemplate'
import ModelLayout from '../../src/componets/ModelLayout'
import DataTemplate from '../../src/componets/DataTemplate'
import DataCVDocument from '../../src/componets/DataCVDocument'

function deepShow(element) {
    console.log('Element:', element)
    element.children.forEach(e => deepShow(e))
}

describe('Model Layout', () => {
    const model = new ModelLayout(DataTemplate.layout, DataTemplate.templates, DataCVDocument.sections)

    it('It show model template', () => {
        expect(model).to.be.a('object')
    })

    it('It show model getLayoutSections', () => {
        model.initLayout();
        
        deepShow(model.layout)
        // expect(model).to.be.a('object')
    })

})

