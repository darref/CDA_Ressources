import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MusicBlock from "./MusiqueBlock";

interface MusicData {
  Song: string;
  Color: string;
  Fav: boolean;
  ReleaseDate: string;
}

const Home = () => {
  const [tabMusiquesData, setTabMusiquesData] = useState<MusicData[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/musiques", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTabMusiquesData(data);
          console.log(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function immediately
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      We are in Home
      <Link to="/About"> Go to about</Link>
      <Link to="/connection"> Go to connection</Link>

      {tabMusiquesData.map((e, i) => (
        <MusicBlock
          key={i} // It's a good practice to include a unique key when mapping over an array of components
          Song={e.Song}
          Color={e.Color}
          Fav={e.Fav}
          ReleaseDate={e.ReleaseDate}
        />
      ))}
    </div>
  );
};

export default Home;
