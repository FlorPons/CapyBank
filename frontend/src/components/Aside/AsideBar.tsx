import { InputText } from "primereact/inputtext";
import Bell from "../svg/Bell";
import Search from "../svg/SearchBar";
import { Avatar } from "primereact/avatar";


const AsideBar = () => {

    return (
        <aside className="grow-1 bg-whiteSecondary gap-4 w-[40%] h-screen px-4 py-8 flex flex-col lg:w-[15%] items-start justify-between">

            <div className="w-full">
                <div className="flex items-center h-fit gap-4">
                    <Search
                        width={24}
                        height={24}
                        className=" center left-4 text-secondary"
                        viewBox="0 0 24 24" />
                    <InputText
                        placeholder="Buscar"
                        className="h-8 w-1/2 text-secondary border-secondary border-1" />

                    <Bell viewBox="0 0 24 24" width={24} height={24}
                        className="text-secondary"
                    />
                    <Avatar
                        label="J" shape="circle"
                        style={{ backgroundColor: 'var(--color-secondary)', color: '#ffffff' }}
                    />
                </div>
            </div>

            <div className="grow-1 flex flex-col w-full gap-16">
                <h5 className="text-secondary text-lg">Transferencia rápída</h5>

                <div className="w-full">
                    <h5 className="my-2 text-secondary">Billetera</h5>
                    <div
                        className="min-h-48 w-full rounded-lg border-2 border-dashed border-gray-300"
                    >
                    </div>

                </div>
            </div>

        </aside>
    )
}

export default AsideBar;
