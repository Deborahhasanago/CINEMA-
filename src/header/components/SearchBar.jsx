import React from "react";
import { Input, Space } from "antd";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

function SearchBar() {
  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder="Search Movie"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
      </Space>
    </div>
  );
}

export default SearchBar;
