import React from "react";
import { Content, Card } from "react-bulma-components";
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
              <p className="vi">
                <span role="img" aria-label="sentence">
                  ✍️
                </span>
                {sentence.vi}
              </p>
              <p className="en">
                <span role="img" aria-label="sentence">
                  ✍️
                </span>{" "}
                {sentence.en}
              </p>
              <p style={{ textAlign: "center" }}>
                <span role="img" aria-label="check">
                  ✔️
                </span>
              </p>
              <p />
            </div>
          ))}
        </Content>
      </Card.Content>
    </Card>
  );
};

export default Article;
