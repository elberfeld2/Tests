const sumar = require("../src/suma")

describe("Pruebas para sumar",()=>{
    // it("1 + 2 = 3",()=>{
    //     expect(sumar(1,2)).toBe(3)
    // })
    test("1 + 2 = 3",()=>{
        expect(sumar(1,2)).toBe(3)
    })
    test("null + 2 = 2",()=>{
        expect(sumar(null,2)).toBe(2)
    })
    test("1 + null = 1",()=>{
        expect(sumar(1,null)).toBe(1)
    })
})
