export default class Inmueble {

    id: string
    siteId: string
    categoryId: string
    titulo: string
    subTitulo: string
    precio: number
    moneda: number
    stock: number
    aptoCredito: boolean

    constructor(id: string, titulo: string, precio: number, stock: number, aptoCredito: boolean) {
        this.id = id
        this.siteId = "MLA"
        this.categoryId = "MLA401686"
        this.titulo = titulo
        this.precio = precio
        this.stock = stock
        this.aptoCredito = aptoCredito
    }

    get inmuebleAptoCredito() {
        return this.aptoCredito ? "table-success" : ""
    }

    static fromJson(inmuebleJSON) {
        return new Inmueble(
            inmuebleJSON.id,
            inmuebleJSON.titulo,
            inmuebleJSON.precio,
            inmuebleJSON.stock,
            inmuebleJSON.aptoCredito
        )
    }

    toJSON(): any {
        const result: any = Object.assign({}, this)
        result.asignatario = null
        return result
    }

}