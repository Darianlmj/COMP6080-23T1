import "./App.css";
import Button from "./components/Button/Button";
import GeneralTemplate from "./components/GeneralPageTemplate/GeneralPageTemplate";

const App = () => {
  return (
    <div className="App">
      <GeneralTemplate title="Hello World">
        <Button text="Click Me" />
        <Button text="For Something Crazy" />
      </GeneralTemplate>
    </div>
  );
};

export default App;
