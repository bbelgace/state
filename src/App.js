import React from "react";
import img from "./image.jpg";
import Person from "./Person";

class App extends React.Component {
  state = {
    isVisible: false,
  };
  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  state = {
    Person: {
      fullNAME: "sabrine ben belgacem ",
      bio: "obtenu un diplome supérieur en développemnt systèms informatiques de ISET Gafsa",
      profession: "Developpeuse",
    },
    show: false,
  };

  render() {
    return (
      <div className="App">
        <h1> first state</h1>
        <button onClick={this.toggleVisibility} className="visibility-btn">
          {this.state.isVisible ? "Hide Person" : "Show Person"}
        </button>
        {this.state.isVisible && (
          <Person Person={this.state.Person}>
            <img src={img} alt="Moi" />
          </Person>
        )}
      </div>
    );
  }
}

export default App;
