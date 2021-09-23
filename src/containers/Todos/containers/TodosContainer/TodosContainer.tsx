import React from "react";
//import styles from './index.module.scss'
import { Header, Footer, Filters, Todos } from "@containers/";
import { ITodo } from "../../components/Todo";

interface IComponentProps {
  children?: React.ReactNode;
  todos: ITodo[];
}

const TodosContainer = ({ todos }: IComponentProps) => {
  return (
    <div>
      <Header />
      <Todos todos={todos} />
      <Filters />
      <Footer />
    </div>
  );
};

// class TodosContainer extends React.Component<IComponentProps> {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Todos />
//         <Filters />
//         <Footer />
//       </div>
//     );
//   }
// }

export default TodosContainer;
