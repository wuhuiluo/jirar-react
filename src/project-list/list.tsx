import React from "react";
import { User } from "project-list/searchPanel";
import { Table } from "antd";
interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organiaztion: string;
}

interface LisProps {
  list: Project[];
  users: User[];
}

export function List({ list, users }: LisProps) {
  return (
    <div>
      <Table
        pagination={false}
        columns={[
          {
            title: "名称",
            dataIndex: "name",
            sorter: (a, b) => {
              return a.name.localeCompare(b.name);
            },
          },
          {
            title: "负责人",
            render: (value, project) => {
              return (
                <span>
                  {users.find((user) => user.id === project.personId)?.name}
                </span>
              );
            },
          },
        ]}
        dataSource={list}
      ></Table>
    </div>
  );
}
