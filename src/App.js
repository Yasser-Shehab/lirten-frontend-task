import { Routes, Route } from "react-router-dom";
import CardList from "./components/CardList/CardList";
import CreateForm from "./components/CreateForm/CreateForm";
import Nav from "./components/Nav/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<CardList />} />
          <Route path="add" element={<CreateForm />} />
        </Route>
      </Routes>
      <ToastContainer className="toaster-style" />
    </>
  );
}

export default App;
