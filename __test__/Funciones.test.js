const {multiplicar} = require("../src/funciones")

describe("multiplicar",()=>{
    test("5*2",()=>{
        expect(multiplicar(5,2)).toBe(10)
    })
    test("5*-2",()=>{
        expect(multiplicar(5,-2)).toBe(-10)
    })
    test("-5*2",()=>{
        expect(multiplicar(-5,2)).toBe(-10)
    })
    test("5*0",()=>{
        expect(multiplicar(5,0)).toBe(0)
    })
    test("0*2",()=>{
        expect(multiplicar(0,2)).toBe(0)
    })
})