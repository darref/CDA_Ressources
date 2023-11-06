import react , {useState , useCallback , useEffect , useMemo} from 'react';
import "./Die.css"

const Die = (props: { onDieRoll: (arg0: number) => void; }) => {

    const [roll , setRoll] = useState(Math.floor(Math.random() * 6 + 1));

    const handleRoll = useCallback( () => {
        let newRoll = Math.floor(Math.random() * 6 + 1)
        setRoll(newRoll);
        props.onDieRoll(newRoll);
    }
    ,[roll]
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