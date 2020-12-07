import { Component } from "@wordpress/element";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "world",
    };
  }

  render() {
    return <p>Hello {this.state.hello}!</p>;
  }
}
export default App;
