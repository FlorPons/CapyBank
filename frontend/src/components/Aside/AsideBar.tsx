// src/components/AsideBar.tsx  

import { InputText } from "primereact/inputtext";  
import Bell from "../svg/Bell";  
import Search from "../svg/SearchBar";  
import { Avatar } from "primereact/avatar";  
import { useAuthStore } from "../../store/AuthStore";  
import CashOut from "../Moves/CashOut";  
import CashIn from "../Moves/CashIn";  
import { Link } from 'react-router-dom';  
import CreditCard from "../../svgs/CreditCard1.svg";  
//import BlueButton from "../buttons/BlueButton";  
import CapyHelp from "../../svgs/DialogHelp.svg";   

const AsideBar = () => {  
    const user = useAuthStore((state) => state.user);   

    return (  
        <aside className="min-h-screen w-[20%] h-screen px-4 py-6 flex flex-col items-start bg-whiteSecondary">   
            <div className="flex items-center gap-4 mb-6">  
                <Search width={24} height={24} className="text-secondary" />  
                <InputText placeholder="Buscar" className="h-8 w-1/2 text-secondary border-secondary border-1"/>   
                <Bell width={24} height={24} className="text-secondary" />  
                <Link to="/profile">  
                    <Avatar label={user?.name.charAt(0)} shape="circle" style={{ backgroundColor: 'var(--color-secondary)', color: '#ffffff' }}/>  
                </Link>   
            </div>  

            <div className="flex flex-col w-full gap-6">  
                <h5 className="text-secondary text-lg">Transferencia rápida</h5>  
                <div className="w-full">  
                    <h5 className="text-secondary">Billetera</h5>  
                    <div className="flex flex-col items-center">  
                        <img className="w-full max-w-xs relative" src={CreditCard} alt="Imagen de tarjeta de Crédito" />   
                        <p className="absolute text-black top-1/2 transform -translate-y-1/2">{user?.name || "Nombre no disponible"}</p>  

                        <p className="text-gray mt-2">CVU: {user?.cvu || "No disponible"}</p>  
                        
                        <div className="flex flex-col items-center w-full mt-4 gap-2">    
                            <CashOut /> 
                        </div>  
                    </div>  
                </div>      
            </div>   

            <div className="flex justify-center gap-12 mt-6">  
                <CashIn />   
            </div>  

            <div className="relative h-fit w-full">  
                <img className="m-auto" src={CapyHelp} alt="Icono de CapyHelp" />  
            </div>   
            </aside>  
    );  
};  

export default AsideBar;    