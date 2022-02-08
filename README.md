# Hooks 
함수형 컴포넌트에서 state를 관리하기 위한 기능을 제공하는 리액트 내장객체


## 1. useState   
- 가장 기본적인 Hook, 함수형 컴포넌트에서도 가변적인 state를 지니고 관리할 수 있도록 함

## 2. useEffect   
- 리액트 컴포넌트가 렌더링 될 때 마다 실행됨 (componentDidMount + componentDidUpdate)   
 : 처음 렌더링될 때, 상태값 update될 때 둘다실행
- 기본적으로 렌더링 직후마다 실행, 두번째 파라미터 배열의 요소에 따라 실행조건이 달라짐

***2-1. 처음 렌터링될 때만 실행시키려면? 두번째 인자로 빈 배열을 넣음***    
  : 함수컴포넌트가 화면에 맨 처음 렌더링 될 때(componentDidMount)만 실행하고, 업데이트될 때(componentDidUpdate)는 실행하지 않음
  ```
  useEffect( () => {
      console.log('최초렌더링에만 실행');
  },[]);
  ```
***2-1. 특정 값이 업데이트될 때만 실행시키려면? 두번째 인자 배열에 지정 state또는 props 값을 넣음***
  ```
  useEffect( () => {
      console.log('name이 변할 때만 실행');
  },[name]);
  ```
***2-3. clean-up : 컴포넌트가 unmount되기 전 or 업데이트되기 직전에 어떤 작업을 수행하려면? useEffect에서 "cleanup함수"를 반환해준다.***
  ```
    useEffect( () => {
      console.log('effect:',name);

      return () => {
          console.log('cleanup함수를 반환한다.:',name);
      };
  },[name]);
  ```     
> clean-up함수를 리턴한다는 것?
> 함수이름이 cleanup일 필요도 없고, 선언형이던 화살표던 상관없음    
> 
> 그냥 useEffect안에서 **함수를 리턴**하면서, 반환되는 함수 안에서    
> 컴포넌트가 언마운트 되기 전에 수행할 작업 또는 업데이트되기 직전에 수행할 작업을 수행시키면 되는 것


## 3. useReducer
```
 const [state, dispatch] = useReducer(reducer, {value:0});
```
- useReducer함수에 (리듀서함수, 리듀서함수가실행시킬 initialState)
- state : 현재 가리키고 있는 상태
- dispatch(action) : 액션을 발생시키는 함수 (이벤트핸들러에서 액션type을 받아, 리듀서함수를 호출하는 구조)   

***3-1. useReducer사용하는 이유? 컴포넌트 업데이트 로직을 따로 빼서 작성할 수 있다.***
```
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
```
- 여기서 reducer함수로 어떤상황에, 어떤 상태값을 업데이트할지 넘긴다.
  - 첫번째 인자 (state): useReducer를통해 "state 객체"를 받아옴
  - 두번째 인자 (action) : useReducer를통해 dispatch함수에 인자로받은 "type필드 속성을 가진 액션값(객체)"을 받아옴
---
***3-2. useReducer로 input상태 관리하기***
- useReducer에서 액션값은 다양한 값을 보낼 수 있다.
- onChange이벤트핸들러에서 이벤트 타겟자체를 action값으로하여 reducer함수 호출할 수 있다. 
```
    const onChange = e => {
        dispatch(e.target);        
    };
```
- 이벤트핸들러에서 dispatch로 리듀서 함수를 호출하고 >>> 리듀서함수에서는 action값으로 이벤트대상(e.target) 자체을 받아옴
- e.target, e.target.name, e.target.value 전부 접근가능 
- 즉, 클래스컴포넌트에서 e.target.name을 참조하여 setState하는 방식과 유사하게 으로 동작
```
function reducer(state, action){      // 여기 e.target이 들어옴    
    return{
        ...state,
        [action.name]: action.value   // e.target.name을 참조하여 e.target.value를 업데이트한 new state를 반환  
    };
}
```
   
## 4. useMemo
- 렌더링 하는 과정에서 특정 값이 바뀌었을 때만 연산을 하고, 바뀌지 않았다면 바로직전 연산결과를 다시 사용한다.

   
## 5. useCallback
```
useCallback(함수, [의존값1, 의존값2, ...])
```
- 첫번째 파라미터 : 생성하고싶은 함수
- 두번째 파라미터 : 배열 -> 어떤 값이 바뀌었을 때 함수를 새로 생성할 지 명시 

> useMemo vs useCallback   
> 리액트는 바로 직전 연산된 값을 사용하여 값이 바뀌면 연산을 진행하고, 
> 아니면 메모이제이션 된 값을 재사용한다. (메모이제이션, 캐싱같은개념..?)
> 
>    
> 새로들어오는 input을 비교하여 이전과 같다면?    
> 새로 연산을 진행하지 않고, 이전 값(마지막 반환된) output을 재사용한다.
   
## 6. useRef
- 변수처럼 담아서 사용   
   
### 7. 커스텀 Hooks 만들기
   
   
### 8. 다른 Hooks