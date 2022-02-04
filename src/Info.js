import {useReducer,useState,useEffect} from "react";

function reducer(state, action){        // action값으로 이벤트대상(e.target) 자체을 받아옴
    return{
        ...state,
        [action.name]: action.value     // e.target, e.target.name, e.target.value 전부 접근가능 == (클래스컴포넌트에서) e.target.name을 참조하여 setState하는 방식과 유사하게 으로 동작
    };
}


const Info = () => {
    const [state, dispatch] = useReducer(reducer,{ name:'', nickname:'' });
    const {name, nickname} = state;

    const onChange = e => {
        debugger;
        dispatch(e.target);              // onChange이벤트에 타겟 자체를 action값으로하여 reducer함수 호출
    };

    return (
      <>
        <div>
            <input name="name" value={name} onChange={onChange}/>
            <input name="nickname"  value={nickname} onChange={onChange}/>
        </div>

        <div>
            <b>이름 : </b>{name}
        </div>
        <div>
            <b>닉네임 : </b>{nickname}
        </div>
      </>
    );
}

export default Info;