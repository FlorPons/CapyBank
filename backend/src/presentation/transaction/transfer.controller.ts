import { Request, Response } from 'express';  
import { TransactionService } from '../services/transaction.service';  
import { AccountService } from '../services/account.service';  

export class TransferController {  
    constructor(  
        private transactionService: TransactionService,  
        private accountService: AccountService  
    ) {}  

    public async transferMoney(req: Request, res: Response) {  
        const { operation_id, date, ammount, sender_account_id, reciever_account_number } = req.body;  

        try {  
            // Obtener el saldo del remitente y el receptor  
            const senderBalanceBefore = await this.accountService.getAccountBalance(sender_account_id);  
            const { reciever_balance, reciever_account_id } = await this.accountService.getAccountForNumberAccount(reciever_account_number);  
            
            // Crear un objeto de información de transacción  
            const transactionInfo = {  
                operation_id,  
                date,  
                ammount,  
                is_income: false,  
                sender_account_id,  
                reciever_account_id,  
                senderBalanceBefore,  
                recieverBalanceBefore: reciever_balance  
            };  

            // Llamar al servicio de transacciones para transferir los fondos  
            await this.transactionService.transfer(transactionInfo);  
            
            return res.status(200).json({ message: "Transferencia completada exitosamente." });  
        } catch (error) {  
            console.error(error);  
            return res.status(500).json({ error: error.message });  
        }  
    }  
}  