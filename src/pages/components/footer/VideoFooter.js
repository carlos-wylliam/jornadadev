import React from "react";
import "./videofooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({name, description, music}) {
  return (
    <div className="video__footer">
      <div className="VideoFooter__Text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="VideoFooter__music">
          <MusicNoteIcon />
          <div className="VideoMusicFooter__text">
            <p>{music}</p>
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
