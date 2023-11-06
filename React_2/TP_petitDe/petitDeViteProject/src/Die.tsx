import react , {useState , useCallback , useEffect , useMemo} from 'react';
import "./Die.css"

const Die = () => {

    const [roll , setRoll] = useState(Math.floor(Math.random() * 6 + 1));

    const handleRoll = useCallback( () => {
        setRoll(Math.floor(Math.random() * 6 + 1));
    }
    ,[]
    )


    return(
        <div className='Die' onClick={handleRoll}>
            <p>
                {roll}
            </p>    
        </div>
    )
}

export default Die;