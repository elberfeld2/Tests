test("Comparar",()=>{
    const data = {usuario:"Elber"}
    expect(data).toEqual({usuario:"Elber"})
    expect(data).not.toEqual({usuario:"Elbe"})
})