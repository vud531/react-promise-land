import React from "react";
import "./App.css";
import { articles } from "./data.js";
import Article from "./components/Article";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {
  Hero,
  Navbar,
  Heading,
  Section,
  Container,
  Columns,
  Card,
  Menu,
  Icon
} from "react-bulma-components";

class App extends React.Component {
  state = {
    articles: articles,
    currentArticle: articles.length - 1
  };

  togglePassage(index) {
    this.setState({ currentArticle: index });
  }

  render = () => {
    const { articles, currentArticle } = this.state;
    return (
      <Hero color="white">
        <Hero.Head renderAs="header">
          <Navbar>
            <Container>
              <Navbar.Brand>
                <Navbar.Item>
                  <Heading>Promised Land</Heading>
                </Navbar.Item>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Hero.Head>

        <Hero.Body size="fullheight">
          <Container>
            <Columns>
              <Columns.Column size="one-quarter">
                <Menu>
                  <Menu.List title="passages">
                    {articles.map((article, index) => (
                      <Menu.List.Item
                        active={index === currentArticle}
                        key={article.id}
                        onClick={() => this.togglePassage(index)}
                      >
                        {article.title.en}
                      </Menu.List.Item>
                    ))}
                  </Menu.List>
                </Menu>
              </Columns.Column>
              <Columns.Column>
                <Article {...articles[currentArticle]} />
              </Columns.Column>
            </Columns>
          </Container>
        </Hero.Body>
        <Hero.Footer />
      </Hero>
    );
  };
}

export default App;
