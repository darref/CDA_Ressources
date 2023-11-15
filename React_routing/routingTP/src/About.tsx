import { Link, useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
  
    return (
      <div>
        We are in About
        <button onClick={() => navigate("/")}>Go to home</button>
      </div>
    );
  };

  export default About;