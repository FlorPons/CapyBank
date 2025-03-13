import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string({ invalid_type_error: "El formato introducido es incorrecto." })
        .email({ message: "Debes introducir un email válido." }),
        
    password: z
        .string({ message: "La contraseña es obligatoria", invalid_type_error: "El formato introducido es incorrecto." })
        .min(1, { message: "La contraseña no debe estar vacia." }),
});

export type FormDataLogin = z.infer<typeof loginSchema>;