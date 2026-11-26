// El manejo de los errores se hace en el controlador
// El controlador llama al servicio

import userService from '../service/user.service.js'

class UserController {

    async getUsers(req, res) {
        try {
            const users = await userService.findByAll()

            return res.status(200).json({
                success: true,
                data: users
            })

        } catch (error) {
            console.log(error)

            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }

    async saveUsers(req, res) {
        try {
            const user = await userService.save(req.body)

            return res.status(201).json({
                success: true,
                data: user
            })

        } catch (error) {
            console.log(error)

            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params

            const user = await userService.update(id, req.body)

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'Usuario no encontrado'
                })
            }

            return res.status(200).json({
                success: true,
                data: user
            })

        } catch (error) {
            console.log(error)

            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params

            const user = await userService.delete(id)

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'Usuario no encontrado'
                })
            }

            return res.status(200).json({
                success: true,
                data: user
            })

        } catch (error) {
            console.log(error)

            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
}

export default new UserController()