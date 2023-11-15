import { ChangeEvent, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Connection = () => {
    const navigate = useNavigate();

    const [login , setlogin] = useState("");
    const [password , setpassword] = useState("");

    const handleClickConnection = useCallback(
        () => {
            if (login === "admin" && password === "safeadmin")
            {
                navigate("/home");
            }
            else{
                console.log("mauvais password ou login");
                
            }
        },
        [login , password]

    );

    const handleChangeLogin = useCallback( (e:ChangeEvent<HTMLInputElement>) => {setlogin(e.target.value)} , [login] )
    const handleChangePassword = useCallback( (e:ChangeEvent<HTMLInputElement>) => {setpassword(e.target.value)} , [password] )

        
    return (
      <div>
        We are in Connection
        <div>
            <input type="login" onChange={ handleChangeLogin} /> 
            <input type="password" onChange={handleChangePassword} />
     
        </div>
        <button onClick={handleClickConnection}>Connect</button>
      </div>
    );
  };

  export default Connection;