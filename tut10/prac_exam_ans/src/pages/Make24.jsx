import React from "react";
import Sidebar from "../components/Sidebar";

const Make24 = () => {
  const [numbers, setNumbers] = React.useState([0, 0, 0, 0]);

  const listener = (event) => {
    if (event.key === "Enter") {
      if (numbers[0] + numbers[1] + numbers[2] + numbers[3] === 24) {
        alert("You win!");
      } else {
        alert("You lose!");
      }
    }
  };

  const setter = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  return (
    <main>
      <div className="pageLayout">
        <input
          type="number"
          onChange={(e) => setter(0, Number(e.target.value))}
          onKeyDown={listener}
        />
        <input
          type="number"
          onChange={(e) => setter(1, Number(e.target.value))}
          onKeyDown={listener}
        />
        <input
          type="number"
          onChange={(e) => setter(2, Number(e.target.value))}
          onKeyDown={listener}
        />
        <input
          type="number"
          onChange={(e) => setter(3, Number(e.target.value))}
          onKeyDown={listener}
        />
      </div>
      <Sidebar />
    </main>
  );
};

export default Make24;

// BETTER WAY TO DO THIS.

// import React from "react";
// import Sidebar from "../components/Sidebar";

// const Make24 = () => {
//   const [numbers, setNumbers] = React.useState([0, 0, 0, 0]);

//   const totalCount = React.useRef(0);
//   const listener = (event) => {
//     if (event.key === "Enter") {
//       if (totalCount.current === 24) {
//         alert("You win!");
//       } else {
//         alert("You lose!");
//       }
//     }
//   };

//   const setter = (index, value) => {
//     setNumbers((prevArray) => {
//       prevArray[index] = value;
//       totalCount.current = prevArray.reduce((a, b) => a + b, 0);
//       return [...prevArray];
//     });
//   }

//   React.useEffect(() => {
//     window.addEventListener("keydown", listener);
//   }, [])

//   return (
//     <main>
//       <div className="pageLayout">
//         <input
//           type="number"
//           value={numbers[0]}
//           onChange={(e) => setter(0, Number(e.target.value))}
//         />
//         <input
//           type="number"
//           value={numbers[1]}
//           onChange={(e) => setter(1, Number(e.target.value))}
//         />
//         <input
//           type="number"
//           value={numbers[2]}
//           onChange={(e) => setter(2, Number(e.target.value))}
//         />
//         <input
//           type="number"
//           value={numbers[3]}
//           onChange={(e) => setter(3, Number(e.target.value))}
//         />
//       </div>
//       <Sidebar />
//     </main>
//   );
// };

// export default Make24;
