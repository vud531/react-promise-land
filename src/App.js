import React from "react";
import { articles } from "./data.js";
// import "./App.css";
import Home from "./components/Home.js";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {
  Hero,
  Button,
  Navbar,
  Heading,
  Section,
  Container,
  Columns
} from "react-bulma-components";

class App extends React.Component {
  state = {
    articles: articles
  };

  render = () => {
    console.log(this.state.articles);
    return (
      <Hero color="light">
        <Navbar>
          <Container>
            <Navbar.Brand>
              <Navbar.Item>
                <Heading className="is-success">Promised Land</Heading>
              </Navbar.Item>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Section>
          <Container>
            <Columns>
              <Columns.Column>Hello</Columns.Column>

              <Columns.Column size="one-quarter">Hello</Columns.Column>
            </Columns>
          </Container>
        </Section>
        {/* <header className="App-header"></header>

        <Home />
        <section> */}
        {/* {this.state.articles.map(article => {
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
        </section> */}
        {/* <Button>Hello</Button> */}
      </Hero>
    );
  };
}

export default App;
