import {useState} from "react";

const getAverage = numbers => {
    console.log('평균값계산중.........');
    debugger;
    if(numbers.length === 0) return 0; // Average = default 0

    const sum = numbers.reduce((a,b) => a+b);
    return sum / numbers.length;
}; // 이 getAverage함수는 Closure에 저장되어있다.


// useMemo를 사용하는 평균값계산
const AverageUseMemo = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    };

    const onInsert = e => {
        const nextList = list.concat(parseInt(number)); // list는 원본이 남아있고, nextList가 setList된다.
        setList(nextList);
        setNumber('');
    };

    return(
        <>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b>{getAverage(list)}
            </div>
        </>
    );
};

export default AverageUseMemo;