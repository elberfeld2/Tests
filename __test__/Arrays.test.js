
const {carsList,brandsList} = require("../src/arrays")

describe("Arrays carsList",()=>{
    test("Que el array no sea null",()=>{
        expect(carsList()).not.toBeNull()
    })
    test("Existe VW G",()=>{
        expect(carsList()).toContain("VW G")
    })
    test("Longitud",()=>{
        expect(carsList()).toHaveLength(4)
    })
})
describe("Arrays brandsList",()=>{
    test("Que el array no sea null",()=>{
        expect(brandsList()).not.toBeNull()
    })
    test("Existe VW",()=>{
        expect(brandsList()).toContain("VW")
    })
    test("Longitud",()=>{
        expect(brandsList()).toHaveLength(4)
    })
})