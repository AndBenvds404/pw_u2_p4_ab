
const estudiantes = [{
    nombre: 'Andres',apellido: 'Benavides',},
    { nombre: 'Lautaro', apellido: 'Cabrera',},
    { nombre: 'Lupe', apellido: 'Carrion', },
    { nombre: 'Luiz', apellido: 'Ceron',},
    {  nombre: 'lucas', apellido: 'Chavez', },
    {  nombre: 'Pepe',  apellido: 'Tufiño',},
    {  nombre: 'Paquita',  apellido: 'Tumbo',},
    {  nombre: 'Pablo',  apellido: 'Tabacundo',},
    {  nombre: 'Pato',  apellido: 'Tamillo',},
    {  nombre: 'Potato',  apellido: 'Trujillo',}
    ]

    console.log(estudiantes)

const app= Vue.createApp({
   
    data(){
        return{
            miArreglo: estudiantes,
            nombre:'Vegeta'
        }
    },

    methods:{ //metodos
        insertarEstudiante(){ //eventos
            console.log('vamos a agregar')
            console.log(this.nombre)
         
            if(event.charCode=='13'){
                console.log('presionó Enter')
                const nuevoEstudiante={
                    nombre:this.nombre,
                    apellido:this.apellido
                }
                this.miArreglo.unshift(nuevoEstudiante)
            }else{
                console.log('No presionó Enter')
            }

        }, 

        insertarEstudiante2(){ //eventos
            console.log('vamos a agregar')
            console.log(this.nombre)
         
                const nuevoEstudiante={
                    nombre:this.nombre,
                    apellido:'nuevo Apellido'
                }
                this.miArreglo.unshift(nuevoEstudiante)
           

        }
    }
 })
 
 app.mount('#myApp2')

