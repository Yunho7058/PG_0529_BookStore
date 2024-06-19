import {memo} from 'react'

const Child = memo(funtion(){
  console.log('실행')
  return <div>자식</div>
})

function parents(){ 

  let [count, setCount] = useState(0)

  return (
    <Child  />
    <button onClick={()=>{ setCount(count+1) }}> + </button>
  )
}