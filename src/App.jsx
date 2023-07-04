import TodoHome from "./TODO/todoHome";
import EditTodo from "./TODO/editTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<TodoHome />} />
        <Route path="/edit/:id" element={<EditTodo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
