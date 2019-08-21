import React, { useState } from "react";
import { articles } from "./data.js";
import Article from "./components/Article";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {
  Hero,
  Navbar,
  Heading,
  Container,
  Columns,
  Menu
} from "react-bulma-components";

function App() {
  const [currentArticle, setCurrentArticle] = useState(articles.length - 1);

  return (
    <Hero color="white">
      <Hero.Head renderAs="header">
        <Navbar>
          <Container>
            <Navbar.Brand>
              <Navbar.Item>
                <Heading>English Klub</Heading>
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
                      onClick={() => setCurrentArticle(index)}
                    >
                      {`${index === currentArticle ? "👀" : ""} ${
                        article.title.en
                      } `}
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
}

export default App;
