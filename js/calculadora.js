
var expresion = ""
var operador =""
var resultado =""
var numero1 = 0;
var numero2 = 0;

const app = Vue.createApp({

    data(){
        return{
            res : resultado
        }
    },

    methods:{

         sumar (num1, num2) {return num1+num2},
         restar (num1, num2){ return num1-num2},
         multiplicar (num1, num2){ return num1*num2},
         dividir (num1, num2){ return num1/num2},

        insertarElemento(num){
            
            var contenido = num;
            expresion += contenido;
            this.res=expresion;
           },

        calcular(){

            numero2 = parseInt(expresion);
            console.log("calcular"+numero2+"  "+numero1 + "operador: "+operador)
            switch (operador){
                case '+':
                   
                    this.res ="=  "+ this.sumar(numero1,numero2);
                    break;
                case '-':
                    this.res = "=  "+this.restar(numero1,numero2);
                   
                    break;
                case '*':
                    this.res = "=  "+this.multiplicar(numero1,numero2);
                  
                    break;
                case '÷':
                    this.res = "=  "+ this.dividir(numero1,numero2).toFixed(4);
                    
                    break;
        
            }
            expresion = " ";
            
        
        },

        
        operacion(signo){
            numero1 = parseInt(expresion);
            operador = signo;
            this.res= signo+"  " +numero1 
            expresion = "";    
            
        }
    }
})

app.mount('#AppCalculadora')