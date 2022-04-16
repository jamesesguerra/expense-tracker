import { useContext } from "react";  
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">

                {transactions.map(transaction => {
                    return (
                        <Transaction transaction={transaction} key={transaction.id}/>
                    )
                })}

                {/* <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                </li> */}
            </ul>
        </> 
    );
}
 
export default TransactionList;