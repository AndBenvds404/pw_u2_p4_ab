console.log("componente Vue")
console.log(Vue)

const app= Vue.createApp({
    template:`
    <h1> HOLA Mundo </h1>
    <p> desde Vue.JS</p>
    `
})

app.mount('#myIdentinficador')