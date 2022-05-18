import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

interface Ingrediente {
  id: number;
  nome: string;
}

const Dettaglio = () => {
  const [nome, setNome] = useState<string>("");
  const [costo, setCosto] = useState<number>(0);
  const [listaIngredienti, setListaIngredienti] = useState<Ingrediente[]>([]);
  const [ingredienti, setIngredienti] = useState<Ingrediente[]>([]);
  const { id } = useParams();

  const getPizza = async () => {
    if (id) {
      const response = await fetch(`http://127.0.0.1:8000/pizza/${id}`, {
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      const data = await response.json();
      setNome(data.data.nome);
      setCosto(data.data.costo);
      setListaIngredienti(data.data.ingredienti);
    }
  };

  const getIngredienti = async () => {
    const response = await fetch(`http://127.0.0.1:8000/ingrediente`, {
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await response.json();
    setIngredienti(data?.data || []);
  };

  const aggiungiIngrediente = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setListaIngredienti((lista) => [
      ...lista,
      ingredienti.find((el) => el.id === id)!,
    ]);
  };

  const rimuoviIngredienti = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setListaIngredienti(listaIngredienti.filter((el) => el.id !== id));
  };

  useEffect(() => {
    getPizza();
    getIngredienti();
  }, [id]);

  const modificaPizza = async () => {
    const response = await fetch(`http://127.0.0.1:8000/pizza/${id}/update`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id: id,
        nome: nome,
        costo: costo,
        ingredienti: listaIngredienti,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const aggiungiPizza = async () => {
    const response = await fetch(`http://127.0.0.1:8000/pizza/aggiungi`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        nome: nome,
        costo: costo,
        ingredienti: listaIngredienti,
      }),
    });
    if (response.ok) {
      alert("Inserimento avvenuto con successo");
    }
  };

  return (
    <div>
      <h1 style={{ margin: "10px" }}>Dettaglio del prodotto: {nome}</h1>
      <div
        className="input-group mb-3"
        style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }}
      >
        <label className="input-group-text" htmlFor="nome">
          Gusto
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label className="input-group-text" htmlFor="nome">
          Costo
        </label>
        <input
          type="number"
          id="costo"
          name="costo"
          className="form-control"
          value={costo}
          onChange={(e) => setCosto(+e.target.value)}
        />
      </div>

      {listaIngredienti.length > 0 &&
        listaIngredienti.map((ingrediente) => (
          <div className="list-group list-group-flush">
            <div
              className="list-group-item d-flex justify-content-between align-items-center"
              key={ingrediente.id}
            >
              {ingrediente.nome}
              <button
                className="btn btn-outline-primary"
                onClick={(e) => rimuoviIngredienti(e, ingrediente.id)}
              >
                {" "}
                Elimina{" "}
              </button>
            </div>
          </div>
        ))}
      <h2 style={{ marginTop: "10px", marginLeft: "10px" }}>
        Aggiungi ingredienti
      </h2>
      <div style={{margin: "10px"}}>
        {ingredienti.map((ingrediente) => (
          <>
            {listaIngredienti.filter((el) => el.id == ingrediente.id).length ==
              0 && (
              <button
                value={ingrediente.id}
                className="btn btn-outline-primary"
                onClick={(e) => aggiungiIngrediente(e, ingrediente.id)}
              >
                {ingrediente.nome}
              </button>
            )}
          </>
        ))}
      </div>
      <div style={{float: "right", margin: "10px"}}>
        <button
          className="btn btn-outline-primary"
          onClick={id ? modificaPizza : aggiungiPizza}
        >
          Salva
        </button>
      </div>
    </div>
  );
};
export default Dettaglio;
