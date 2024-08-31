
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Todo from './components/Todo';
import TodoModal from './components/TodoModal';
import StudentApplicationForm from './components/StudentApplicationForm';
import Login from './components/Login';
import Test from './components/Test';
import Test2 from './components/Test2';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define the Home route */}
        <Route path="/" element={<Home />} />

        {/* Define the Todo route */}
        <Route path="/todo" element={<Todo />} />
        <Route path="/TodoModal" element={<TodoModal />} />
        <Route path="/apply" element={<StudentApplicationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Test2" element={<Test2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
