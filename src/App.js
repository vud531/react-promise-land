import React from 'react';
import { paragraphs } from './data.js'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    passages: paragraphs
  }

  render = () => (
    <div className="App">
      <header className="App-header">
        Promised Land
      </header>
      <section>
      {
        this.state.passages.map(passage => (
          <article>
          {
            passage.map(paragraph => (
              <div>
                <p className='en'>{paragraph.en}</p>
                <p className='vi'>{paragraph.vi}</p>
              </div>
            ))
          }
          </article>
        ))
      }
      </section>

      <article>
        <p></p>
      </article>

    </div>
  );
}

export default App;
