// import React, { useMemo, useState } from 'react'

// function getRandomNUmber(){
//     let getNum = '';
//     for (let index = 0; index < 10000; index++) {
//         if(index === 9999){
//             getNum = Math.random();
//         }
       
//     }
//     return getNum;
// }


// const Memo = () => {
//     const[render,setRender] = useState('render');
//     const[change,setChange] = useState('')
//     console.log('abi')
// const number  = useMemo(()=>getRandomNUmber(),[change]);
//   return ( 
//     <div>
//         <h1>Use Memo</h1>
//         <h2>{number}</h2>
//         <button onClick={()=>setRender(Math.random())}>Render</button>
//         <hr></hr>
//         <button onClick={()=>setChange(Math.random())}>Change It</button>
//     </div>
//   )
// }

// export default Memo

import React from 'react'

const Memo = () => {
  return (
    <div>
        <h1> Use - Memo</h1>
    </div>
  )
}

export default Memo