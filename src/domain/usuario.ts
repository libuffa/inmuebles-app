export default class Usuario {

    id: string
    nickname: string
    password: string
    site_status: string

    constructor(id: string, nickname: string, password: string, site_status: string) {
        this.id = id
        this.nickname = nickname
        this.password = password
        this.site_status = site_status
    }

    fromJSON(data: Response) {
        this.id = data.headers.get("id"),
        this.nickname = data.headers.get("nickname"),
        this.password = data.headers.get("password"),
        this.site_status = data.headers.get("site_status")
    }

}