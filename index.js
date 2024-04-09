/* -- DOM -- */

const txtOp1 = document.getElementById("op1");
const txtOperacion = document.getElementById("operacion");
const txtOp2 = document.getElementById("op2");
const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");


//btnCalcular.addEventListener('click',calcular); puede aplicarse de esta forma o a través de onClick en HTML, línea 29.

function calcular() {
    const operacion = txtOperacion.value
    const op1 = parseFloat (txtOp1.value)
    const op2 = parseFloat (txtOp2.value)

    //parseFloat utilizado para introducir números decimales.

    if((operacion === '+' || operacion === '-' || operacion === '*' || operacion === '/') && !isNaN(op1) && !isNaN(op2)) {
        let resultado
        switch (operacion) { /*switch utilizado para organizar en varias ramas nuestro código*/
            case "+":
                resultado = op1 + op2
                break; /*El break hace que sólo se ejecute la primera operación (suma)*/
                case "-":
                resultado = op1 - op2
                break;
                case "*":
                resultado = op1 * op2
                break;
                case "/":
                resultado = op1 / op2
                break;
        }
        pResultado.style = "color: black"
        pResultado.innerText = "Resultado = " + resultado
    } else {
        pResultado.style = "color: red"
        pResultado.innerText = "Cálculo imposible, por favor introduzca un número"
    }
}

