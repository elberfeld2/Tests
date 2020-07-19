
const multiplicar = (n,m) => m >= 0 ?  //Preguntamos si m es positivo
    ( ( m == 0 ) ?                     //Si si preguntamos si es 0 
        0 :                            //Si si devolvemos 0 ya que si m = 0 => n * 0 = 0
        n + multiplicar( n , m - 1 )   //Si no sumamos a n la multiplicacion de n*(m-1)
    ) : 
    0 - multiplicar( n , 0 - m )       //Si no es positivo restamos a cero la multiplicacion de su positivo
                                       //Ejemplo 1 (5*-2)=>0-(5*2)=>0-10=>-10
                                       //Ejemplo 2 (-5*-2)=>0-(-5*2)=>0-(-10)=>10

module.exports = {multiplicar}