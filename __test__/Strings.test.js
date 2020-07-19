
describe("Validacion de correr",()=>{

    test("Es un correo",()=>{
        const correo = "e@e.com"
        expect(correo).toMatch(/\S+@\S+\.\S+/)
    })

    test("No es un correo",()=>{
        const correo = "ee.com"
        expect(correo).not.toMatch(/\S+@\S+\.\S+/)
    })

})