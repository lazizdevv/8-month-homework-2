import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { CreateTodo } from "./pages/create-todo";
import { EditTodo } from "./pages/edit-todo";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create-todo" element={<CreateTodo />} />
        <Route path="/edit-todo/:id" element={<EditTodo />} />
      </Routes>
    </>
  );
}

export default App;
