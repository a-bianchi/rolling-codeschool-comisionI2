import React from "react";
import { Table } from "react-bootstrap";

const TableUsuarios = (props) => {
  const { posts } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>User</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((elementos, index) => {
          return (
            <tr key={index}>
              <td key={`${index}-id`}>{elementos.id} </td>
              <td key={`${index}-user`}>{elementos.userId} </td>
              <td key={`${index}-title`}>{elementos.title} </td>
            </tr>
          );
        })}{" "}
      </tbody>
    </Table>
  );
};

export default TableUsuarios;
