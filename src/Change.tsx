import { useReducer } from "react";

interface State {
  colour: string;
}


const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

type Action =
  | { type: "next" }
  | { type: "previous" }
  | { type: "reset" }
  | { type: "set"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "next":
      const nextIndex = (colors.indexOf(state.colour) + 1)
      return { colour: colors[nextIndex] };
    case "previous":
      const prevIndex =
        (colors.indexOf(state.colour) - 1 + colors.length)
      return { colour: colors[prevIndex] };
    case "set":
      return { colour: action.payload };
    case "reset":
      return { colour: colors[0] };
    default:
      throw new Error("Unknown action type");
  }
};

const ColorChanger: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { colour: colors[0] });

  return (
    <div className="flex justify-between gap-5 items-center flex-col p-8">
      <div
        className="w-32 h-32 rounded-full border border-gray-300"
        style={{ backgroundColor: state.colour }}
      ></div>

      <span className="text-lg font-semibold">{state.colour}</span>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: "previous" })}
          className="px-6 py-2 bg-blue-600 rounded-lg text-white"
        >
          Previous Color
        </button>
        <button
          onClick={() => dispatch({ type: "next" })}
          className="px-6 py-2 bg-blue-600 rounded-lg text-white"
        >
          Next Color
        </button>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-6 py-2 bg-red-600 rounded-lg text-white"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: "set", payload: "purple" })}
          className="px-6 py-2 bg-purple-600 rounded-lg text-white"
        >
          Set Purple
        </button>
      </div>
    </div>
  );
};

export default ColorChanger;
