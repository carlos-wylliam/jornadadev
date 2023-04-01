import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar"

// O useRef é um gancho que permite criar diretamente uma referência  ao elemento DOM no componente funcional
//useState serve de gerenciamento de estado true e false
// função para dar play e pausar o vídeo
function Video({likes, messagens, shares, name, description, music, url}) {
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
        src={url}
      ></video>
      <VideoSidebar 
      likes={likes}
      messagens={messagens}
      shares={shares}/>
      <VideoFooter
      name={name}
      description={description}
      music={music} />
    </div>
  );
}

export default Video;
