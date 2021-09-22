import React, {useState} from "react";
import { TodosContainer } from "@containers/";
import {ITodo} from "./containers/Todos/components/Todo";



const App = () => {

  const [todos] = useState<ITodo[]>([{
    id: 1,
    text: "Test 001",
    createAt: new Date(),
    completed: false,
  },
    {
      id: 2,
      text: "Test 002",
      createAt: new Date(),
      completed: true,
    }

  ])

  return <TodosContainer todos={todos} />;

}




export default App;
