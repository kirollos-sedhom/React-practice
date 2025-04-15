import React, { useState } from "react";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div>
      <nav className="flex gap-3 justify-center p-2">
        <p className="px-4 py-2 bg-green-300" onClick={() => setSelectedTab(1)}>
          tab1
        </p>
        <p className="px-4 py-2 bg-blue-300" onClick={() => setSelectedTab(2)}>
          tab2
        </p>
        <p className="px-4 py-2 bg-red-300" onClick={() => setSelectedTab(3)}>
          tab3
        </p>
      </nav>
      {selectedTab === 1 && <div className="tab1">tab1 content</div>}
      {selectedTab === 2 && <div className="tab1">tab2 content</div>}
      {selectedTab === 3 && <div className="tab1">tab3 content</div>}
    </div>
  );
};

export default Tabs;
