import { useState } from "react";

export default function Cont(props){
//                                      ____valor inicial do estado
//                                     |
//                                    \/
    const [valor,setValor] = useState(0); //hook useState
    
    function incrementar(){
        setValor(valor+1);
    }

    function decrementar(){
        setValor(valor-1);
    }

    // e o metodo render ?
    return(
        <div>
                <div className="visor">
                    <h1>{valor}</h1>
                </div>
                <div className="botoes">
                    <button onClick={()=>{incrementar()}}>+</button>
                    <button onClick={()=>{decrementar()}}>-</button>
                </div>
            </div>
    );
}