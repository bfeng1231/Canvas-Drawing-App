import React from 'react';
import './css/App.css';
import Canvas from './components/Canvas';
import Gallery from './components/Gallery';
import { connect } from 'react-redux';
import { getToken } from './actions/authActions'

class App extends React.Component {

  componentDidMount() {
    console.log('Mounted, trying to get token')
    this.props.getToken();
  }

  render() {
    return (
      <div className="App">
        <Canvas />
        <Gallery />
      </div>
    );
  }
}

export default connect ('', { getToken })(App);