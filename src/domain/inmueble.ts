export default class Inmueble {
    
    titulo: string
    precio: number
    stock: number

    constructor(titulo: string, precio: number, stock: number){
        this.titulo = titulo
        this.precio = precio
        this.stock = stock
    }

}