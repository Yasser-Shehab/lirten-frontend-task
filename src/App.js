import { Routes, Route } from "react-router-dom";
import CardList from "./components/CardList/CardList";
import CreateForm from "./components/CreateForm/CreateForm";
import Nav from "./components/Nav/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<CardList />} />
            <Route path="add/:id" element={<CreateForm />} />
          </Route>
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>

      <ToastContainer className="toaster-style" />
    </>
  );
}

export default App;
