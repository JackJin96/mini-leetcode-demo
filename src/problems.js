import React, { Component } from 'react';
import { Table, Container} from 'react-bootstrap';
import "./problems.css";

export default class Problems extends Component {

  render() {
    return (
        <Container className="problemsTableContainer">
          <Table bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Problem</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Two Sum</td>
                <td>Easy</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Three Sum</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Palindrome String</td>
                <td>Hard</td>
              </tr>
            </tbody>
          </Table>
        </Container>
    );
  }

}