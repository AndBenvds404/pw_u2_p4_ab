
var expresion = ""
var operador =""
var resultado =""
var numero1 = 0;
var numero2 = 0;

const app = Vue.createApp({

    methods:{

         sumar (num1, num2) {num1+num2},
         restar (num1, num2){ num1-num2},
         multiplicar (num1, num2){ num1*num2},
         dividir (num1, num2){ num1/num2},

        insertarElemento(num){
            var contenido = num;
            expresion += contenido;
            console.log("contenido: "+ expresion);

        },

        calcular(){

            numero2 = parseInt(expresion);
            
            switch (operador){
                case '+':
                    resultado = sumar(numero1,numero2);
                    break;
                case '-':
                    '= '+restar(numero1,numero2);
                   
                    break;
                case '*':
                    '= '+multiplicar(numero1,numero2);
                  
                    break;
                case '/':
                    '= '+dividir(numero1,numero2).toFixed(5);
                    
                    break;
        
            }
            concatenarNum = "";
        
        },

        
        operacion(signo){
            numero1 = parseInt(expresion);
             operador = signo;
            expresion = "";    
            
        }
    }
})

app.mount('#AppCalculadora')