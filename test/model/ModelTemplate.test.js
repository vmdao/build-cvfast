import { expect } from 'chai'
import ModelTemplate from '../../src/componets/ModelTemplate'
import DataTemplate from '../../src/componets/DataTemplate'

const data = {
    "name": "summary",
    "type": "text_story",
    "label": "Hellos",
    "content": {
        "description": "\u003cp\u003e\u003cspan style=\"font-weight: 400;\"\u003eDeveloper with 3+ years of experience working directly for the CEO of Uplevo Inc and develop many products, a Startup company. Design platform online application for everyone Instantly create digital marketing or printing.\u003c/span\u003e\u003c/p\u003e"
    }
}
const data2 = {
    "name": "positions",
    "type": "dated_story",
    "contents": [{
        "title": "Architect/Developer",
        "organization": "UPLEVO INC",
        "organization_url": "http://uplevo.com",
        "description": "\u003cp\u003e\u003cspan\u003eUplevo - Online Design Platform. We provide online design platform on which customers can easily customize their ideas, especially it generates an international agency quality and consistently output designs Make the design work becoming easier, better quality but lower cost for micro business, marketer and designer.\u0026nbsp;\u003c/span\u003e\u003c/p\u003e\n\u003cp\u003e\u003cspan\u003e\u003cspan\u003eReferent about Uplevo:\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\u003cp\u003e\u003cspan\u003e\u003cspan\u003e\u003cspan\u003e\u003ca href=\"https://www.crunchbase.com/organization/uplevo\" target=\"_blank\" rel=\"nofollow\"\u003ehttps://www.crunchbase.com/organization/uplevo\u003c/a\u003e\u003c/span\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\u003cp\u003e\u003cspan\u003e\u003cspan\u003e\u003cspan\u003e\u003cspan\u003e\u003ca href=\"https://www.producthunt.com/posts/uplevo\" target=\"_blank\" rel=\"nofollow\"\u003ehttps://www.producthunt.com/posts/uplevo\u003c/a\u003e\u003c/span\u003e\u003c/span\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\u003cp\u003e\u003cspan\u003e\u003cspan\u003e\u003cspan\u003e\u003cspan\u003e\u003cspan\u003e\u003c/span\u003e\u003c/span\u003e\u003c/span\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eDevops ( Developement Oparetor)\u0026nbsp;\u003c/li\u003e\n\u003cli\u003e\u003cspan\u003eUse model microservice\u003c/span\u003e\u003c/li\u003e\n\u003cli\u003e\u003cspan\u003e\u003cspan\u003e\u003cspan\u003eDesign\u0026nbsp;architecture pattern MVC for app\u003c/span\u003e\u003c/span\u003e\u003c/span\u003e\u003c/li\u003e\n\u003cli\u003e\u003cspan\u003eResearch, Design, Develop function tools editor template\u0026nbsp;\u003c/span\u003e\u003c/li\u003e\n\u003cli\u003eResponsive for all device.\u003c/li\u003e\n\u003cli\u003eService Payment and i\u003cspan\u003entegration\u003c/span\u003e with Paypal, Stripe, Nganluong, SMS, Cardbank, Cardmobile.\u003c/li\u003e\n\u003cli\u003e\u003cspan\u003eUse Aouth with Facebook, Google\u003c/span\u003e\u003c/li\u003e\n\u003cli\u003eSystem render PDF, PS(Postscript), SVG, Image by system Message Queue\u003c/li\u003e\n\u003cli\u003e\u003cspan\u003eIntegration\u003c/span\u003e Analytic marketing with Mixpanel, Google Analytic, Metrika, HeapAnalytic\u003c/li\u003e\n\u003cli\u003e\u003cspan\u003eIntegration\u003c/span\u003e Metric system with New Relic, Trace Nodejs(Rigstack)\u0026nbsp;\u003c/li\u003e\n\u003cli\u003e\u003cspan\u003e\u003cspan\u003eIntegration\u003c/span\u003e UX with Luckyorange( service record behavior user)\u0026nbsp;\u003c/span\u003e\u0026nbsp;\u003c/li\u003e\n\u003c/ul\u003e\n\u003cul\u003e\n\u003cli\u003eEnvironment on Google Cloud vs \u003cspan\u003eAmazone\u003c/span\u003e\u0026nbsp;Cloud: Computing, Network, Router.\u003c/li\u003e\n\u003cli\u003e\u003cspan\u003e\u003cspan\u003eLanguage: Nodejs, React, Java, Meteor, Sails, PHP, Javascript, \u0026nbsp;Mysql, Mongodb\u003c/span\u003e\u003c/span\u003e\u003cspan\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/span\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u003c/p\u003e", "start_date": "Sept 2014", "end_date": "Present"
    },
    {
        "title": "Student intern",
        "organization": "FPT INFORMATION MANAGEMENT of FPT GROUP",
        "organization_url": "",
        "description": "\u003cul\u003e\n\u003cli\u003eTraining Technology\u003c/li\u003e\n\u003cli\u003eWork in the BSC team in the project that analize the business\u0026nbsp;criteria\u003c/li\u003e\n\u003c/ul\u003e", "start_date": "June 2013", "end_date": "2014"
    }],
    "label": null
}

describe('Model Template', () => {
    const model = new ModelTemplate('hello', DataTemplate.templates[0], data2)

    it('It show model template', () => {
        expect(model).to.be.a('object')
    })

    it('It show model template type ', () => {
        expect(model.type).to.equal('hello')
    })

    it('It show model template contentTemplate', () => {
        expect(model.contentTemplate).to.be.a('object')
    })

    it('It show model template contentTemplate', () => {
        expect(model.template).to.be.a('object')
    })

    it('It show model template type content', () => {
        expect(model.contentTemplate.hasOwnProperty('props')).to.equal(true)
        expect(model.contentTemplate.props['data-field']).to.have.string('content')
    })

    it('It show model template fillDataToTemplate', () => {

        model.fillDataToTemplate();
        // model.replaceIntoLayoutTemplate()
        // console.log(model.layoutTemplate)
        // console.log(model.layoutTemplate.children[1].children)
    })
})