import {useReducer, useState} from "react";

// 첫param(state): useReducer를통해 "state 객체"를 받아옴
// 두번째param(action) : useReducer를통해 dispatch함수에 인자로받은 "type필드 속성을 가진 액션값(객체)"을 받아옴
function reducer(state, action) {
    debugger;

    switch (action.type){                              // action.type에 따라
        case 'INCREMENT':
            return { value : state.value+1 };          // new state반환
        case 'DECREMENT':
            return { value : state.value-1 };          // new state반환
        default:
            console.log("들어온state그대로 나간다:",state.value);
            return state;                              // 아무것도 해당되지 않으면? 기존state반환
    }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {value:0});

  return (
      <>
          <p>
              현재 카운터 값은  <b>{state.value}</b>
          </p>
          <button onClick={() => dispatch( {type:'INCREMENT'} )}> +1 </button>
          <button onClick={() => dispatch( {type:'DECREMENT'} )}> -1 </button>
          <button onClick={() => dispatch( {type:'CROSS'} )}> 액션type으로 'CROSS'는 정의하지 않았으므로 기존state를 반환하는버튼 </button>
      </>
  );
};


export default Counter;