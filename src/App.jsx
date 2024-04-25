import { Input, Table } from "antd";
import { useEffect, useState } from "react";
import { COLUMN } from "./data";
const { Search } = Input;

function App() {
  const columns = COLUMN;

  const [dataSource, setDataSource] = useState([]);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts?limit=100");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setDataSource(jsonData.posts);
        setFilteredDataSource(jsonData.posts);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleSearch = value => {
    setSearchText(value);
    const filteredData = dataSource.filter(item =>
      item.body.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDataSource(filteredData);
  };

  return (
    <div>
      <Search
        placeholder="Search posts"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
        alt={searchText}
      />
      <Table dataSource={filteredDataSource} columns={columns} />
    </div>
  );
}

export default App;
