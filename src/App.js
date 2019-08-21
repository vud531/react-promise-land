import React from "react";
import { articles } from "./data.js";
import "./App.css";
import Home from "./components/Home.js";

class App extends React.Component {
  state = {
    articles: articles
  };

  render = () => {
    console.log(this.state.articles);
    return (
      <div className="App">
        <header className="App-header">Promised Land</header>

        <Home />
        <section>
          {this.state.articles.map(article => {
            console.log(article);
            return (
              <article key={article.id}>
                {article.content.map((paragraph, index) => (
                  <div key={index}>
                    <p className="en">{paragraph.en}</p>
                    <p className="vi">{paragraph.vi}</p>
                  </div>
                ))}
              </article>
            );
          })}
        </section>
      </div>
    );
  };
}

export default App;
