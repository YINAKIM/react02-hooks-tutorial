import {useState,useEffect} from "react";

const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  useEffect( () => {
      console.log('effect:',name);

      // 1.화살표 함수로 clean-up용 함수리턴
      // return () => {
      //     console.log('cleanup:',name);
      // };

      // 2.선언형 함수로 clean-up용 함수리턴
      // return function cleanup() {
      //      console.log('return cleanup func:',name);
      // };

      // 3. 내맘대로이름으로 clean-up용 함수리턴
      // return function cleanclean() {
      //      console.log('return cleanclean:',name);
      // };

      // 위 1,2,3 모두 useEffect안에서 함수를 리턴하면서 clean-up용도의 작업을 수행함
  },[name]);

  const onChangeName = e => {
      setName(e.target.value);
  }

  const onChangeNickName = e => {
      setNickName(e.target.value);
  }

  return (
      <>
        <div>
            <input value={name} onChange={onChangeName}/>
            <input value={nickName} onChange={onChangeNickName}/>
        </div>

        <div>
            <b>이름 : </b>{name}
        </div>
        <div>
            <b>닉네임 : </b>{nickName}
        </div>
      </>
  );
}

export default Info;