import { useReducer } from "react"
interface State {
    count: number;
} 

const reducer = (state: State, action: Action):State => {
    switch(action.type){
        case "increment ":
            return{count: state.count + 1}
        case "decrement":
             return { count: state.count - 1 };
              case "set":
             return { count: action.payload};
        case "reset":
             return { count: 0 };
             default:
                throw new Error("Unknown action type")
    }
}


 type Action = { type: "increment "} | { type: "decrement" } | {type: "reset"} | {type: "set"; payload: number}
   

const Usereducer: React.FC = () => {

     const [state, dispatch] = useReducer(reducer, {count: 0});
 return (
   <div className="flex justify-between gap-5 items-center flex-col ">
     <button
       onClick={() => dispatch({ type: "increment " })}
       className="px-9 py-3 bg-green-700 flex rounded-2xl text-white "
     >
       Increment
     </button>
     <span>{state.count}</span>
     <button
       onClick={() => dispatch({ type: "decrement" })}
       className="px-9 py-3 bg-green-700 flex rounded-2xl text-white "
     >
       Decrement
     </button>
     <button
       onClick={() => dispatch({ type: "reset" })}
       className="px-9 py-3 bg-amber-900 flex rounded-2xl text-white "
     >
       Reset
     </button>
     <button
       onClick={() => dispatch({ type: "set", payload: 10 })}
       className="px-9 py-3 bg-amber-900 flex rounded-2xl text-white "
     >
       Set
     </button>
   </div>
 );
}

export default Usereducer