import React from 'react';
import TransactionHistory from '../components/chart/TransactionHistory';
<<<<<<< Updated upstream
import AccountSummaryChart from '../components/chart/AccountSummaryCart';
import { Transaction } from '../types/Transaction.types';
=======
import AccountSummaryChart from '../components/chart/AccountSummaryChart';
import { Transaction } from '../types/Transaction.types'; 
>>>>>>> Stashed changes
import NavbarLeft from '../components/Common/NavbarLeft';
import AsideBar from '../components/Aside/AsideBar';

const HistoryPage: React.FC = () => {
<<<<<<< Updated upstream
    const transactionsData: Transaction[] = [];
=======
    const transactionsData: Transaction[] = [];  
>>>>>>> Stashed changes

    return (  
        <div className="min-h-screen flex">  
            {/* Navbar a la izquierda */}  
            <div className="flex">  
                <NavbarLeft />  
            </div>  

<<<<<<< Updated upstream
            {/* Charts */}
            <main className="p-1 mx-3 flex grow-2">
                <div className="w-[70%]">
                    <TransactionHistory transactions={transactionsData} />
=======
            <div className="p-4 mx-2 flex grow-2">
                <div className="flex-1 p-2">
                    <TransactionHistory transactions={transactionsData} limit={false} />
>>>>>>> Stashed changes
                </div>
                <div className="w-[30%] mx-1">
                    <AccountSummaryChart />
                </div>
<<<<<<< Updated upstream
            </main>

            {/* Sidebar a la derecha */}
            <div className="flex">
                <AsideBar />
            </div>
=======
            </div>
            <AsideBar />
>>>>>>> Stashed changes
        </div>
    );
};

export default HistoryPage;   