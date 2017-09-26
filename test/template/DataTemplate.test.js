import { expect } from 'chai'
import DataSollution from '../../src/componets/DataSollution'
const a = new DataSollution();

describe('DataTemplate', () => {
    // it('It show Layout', () => {

    //     a.scanLayout()
    // })

    // it('It show Template', () => {
    //     a.scanTemplate()
    // })

    it('It show Data', () => {
        const data = a.scanData()
        console.log('data', data)
    })
})