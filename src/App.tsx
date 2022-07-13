import './App.css';
import ProjectTimeEntry from './component/ProjectTimeEntry';
// import Search from './component/Search';
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={store}>

        <ProjectTimeEntry/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
