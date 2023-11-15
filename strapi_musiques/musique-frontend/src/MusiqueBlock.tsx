import { Link, useNavigate } from "react-router-dom";

const MusicBlock = (props:{Song : string , Color : string , Fav : boolean , ReleaseDate : string} ) => {
    const navigate = useNavigate();
  
    return (
      <div className="blockOut" >
        <div className="title">{props.Song}</div>
        {/* <div className="author"> {}</div> */}
        <div className="releaseDate">{props.ReleaseDate}</div>
        <input type="checkbox" className="fav" checked={props.Fav}/>
      </div>
    );
  };

  export default MusicBlock;