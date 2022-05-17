import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

interface Pizza {
  id_pizza: number;
  nome: string;
  costo: number;
}

const Lista = () => {

  const getPizze = async () => {
    const response = await fetch("http://127.0.0.1:8000/pizza",
      {
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
   
   const data = await response.json();
   setPizze(data.data)
  }

  useEffect(() => { getPizze() }, []);

  const [pizze, setPizze] = useState<Pizza[]>([]);
  return (
    <div>
      <h1>Lista</h1>
      {pizze.map((pizza) => (
        <>
          <div key={pizza.id_pizza} className="pizze">
            <Link to={`/dettaglio/${pizza.id_pizza}`}><div>{pizza.nome}</div></Link>
            <div>{pizza.costo}</div>
          </div>
        </>
      ))}
    </div>
  );
};
export default Lista;
