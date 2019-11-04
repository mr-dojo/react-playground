import React, { Component } from 'react';
import Messages from './Messages'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <p>
        Lets test out the paragraph tag
        </p>
        <div>
          <Messages name="Messages" unread={0}/>
          <Messages name="Notifications" unread={10}/>
        </div>
      </div>
    );
  }
}

export default App;
