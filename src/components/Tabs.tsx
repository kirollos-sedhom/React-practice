import React, { useState } from "react";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const tabs = [
    { id: 1, title: "Tab 1", content: "tab1 content" },
    { id: 2, title: "Tab 2", content: "tab2 content" },
    { id: 3, title: "Tab 3", content: "tab3 content" },
  ];
  return (
    <div>
      <nav className="flex gap-3 justify-center p-2" role="tablist">
        <button
          role="tab"
          aria-selected={selectedTab === 1}
          className={`px-4 py-2 select-none ${
            selectedTab === 1 && "border-2 border-black/50"
          } bg-green-300`}
          onClick={() => setSelectedTab(1)}
        >
          tab1
        </button>
        <button
          role="tab"
          aria-selected={selectedTab === 2}
          className={`px-4 py-2 select-none ${
            selectedTab === 2 && "border-2 border-black/50"
          } bg-blue-300`}
          onClick={() => setSelectedTab(2)}
        >
          tab2
        </button>
        <button
          role="tab"
          aria-selected={selectedTab === 3}
          className={`px-4 py-2 select-none ${
            selectedTab === 3 && "border-2 border-black/50"
          } bg-red-300`}
          onClick={() => setSelectedTab(3)}
        >
          tab3
        </button>
      </nav>

      {<div role="tabpanel">{tabs[selectedTab - 1].content}</div>}
    </div>
  );
};

export default Tabs;
