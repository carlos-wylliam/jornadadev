import React from "react";
import "./videofooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="video__footer">
      <div className="VideoFooter__Text">
        <h3>@Nome Do Usuario</h3>
        <p>Descrição do vídeo</p>
        <div className="VideoFooter__music">
          <MusicNoteIcon />
          <div className="VideoMusicFooter__text">
            <p>Título da música</p>
          </div>
        </div>
      </div>
      <img
        className="VideoFooter__record"
        alt="imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
