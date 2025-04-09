import React from "react";

const TreeView = () => {
  /*
    home
    profile -
        details -
            location -
                city 
    settings -
        account
        security -
            login
            register
                data
    */
  return (
    <div>
      <TreeItem text="profile">
        <TreeItem text="location">
          <p>city</p>
        </TreeItem>
      </TreeItem>
    </div>
  );
};

export default TreeView;

function TreeItem(props: { text: string; children?: React.ReactNode }) {
  const [viewChildren, setViewChildren] = React.useState(false);
  return (
    <div className="select-none">
      <p onClick={() => setViewChildren((prev) => !prev)}>{props.text}</p>
      {viewChildren && <p className="ml-4">{props.children}</p>}
    </div>
  );
}
