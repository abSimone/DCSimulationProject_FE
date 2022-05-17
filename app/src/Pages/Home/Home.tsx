import sound from "./sample.mp3";

const Home = () => {
  return (
    <div className="homepage">
      <h1>Benvenuto fratemo!</h1>
      <button onClick={() => playThis()}>PREMIMI</button>
    </div>
  );
};
export default Home;

function playThis() {
  let audio = new Audio(sound);
  audio.play();
}
