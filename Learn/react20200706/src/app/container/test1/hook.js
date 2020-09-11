import React,{useState,useEffect,useCallback, useRef} from 'react'

function BasicComp() {
  const [stateA ,setStateA] = useState('A');
  return (
    <div>{stateA}</div>
  )
}

function HookTest() {

    const [age, setAge] = useState(0)
    const [name, setName] = useState('xuan')
    const basicRef = useRef();


    useEffect(()=>{
        console.log('useEffect 1')
        return ()=>{
            console.log('useEffect 2')
        }
    })
    console.warn('age', age)
    const change = useCallback(()=>{
        setAge(age+1);
        setAge(age+2);
        setAge(age+3);
        setName(name+1);
    }, [age, name])

    return (
        <div>
            asasasas
            <BasicComp ref={basicRef} />
            <button onClick={change}>改变</button>
        </div>
    )
}

export default HookTest;