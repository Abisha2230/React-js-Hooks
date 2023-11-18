// // import React, { useState } from "react";

// // const App = () => {
// //   const value = 0;
// //   const [count, setCount] = useState(value);
// //   const [studentNames, SetStudentNames] = useState(["abi", "joo"]);
// //   const [studentsDetails, SetStudentsDetails] = useState([
// //     {
// //       id: 1,
// //       name: "abi",
// //     },
// //   ]);

// //   function Increment() {
// //     setCount(count + 1);
// //   }
// //   function Decrement() {
// //     setCount(count - 1);
// //   }
// //   {
// //     /* Array Method */
// //   }
// //   function ChangeName() {
// //     SetStudentNames((names) => [...names, "nila", "abisha"]);
// //   }
// //   // Object Method
// //   function StudentChangeDetails() {
// //     SetStudentsDetails(details=>[...details,studentsDetails.length+1])
// //   }
// //   return (
// //     <>
// //       <h1>Hooks Concepts</h1>
// //       <h3>{count}</h3>
// //       <button>Change Count </button>
// //       <button onClick={Increment} style={{ padding: "10px", margin: "10px" }}>
// //         +
// //       </button>
// //       <button onClick={Decrement} style={{ padding: "10px", margin: "10px" }}>
// //         -
// //       </button>
// //       <button onClick={() => setCount(value)}>Reset</button>

// //       {/* Array Method */}
// //       <ul>
// //         <button onClick={ChangeName}>ChangeName</button>
// //         {studentNames.map((a) => (
// //           <li key={a}>{a}</li>
// //         ))}
// //       </ul>

// //       {/* Object Method */}
// //       <ul>

// //         {
// //           studentsDetails.map(e =>
// //           <li key={e.id}>{e.name}</li>
// //         )}
// //         <button onClick={StudentChangeDetails}>Click here</button>
// //       </ul>
// //     </>
// //   );
// // };

// // export default App;

// // ******USE EFFECT*****

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [value, setValue] = useState([]);
//   const [names, setNames] = useState("");

//   // const sample=() => {
//   // //
//   //  setNames("Abinaya");
//   // console.log("log")
//   // };
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((response) => response.json())
//       .then((json) => setValue([json]));
//   }, [names]);
//   return (
//     <div>
//       <h1>welcome to website</h1>
//       {value.map((e) => (
//         <h1 key={e}>{e.title}</h1>
//       ))}
//       {names}
//       <button
//         onClick={() => setNames("Abinaya")}
//         style={{ margin: "10px", padding: "10px" }}
//       >
//         Add Name
//       </button>
//     </div>
//   );
// };

// export default App;

// **********USE CONTEXT/*********/

// import React, { useState } from "react";
// import One from "./One";

// export const StudentContext = React.createContext([]);
// function App() {
//   const [msg, setMsg] = useState("");
//   const [names, SetNames] = useState([]);

//   const MyChange = (e) => {
//     setMsg(e.target.value);
//   };
//   const MySubmit = (e) => {
//     SetNames((e) => [...e, msg]);
//     e.preventDefault();
//   };

//   return (
//     <div>
//       <h1>Use context</h1>
//       <form onSubmit={MySubmit}>
//         <input type="text" value={msg} onChange={MyChange}></input>
//         <br></br>
//         <button type="submit">Click here</button>
//       </form>
//       <StudentContext.Provider value={names}>
//         <One />
//       </StudentContext.Provider>
//     </div>
//   );
// }

// export default App;

// ***********USE REDUCER***************** */

