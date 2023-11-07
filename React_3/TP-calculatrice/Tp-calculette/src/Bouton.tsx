import react , {useState , useCallback , useEffect , useMemo} from 'react';
import "./Bouton.css"


const Bouton = (props:{val:string , returnValue:(val:string)=>void}) => {
    const buttonValue = props.val;

    const handleClick = useCallback(
        () => {
            props.returnValue(buttonValue);
        },
        [props.returnValue ]
        )

        return(

            <button className='buttonHTML' onClick={handleClick}>{buttonValue}</button>
        
        );
}

export default Bouton;