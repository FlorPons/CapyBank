import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

import RightLogin from "../components/login/RightLogin";
import { FormDataLogin, loginSchema } from "../schemas/login.schema";
import Silueta from "frontend/src/svgs/silueta.png";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useLogin } from "../hooks/useAuth";

const Login: React.FC = () => {
    const {
        handleSubmit,
        register,
        control,
        formState: { errors }
    } = useForm<FormDataLogin>({
        resolver: zodResolver(loginSchema),
        mode: "all"
    });

    const { mutate: login, isPending, error } = useLogin();

    const onSubmit = (data: FormDataLogin) => {
        login(data);
    };

    return (
        <div className="flex min-h-screen">
            {/* Formulario de login */}
            <div className="w-full md:w-6/12 bg-white flex items-center justify-center p-8">
                <form
                    className="w-full max-w-md flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <img src={Silueta} alt="Logo" className="w-32 h-32 object-contain" />
                    </div>

                    {/* Título de bienvenida */}
                    <div className="mb-8 text-center">
                        <h4 className="font-montserrat text-black text-2xl md:text-[32px]">
                            <b>¡Hola! 👋</b>
                        </h4>
                        <h4 className="font-montserrat text-black text-2xl md:text-[32px]">
                            <b>Te damos la bienvenida</b>
                        </h4>
                    </div>

                    {/* Campo de email */}
                    <div className="font-montserrat flex flex-col gap-2">
                        <label htmlFor="email">Correo electrónico</label>
                        <InputText
                            {...register("email")}
                            placeholder="Correo electrónico"
                            className={`w-full ${errors.email ? "p-invalid" : ""}`}
                        />
                        {errors.email && (
                            <small className="text-secondary">{errors.email?.message}</small>
                        )}
                    </div>

                    {/* Campo de contraseña */}
                    <div className="font-montserrat flex flex-col gap-2">
                        <label htmlFor="password">Contraseña</label>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <Password
                                    {...field}
                                    toggleMask
                                    placeholder="Contraseña"
                                    className="w-full"
                                    feedback={false}
                                    invalid={!!errors.password}
                                    pt={{
                                        iconField: { root: { style: { width: "100%" } } },
                                        input: { style: { width: "100%" } },
                                        root: { style: { width: "100%" } }
                                    }}
                                />
                            )}
                        />
                        {errors.password && (
                            <small className="text-secondary">{errors.password?.message}</small>
                        )}
                    </div>

                    {/* Mensaje de error de login */}
                    {error && <small className="text-red-500">{error.message}</small>}

                    {/* Botón de envío */}
                    <button
                        type="submit"
                        disabled={isPending} // Deshabilitamos el botón si está cargando
                        className={`w-full mt-6 px-6 py-3 rounded-lg font-monserrat transition-colors ${isPending ? "bg-gray-400 cursor-not-allowed" : "bg-primary text-white hover:bg-primary-dark"
                            }`}
                        aria-label="Iniciar sesión"
                    >
                        {isPending ? "Cargando..." : "Iniciar sesión"}
                    </button>

                    {/* Enlace al registro */}
                    <Link
                        to="/register"
                        className="w-full font-montserrat text-center text-gray-600 text-lg mt-4"
                        aria-label="Registrarse"
                    >
                        ¿No tienes una cuenta?{" "}
                        <span className="font-montserrat text-red-600 hover:underline">
                            Regístrate
                        </span>
                    </Link>
                </form>
            </div>

            {/* Componente de la derecha (fondo azul) */}
            <div className="hidden md:flex md:w-6/12 bg-primary items-center justify-center">
                <RightLogin />
            </div>
        </div>
    );
};

export default Login;
