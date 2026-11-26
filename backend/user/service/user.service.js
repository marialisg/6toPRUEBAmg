// El Service se conecta con la base de datos

import { AppDataSource } from '../../config/db.config.js'
import User from '../model/user.model.js'

// Importar DTO
import { UserDTO } from '../dto/user.dto.js'

class UserService {

    getRepository() {
        return AppDataSource.getRepository(User)
    }

    async findByAll() {

        // Buscar usuarios en la bd
        const users = await this.getRepository().find()

        // Pasar cada usuario por el DTO
        return users.map(user => new UserDTO(user))
    }

    async save(data) {
        const repository = this.getRepository()
        return await repository.save(data)
    }

    async update(id, data) {
        const repository = this.getRepository()

        const user = await repository.findOneBy({
            id: Number(id)
        })

        if (!user) return null

        repository.merge(user, data)

        return await repository.save(user)
    }

    async delete(id) {
        const repository = this.getRepository()

        const user = await repository.findOneBy({
            id: Number(id)
        })

        if (!user) return null

        await repository.remove(user)

        return user
    }
}

export default new UserService()