import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import Colors from "./components/Colors";
import Color from "./components/Color";
import ColorForm from "./components/ColorForm";

function App() {
  const [colors, setColors] = useState({});

  const addColor = (newColor) => {
    setColors((colors) => ({ ...colors, ...newColor }));
  };

  function renderColor(props) {
    const { color } = props.match.params;
    const value = colors[color];
    return <Color value={value} name={color} />;
  }

  return (
    <div>
      <Switch>
        <Route exact path="/colors/new">
          <ColorForm addColor={addColor} />
        </Route>
        <Route exact path="/colors/:color" render={renderColor}></Route>
        <Route exact path="/colors">
          <Colors colors={colors} />
        </Route>
        <Redirect to="/colors"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
