import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      {/* This button to show a loading state/word */}
      <Button title='Click Me' />
      {/* This button to rediret me to a different website */}
      <Button title='For Something Awesome' url='https://google.com'/>
    </div>
  );
}

export default App;
