import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



const Dettaglio = () => {
  const [nome, setNome] = useState<string>("");
  const [costo, setCosto] = useState<number>(0);
  const { id } = useParams();

  const getPizza = async () => {
    const response = await fetch(`http://127.0.0.1:8000/pizza/${id}`,
      {
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
   
   const data = await response.json();
   setNome(data.data.nome)
   setCosto(data.data.costo) 
  }

  useEffect(() =>{getPizza()}, [id])

  return (
    <div>
      <h1>Dettaglio del prodotto: {id}</h1>
      <label htmlFor="nome">Gusto</label>
      <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <label htmlFor="nome">Costo</label>
      <input type="number" id="costo" name="costo" value={costo} onChange={(e) => setCosto(+e.target.value)} />
    </div>
  );
};
export default Dettaglio;
