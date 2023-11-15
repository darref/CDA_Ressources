import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  
    return (
      <div>
        We are in Home
        <Link to="/About"> Go to about</Link>
        <Link to="/connection"> Go to connection</Link>
      </div>
    );
  };

  export default Home;