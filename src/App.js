import { Routes, Route } from "react-router-dom";
import CardList from "./components/CardList/CardList";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";

import Main from "./components/page/Main/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<CardList />} />
        <Route path="add" element={<Form />} />
      </Route>
    </Routes>
  );
}

export default App;
