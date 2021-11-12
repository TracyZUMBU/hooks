import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
// import Button from './UseCallback/Button';
// import Count from './UseCallback/Count';
// import {ColorContext, UserContext} from './UseContext/MyContext'
// import Profile from './UseContext/Profile';
import React, { useState, useCallback, useEffect, useMemo, useRef} from 'react'
import Profile from './UseMemo/Profile';
import axios from 'axios'
import Input from './UseRef/Input';
import InputBis from './UseRef/InputBis';
import FancyInput from './UseImperativeHandle/FancyInput';
// import Count from './UseReducer/Count';

const App = () => {

/////////////////////////////// UseMemo //////////////////////////
  // const [count, setCount] = useState(1)
  // const [profile, setProfile] = useState({})
  // const [dark, setDark] = useState(false)

  // useEffect(() => {
  //   axios
  //   .get(`https://jsonplaceholder.typicode.com/users/${count}`)
  //   .then((res) => {setProfile(res.data)})
  //   .catch((err) =>{alert(err)})
  // }, [count])

  //   const goDark = () => {
  //     setDark(!dark)
  //     if(!dark){
  //       document.body.classList.add('bg-secondary')
  //     }else{
  //       document.body.classList.remove('bg-secondary')
  //     }
  //   }

  //   const classBtnThemed = dark ? 'btn-light' : 'btn-dark'
  //   const textBtnThemed = dark ? 'light' : 'dark'

  //   const isOverTen = useMemo(() => {
  //     console.log('je suis dans isOverTen')
  //     return count > 10
  //   }, [count])

  

///////////////////////////// UseCallBack + React.memo ////////////////////////////
  // const [countOne, setCountOne] = useState({value:40, btnColor: "green", increment: 25, })
  // const [countTwo, setCountTwo] = useState({value:0, btnColor: "green", increment: 20, })

  // const incrementCountOne = useCallback((val) => {
  //   console.log("je susi dans incrementCountone")
  //   countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})
  // },[countOne])

  // const incrementCountTwo = useCallback((val) => {
  //   console.log("je susi dans incrementCountTwo")
  //   countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val})
  // },[countTwo])

  // const incrementCountOne = (val) => {
  //   console.log("je susi dans incrementCountone")
  //   countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})
  // }

  // const incrementCountTwo = (val) => {
  //   console.log("je susi dans incrementCountTwo")
  //   countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val})
  // }


  ////////////////////////UseContext///////////////////////////
    // const [user, setUser] = useState( {
    //   name: "Lisa",
    //   age: 8
    // })
    // const [color, setColor] = useState("red")

  /////////////////////// UseImperativeHandle//////////////////////////
    // const date = new Date()

    // const fancyInputRef = useRef()

    // const focusInput = (val) => {
    //   fancyInputRef.current.focus(val)
    //   fancyInputRef.current.countMax()
// }

  return (
<>

{/* 
//UseImperativeHandle
  <FancyInput ref={fancyInputRef}/>
  <button onClick={() => focusInput(date.getDay())}>Cliquer</button> */}

 {/* UseRef */}
    <Input/>
    <InputBis/>
    <Title/>
    {/* 
  //UseMemo
    <div className="container">
      {isOverTen && <div className="alert alert-danger" role="alert">STOOP</div>}
      <h1 className="text-center">useMemo()</h1>
      <button 
        className="btn btn-info mb-3" 
        onClick={() => setCount(count + 1)}>{`Increment ${count}`}</button>
      <button 
        className={`btn ${classBtnThemed} mb-3 float-right`}
        onClick={() => goDark()}>{`rendre ${textBtnThemed}`}</button>
    </div>
    <Profile profile={profile} count={count}/> */}
  
    {/* 
  //UseCallback
    <Count text="CountOne" count={countOne.value} bgColor={countOne.btnColor}/>
    <Count text="CountTwo" count={countTwo.value} bgColor={countTwo.btnColor}/>
    <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count 1</Button>
    <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>Count 2</Button> */}

  {/* 
//UseReducer
    // <Count/>

  //UseContext
    //  <UserContext.Provider value={user}>
    //    <ColorContext.Provider value={color}>
    //      <Profile/>
    //    </ColorContext.Provider>
    //  </UserContext.Provider> */}
    </>
)
}

export default App;
