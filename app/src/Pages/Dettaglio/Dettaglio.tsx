import { useParams } from "react-router-dom";

const Dettaglio = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Dettaglio del prodotto: {id}</h1>
    </div>
  );
};
export default Dettaglio;
