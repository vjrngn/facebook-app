import React, { Component } from "react";
import moment from "moment";
import {
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  Input,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

class Wall extends Component {
  render() {
    return (
      <div className="posts">
        {this.props.posts.map(post => {
          return (
            <div className="post">
              <Card>
                <CardBody>
                  <CardTitle className="flex">
                    <img
                      className="post-profile-img"
                      src="https://picsum.photos/130/130"
                    />
                    <div className="flex column justify-between ml-2">
                      <a
                        className="text-primary font-weight-bold post-user-name"
                        href={`/users/1`}
                      >
                        {post.user.name}
                      </a>
                      <h6 className="text-muted mt-2 text-xs">
                        {moment(post.createdAt).fromNow()}
                      </h6>
                    </div>
                  </CardTitle>

                  <div className="post-body">
                    <p>{post.content}</p>

                    <span className="text-muted text-sm">
                      {post.likes} likes
                    </span>
                    <hr />
                  </div>

                  <div className="post-actions flex justify-around mb-3">
                    <div className="post-action">
                      <i className="fa fa-thumbs-up mr-1" />
                      <span className="text-gray like-btn">Like</span>
                    </div>
                    <div className="post-action">
                      <i className="fa fa-comment mr-1" />
                      <span className="text-gray">Comment</span>
                    </div>
                    <div className="post-action">
                      <i className=".fa.fa-share.mr-1" />
                      <span className="text-gray">Share</span>
                    </div>
                  </div>

                  <div className="comments">
                    <ListGroup>
                      {post.comments.length > 0
                        ? post.comments.map(comment => {
                            return (
                              <ListGroupItem className="comment">
                                <img
                                  className="img-round comment-avatar mr-3"
                                  src="https://picsum.photos/50/50"
                                />
                                <div className="comment-content">
                                  <p className="content mb-0">
                                    <a
                                      className="text-bold no-underline"
                                      href={`/users/1`}
                                    >
                                      John Doe
                                    </a>
                                    <span className="ml-2">
                                      {comment.content}
                                    </span>
                                  </p>
                                  <div className="actions ml-2 mt-1">
                                    <span className="text-warning mr-2">
                                      {comment.likes && (
                                        <span>{comment.likes} likes</span>
                                      )}
                                    </span>
                                    <a className="text-primary mr-2 no-underline like-btn">
                                      Like
                                    </a>
                                    <span className="text-muted">
                                      {moment(comment.createdAt).fromNow()}
                                    </span>
                                  </div>
                                </div>
                              </ListGroupItem>
                            );
                          })
                        : null}
                    </ListGroup>
                  </div>
                </CardBody>
                <CardFooter className="bg-transparent no-border">
                  <div className="flex">
                    <img
                      className="img-round comment-avatar mr-2"
                      src="https://picsum.photos/40/40"
                    />
                    <Input
                      type="text"
                      required={true}
                      placeholder="Write a comment..."
                      className="input-round bg-facebook-gray mr8 comment-text-box"
                    />
                  </div>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Wall;
