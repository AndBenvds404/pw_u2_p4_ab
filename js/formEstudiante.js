const estudiantes = [{
    nombre: 'Andres',apellido: 'Benavides', edad:'24', ciudad:'Quito'},
    {nombre: 'Pepe',apellido: 'Ochoa', edad:'22', ciudad:'Guayaquil'}]

const app= Vue.createApp({

    data(){
        return{
            miLista: estudiantes
        }
    },
    methods:{
        insertNuevoEstudiante(){

            if(!(this.nombre && this.apellido && this.edad && this.ciudad)){ 
                alert('Existen campos sin llenar')
            }
            else{

            
                const newEstudent = {nombre: this.nombre,apellido:this.apellido,
                                    edad:this.edad, ciudad:this.ciudad}
                
                this.miLista.push(newEstudent)
                this.nombre=""
                this.apellido=""
                this.edad=""
                this.ciudad=""
            }
        }

    }
})

app.mount("#appLista")

