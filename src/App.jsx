import "./App.css";
import AppRouter from "./Routes/AppRouter";
import  { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>

<Toaster/>
  
      <AppRouter />
    </>
  );
}

export default App;
