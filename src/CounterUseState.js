import {useState} from "react";
const CounterUseState = () => {
    const [value, setValue] = useState(0);
    debugger;

    return (
        <>
            <p>
                현재 카운터 값은  <b>{value}</b>
            </p>
            <button onClick={() => setValue('스트링+')}> +1 </button>
            <button onClick={() => setValue(value-1)}> -1 </button>
        </>
    );
};


export default CounterUseState;