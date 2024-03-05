import { Provider } from "react-redux";
import { HomePage } from "./pages";
import store from "./redux/stores/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </>
  );
}

export default App;
