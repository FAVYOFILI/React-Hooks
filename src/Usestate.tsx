import React, {useState} from "react";

const Usestate = () => {
    const [name, setName] = useState<string>("Favour")

    const handleDecrease = () => {
        setName("Rosemary")
    }

    const handleIncrease = () => {
        setName("Favy")
    }
// {For constant state}
    // // if (name === "Favour" ) {
    // //     handleDecrease = () => {
    // //         setName ("Favour");
    // //     } 
    // }
// {To rememeber previous State do this icrease by 5times}
    //  const handleIncrease = () => {
    //    setName((count) => count +1);
    //    setName((count) => count +1);
    //    setName((count) => count +1);
    //    setName((count) => count +1);
    //    setName((count) => count +1);
    //  };

    // or 
    //  const handleDecrease = () => {
    //    setName((prev) => (prev > 0 ? prev - 1 : 0));
    //  }


    return (
      <div className="flex">
        <button onClick={handleDecrease} className="bg-red-500 font-bold py-2 px-3 rounded-md cursor-pointer justify-center items-center">
          Decrease
        </button>
        <h1 className="text-2xl font-bold">{name}</h1>
        <button onClick={handleIncrease} className="bg-green-500 font-bold py-2 px-3 rounded-md cursor-pointer justify-center items-center">
          Increase{" "}
        </button>
      </div>
    );
}

export default Usestate