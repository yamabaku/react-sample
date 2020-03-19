import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test from './screens/test';
import Field from './screens/field';

class App extends React.Component {
  
  render() {
    return (
      <div className="container">
        <Test />
        <Field />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));