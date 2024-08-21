import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";



const initialstate = {
      counter: 0,
}

  function reducerFunction(previousState, action){
    
    if(action.type ==="increment"){
        return {...previousState, counter: previousState.counter + 1};
    }else if(action.type === "decrement"){
     return {...previousState, counter: previousState.counter - 1};
   
    }
  }

function Counter(){

    const [state , dispatch] = useReducer(reducerFunction, initialstate);
      
    function increment(){
        dispatch({type: "increment"});
    }
   
    function decrement(){
        dispatch({type: "decrement"});
    }

    return(
    
        <div className="Counter">
            <h1>{state.counter}</h1>
            <h1>Counter</h1>
            <button className=" counter_button" type="submit" onClick={increment}>Increment</button>
            <button  className="counter_button" type="submit" onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;