import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={111}
          messagens={222}
          shares={333}
          name="Carlos"
          description="Gato pulando poggers"
          music="AURORA - Runaway"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video
          likes={111}
          messagens={222}
          shares={333}
          name="Carlos"
          description="Gato pulando poggers"
          music="AURORA - Runaway"
          url="https://firebasestorage.googleapis.com/v0/b/jornadadevtr.appspot.com/o/WhatsApp%20Video%202023-03-29%20at%2020.04.52.mp4?alt=media&token=db4be029-27cc-4af9-b75d-3ce5fd1b1fe2"
        />
      </div>
    </div>
  );
}

export default App;
