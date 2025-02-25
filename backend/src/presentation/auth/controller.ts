import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";


export class AuthController {

    constructor(
        public readonly authService: AuthService,
    ) { }

    register = (req: Request, res: Response) => {
        const {
            name,
            last_name,
            email,
            dni,
            password,
            address,
            phone,
            birth_date,
            city_id } = req.body

        const user = {
            name,
            last_name,
            email,
            dni,
            password,
            address,
            phone,
            birth_date,
            city_id
        }

        this.authService.register(user)
            .then((data) => {

                data.newUser

                res
                    .status(201)
                    .cookie(
                        'x-token',
                        data.token,
                        {
                            httpOnly: true,
                            sameSite: 'strict',
                            maxAge: 1000 * 60 * 60
                        }
                    )
                    .json()
            })
            .catch(error => res.status(400).json({ error: error.message }))
    }

    login = (req: Request, res: Response) => {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("Falta email o contraseña")
        }

        this.authService.loginUser(email, password)
            .then((token) => {
                if (!token) {
                    throw new Error("credenciales incorrectas")
                }

                res.cookie("token", token, {
                    httpOnly: true,
                    secure: false,
                    maxAge: 3600000, // 1 hora
                }).status(200).json({ message: "Autenticado" });
            })
            .catch(err => {
                res.status(500).json({ message: "Error en el login", error: err.message });
            });
    };


}