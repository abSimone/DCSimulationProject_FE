import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Pizza {
  id_pizza: number;
  nome: string;
  costo: number;
}

const Lista = () => {
  const navigate = useNavigate();

  const getPizze = async () => {
    const response = await fetch("http://127.0.0.1:8000/pizza", {
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });


    const data = await response.json();
    setPizze(data.data);
  };

  const redirectToAggiungi = () => {
    navigate("/aggiungi");
  };

  
  const rimuoviPizza = async (id: number) =>  {
    const response = await fetch(`http://127.0.0.1:8000/pizza/${id}/delete`, {
      method: 'DELETE',
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  }

  useEffect(() => {
    getPizze();
  }, []);

  const [pizze, setPizze] = useState<Pizza[]>([]);
  return (
    <div>
      <h1 style={{marginLeft:"5px"}}>Lista</h1>
      <div className="list-group list-group-flash">
      {pizze.map((pizza) => (
        <>
          <div key={pizza.id_pizza} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/dettaglio/${pizza.id_pizza}`} style={{textDecoration: "none"}}>
              <div className="nome-pizza">{pizza.nome}</div>
            </Link>
            <div>{pizza.costo}€</div>
            <button className="btn btn-outline-primary" onClick={()=>rimuoviPizza(pizza.id_pizza).then(() => getPizze())}>Elimina</button>
          </div>
        </>
      ))}
      </div>
      <button className="btn btn-outline-primary" onClick={redirectToAggiungi} style={{margin: "10px"}}>Aggiungi</button>
    </div>
  );
};
export default Lista;
