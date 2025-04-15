import type { TableProps } from "antd";
import { Table } from "antd";
import React from "react";
import { UserListProps, UserTableData } from "../../types/user";

const UserList: React.FC<UserListProps> = ({ users }) => {
  const columns: TableProps<UserTableData>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Contact Number",
      dataIndex: "contactNumber",
      key: "contactNumber",
      render: (contactNumber) => contactNumber || "N/A",
    },
  ];

  const tableData: UserTableData[] = users.map((user) => ({
    ...user,
    key: user.id.toString(),
    tags: user.id % 2 === 0 ? ["active", "user"] : ["inactive"],
  }));

  return (
    <div className="user-list-container">
      
        <Table<UserTableData>
          columns={columns}
          dataSource={tableData}
          pagination={false}
        />
      
    </div>
  );
};

export default UserList;
