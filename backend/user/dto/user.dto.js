// Este archivo contiene los DTO relacionados con los usuarios.

// DTO para organizar los datos que se van a mostrar al usuario
export class UserDTO {
    constructor(user) {
        this.name = user.name
        this.edad = user.edad
    }
}