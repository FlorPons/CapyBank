// src/components/Moves/CashOut.tsx  

import { InputText } from "primereact/inputtext";  
import { useForm } from "react-hook-form";  
import { zodResolver } from "@hookform/resolvers/zod";  
import { moveOut, MoveOutForm } from "../../schemas/cashMove.schema";  
import { useTransfer } from "../../hooks/useMoves";  
import { useAuthStore } from "../../store/AuthStore";  
import { TransferCash } from "../../types/CashMoves.types";  
import BlueButton from "../buttons/BlueButton";  

const CashOut = () => {  
    const { register, handleSubmit, formState: { errors } } = useForm({  
        mode: "all",  
        resolver: zodResolver(moveOut),  
    });  

    const { mutate: transfer, isSuccess, isPending, error } = useTransfer();  
    const user = useAuthStore((state) => state.user);  
    
    if (!user) {  
        return <p className="text-red-600">Por favor, inicia sesión para realizar una transferencia.</p>;  
    }  

    const onSubmit = (data: MoveOutForm) => {  
        const complete_transaction: TransferCash = {  
            ...data,  
            ammount: Number(data.ammount),  
            operation_type_id: 1,  
            user_id: user.id_user,   
            is_income: false,  
            sender_account_id: user.id_user 
        }; 
        console.log("Datos de transferencia:", complete_transaction);   

        transfer(complete_transaction);  
    };  

    return (  
        <div className="flex flex-col w-full p-4 border rounded border-gray-300 bg-white mt-4">   
            <h5 className="text-secondary mb-2">Enviar dinero</h5>  
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">   
                <InputText  
                    placeholder="Número de cuenta"  
                    {...register("reciever_account_number")}  
                    id="reciever_account_number"  
                    invalid={!!errors.reciever_account_number}  
                />  
                {errors.reciever_account_number && (  
                    <small className="text-secondary">{errors.reciever_account_number.message}</small>  
                )}   

                <InputText  
                    placeholder="Monto"  
                    type="number"
                    {...register("ammount")}  
                    id="ammount"  
                    invalid={!!errors.ammount}  
                />   
                {errors.ammount && (  
                    <small className="text-secondary">{errors.ammount.message}</small>  
                )}  

                <BlueButton  
                    label="Enviar"  
                    type="submit"  
                    disabled={isPending}  
                />   

                {isSuccess && (  
                    <p className="text-green-600 mt-2">Transferencia finalizada exitosamente</p>  
                )}  

                {error && (  
                    <p className="text-red-600 mt-2">Error al realizar la transferencia, compruebe los datos de cuenta y el monto.</p>  
                )}  
            </form>  
        </div>  
    );  
};  

export default CashOut;   