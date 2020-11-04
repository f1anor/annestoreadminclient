import React from "react";
import { Table } from "react-bootstrap";
import CustomPagination from "Common/CustomPagination/CustomPagination";

const SessionsTable = ({ sessions, totalCount }) => {
  return (
    <div className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Время</th>
            <th>IP адресс</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session._id}>
              <td>
                {new Date(session.date).toLocaleString("ru", {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "numeric",
                  month: "numeric",
                  year: "2-digit",
                })}
              </td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CustomPagination count={10} totalCount={totalCount} link="/dashboard/" />
    </div>
  );
};

export default SessionsTable;
