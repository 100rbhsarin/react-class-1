//subscribe to Thapa Technical Youtube Channel - https://www.youtube.com/thapatechnical

// import { ReactMemo } from "./hooks/Memo/ReactMemo";
import { Counter } from "./hooks/useState";
import {CounterChallenge} from "./hooks/useState/Challenge";
import { Todo } from "./projects/Todo/Todo";
import{ToggleSwitch} from "./projects/ToggleSwitch/ToggleSwtich"

export const App = () => {
  return (
    <>
     {/* // <ReactMemo /> */}

     
     <ToggleSwitch/>
     <Todo/>
     < Counter/>
     <CounterChallenge/>

      
    </>
  );
};
