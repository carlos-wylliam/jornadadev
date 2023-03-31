import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter"

// O useRef é um gancho que permite criar diretamente uma referência  ao elemento DOM no componente funcional
//useState serve de gerenciamento de estado true e false
// função para dar play e pausar o vídeo
function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  //  video parado = falso, logo se eu der play ele sendo falso ele dar start
  function handdleStart() {
    // if(play == false){
    //   videoRef.current.play()
    //   setPlay(true)
    // }
    // video em execução = true, logo se eu clicar ele pausa porque play = true
    // if(play == true){
    //   videoRef.current.pause()
    //   setPlay(false)
    // }

    // uma vez que o if(play) está só ele já é considerado true logo não precisa inserir o play == true
    // se por if(!play) é considerado o contrario de false que é true
    if (play) {
      videoRef.current.pause();
      setPlay(false);   
    } else {
      videoRef.current.play();
      setPlay(true);
    }
    // else significa, qualquer condição que não seja essa no caso true
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/jornadadevtr.appspot.com/o/WhatsApp%20Video%202023-03-29%20at%2020.04.52.mp4?alt=media&token=db4be029-27cc-4af9-b75d-3ce5fd1b1fe2"
      ></video>
<VideoFooter />
    </div>
  );
}

export default Video;
