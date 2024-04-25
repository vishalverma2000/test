import { Tag } from "antd";

export const COLUMN = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
    filters: [
      {
        text: "history",
        value: "history",
      },
      {
        text: "american",
        value: "american",
      },
      {
        text: "crime",
        value: "crime",
      },
      {
        text: "french",
        value: "french",
      },
      {
        text: "magical",
        value: "magical",
      },
      {
        text: "love",
        value: "love",
      },
      {
        text: "classic",
        value: "classic",
      },
      {
        text: "english",
        value: "english",
      },
      {
        text: "fiction",
        value: "fiction",
      },
    ],
    onFilter: (value, record) => record.tags.includes(value),
    filterMultiple: true,
  },
  {
    title: "Body",
    dataIndex: "body",
  },
];
