import React from "react";
import { FaChevronRight } from "react-icons/fa";

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
    <div className="w-max h-screen bg-blue-500 text-white text-xl p-2">
      <TreeItem text="profile">
        <TreeItem text="details">
          <TreeItem text="location">
            <TreeItem text="city" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
      <TreeItem text="settings">
        <TreeItem text="account" />
        <TreeItem text="security">
          <TreeItem text="login" />
          <TreeItem text="register">
            <TreeItem text="data" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </div>
  );
};

export default TreeView;

function TreeItem(props: { text: string; children?: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="select-none">
      <p
        className="flex items-center"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        {props.text}{" "}
        {props.children && (
          <FaChevronRight
            className={`mx-1 ${
              isOpen && "rotate-90"
            }  transition duration-300 ease-in-out`}
            size={15}
          />
        )}
      </p>
      {isOpen && <p className="ml-4">{props.children}</p>}
    </div>
  );
}
