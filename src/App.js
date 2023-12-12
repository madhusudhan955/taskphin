import { useSelector } from "react-redux";
import "./App.css";
import PopupComponent from "./components/PopupComponent";
import MainRoutes from "./routes";

function App() {
  const { isLoading } = useSelector((state) => state.globalReduxState);
  return (
    <div>
      <PopupComponent isOpen={isLoading} isLoader={true}>
        <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin w-16 h-16"></div>
      </PopupComponent>
      <MainRoutes />
    </div>
  );
}

export default App;
