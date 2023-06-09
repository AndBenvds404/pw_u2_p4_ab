console.log("componente Vue")
console.log(Vue)
var check = true;
const app= Vue.createApp({
   /* template:`
    <h1> HOLA Mundo </h1>
    <p> desde Vue.JS</p> 
    <p> {{2+2}}</p> 
    `*/
    data(){  //permite vincular informacion de la vista con mi programacion Js
        return {
            nombre:'Andres',
            apellido: 'Benavides',
            mensaje:'hola mundo desde VueJS T_T'
        }
    },

    //opcion de metodos
    methods:{
        cambiarNombre(){
            console.log('boton cambiar nombre')
            console.log(this.nombre)
            if (check){
                this.nombre='Vegeta' 
                check=false
            }else{
                this.nombre='Andres'
                check=true
            }
        }
        ,

        cambiarApellido(){
            console.log('boton cambiar apellido')
            this.apellido='Cabrera'
            
        }
        
    }
   
})

app.mount('#myIdentinficador')