import Wall from "./components/Wall";
import React, { Component } from "react";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  Button,
  Form,
  Input,
} from "reactstrap";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res.posts,
        });
      });
  }

  render() {
    return (
      <Container className="wall">
        <Card>
          <CardBody>
            <CardTitle className="flex">
              <Form>
                <Input type="textarea" placeholder="What's on your mind ?" />
              </Form>
            </CardTitle>
          </CardBody>
          <CardFooter className="bg-transparent no-border">
            <hr />
            <Button color="primary" size="sm">
              Post
            </Button>
          </CardFooter>
        </Card>
        <Wall posts={this.state.posts} />
      </Container>
    );
  }
}

export default App;
