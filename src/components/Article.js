import React from "react";
import {
  Content,
  Hero,
  Button,
  Navbar,
  Heading,
  Section,
  Container,
  Columns,
  Box,
  Card
} from "react-bulma-components";
const Article = props => {
  const { title, sentences } = props;
  return (
    <Card>
      <Card.Header>
        <Card.Header.Title>
          {title.en} - {title.vi}
        </Card.Header.Title>
        <Card.Header.Title />
      </Card.Header>
      <Card.Content>
        <Content>
          {sentences.map((sentence, index) => (
            <div key={index}>
              <p className="vi">{sentence.vi}</p>
              <p className="en">{sentence.en}</p>
              <p />
            </div>
          ))}
        </Content>
      </Card.Content>
    </Card>
  );
};

export default Article;
