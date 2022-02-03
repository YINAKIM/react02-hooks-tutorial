# Hooks 
함수형 컴포넌트에서 state를 관리하기 위한 기능을 제공하는 리액트 내장객체


### 1. useState   
- 가장 기본적인 Hook, 함수형 컴포넌트에서도 가변적인 state를 지니고 관리할 수 있도록 함

### 2. useEffect   
- 리액트 컴포넌트가 렌더링 될 때 마다 실행됨 (componentDidMount + componentDidUpdate)   
 : 처음 렌더링될 때, 상태값 update될 때 둘다실행
- 기본적으로 렌더링 직후마다 실행, 두번째 파라미터 배열의 요소에 따라 실행조건이 달라짐

[2-1] 처음 렌터링될 때만 실행시키려면? 두번째 인자로 빈 배열을 넣음    
  : 함수컴포넌트가 화면에 맨 처음 렌더링 될 때(componentDidMount)만 실행하고, 업데이트될 때(componentDidUpdate)는 실행하지 않음
  ```
  useEffect( () => {
      console.log('최초렌더링에만 실행');
  },[]);
  ```
[2-1] 특정 값이 업데이트될 때만 실행시키려면? 두번째 인자 배열에 지정 state또는 props 값을 넣음
  ```
  useEffect( () => {
      console.log('name이 변할 때만 실행');
  },[name]);
  ```
[2-3] clean-up : 컴포넌트가 unmount되기 전 or 업데이트되기 직전에 어떤 작업을 수행하려면? useEffect에서 **cleanup함수**를 반환해준다.
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


### 3. useReducer
   
   
### 4. useMemo
   
   
### 5. useCallback
   
   
### 6. useRef
   
   
### 7. 커스텀 Hooks 만들기
   
   
### 8. 다른 Hooks