import React from 'react'
import { useState } from 'react';

const Colour:React.FC = () => {
  
 const [cardColor, setCardColor] = useState("")
  
     return (
       <div className="flex flex-col gap-6 items-center justify-center h-screen">
         <div className="flex  gap-6 items-center justify-center ">
           <button
             onClick={() => setCardColor("red")}
             className="bg-[red] text-white px-8 py-3 rounded-md cursor-pointer"
           >
             red
           </button>
           <button
             onClick={() => setCardColor("green")}
             className="bg-[green] text-white px-8 py-3 rounded-md cursor-pointer"
           >
             green
           </button>
           <button
             onClick={() => setCardColor("orange")}
             className="bg-[orange] text-white px-8 py-3 rounded-md cursor-pointer"
           >
             orange
           </button>
           <button
             onClick={() => setCardColor("cyan")}
             className="bg-[cyan] text-white px-8 py-3 rounded-md cursor-pointer"
           >
             cyan
           </button>
           <button
             onClick={() => setCardColor("black")}
             className="bg-[#884abb] text-white px-8 py-3 rounded-md cursor-pointer"
           >
             purple
           </button>
         </div>
         <div
           className={`h-[100px] w-[100px] border-2 border-[grey] rounded-md flex items-center justify-center text-[white] text-[30px] font-bold mb-[30px]
         ${cardColor === "red" ? "bg-[red]" : null}
          ${cardColor === "green" ? "bg-[green]" : null}
          ${cardColor === "orange" ? "bg-[orange]" : null}
          ${cardColor === "cyan" ? "bg-[cyan]" : null}
          ${cardColor === "black" ? "bg-[#884abb]" : null}
          `}
         ></div>
       </div>
     );
}

export default Colour


