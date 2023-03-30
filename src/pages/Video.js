import React, { useRef, useState } from "react";
import "./video.css";
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
        src="https://webapp-va.tiktok.com/
        4961ffbe89309fe8c6b45801c5919492/64
        251cf7/kmoat/tos-useast2a-pve-0068/
        o4IzeeQgSqA8GDP8uBjZZnbfwNnWCCEoWg7
        HTc?a=1988&ch=0&cr=0&dr=0&lr=tiktok_
        m&cd=0%7C0%7C0%7C0&br=2574&bt=1287&cs=
        0&ds=6&ft=Ap6JtBiTq8ZmoA9eCc_vj_vQ8AhL
        rus&mime_type=video_mp4&qs=0&rc=NXZpTG
        RTaFBnKWZzZXpoaGRmZ2hlN2g4Z2Rm
        ZGdoNzg4NkBpamY5aTk6Zmk6aTMzNzczM0BTbGt
        2aXFEOmpoXitiK2p0OiMwLmNfMjY2NjAxXl4xNl
        4wYSNlanNecjRnZzRgLS1kMTZzcw%3D%3D&btag
        =80000&dpk=k18umEwajZQ9TnsGfPjGVXx3u8%2B
        gTt2OtevEylruvvtRUcxi8ZH05SLONOdUro0bQkB
        2wsny5cDyCEZVHJhAs8Y7SomsY0c8EiiZbw%3D%3
        D&dpm=cenc-aes-ctr&l=20230329232351DC6E5
        BBDC7A9A1805521&ply_type=3&policy=eyJ2bS
        I6MywidWlkIjoiNjgxNDg0OTc1ODY2ODMwOTUxMCJ9"
      ></video>
    </div>
  );
}

export default Video;
