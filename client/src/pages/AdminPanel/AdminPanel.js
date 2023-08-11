import React, { useState } from "react";
import AllModules from "../../components/AllModules/AllModules";
import inventory from "../../data/inventory";
import Button from "../../components/Button/Button";
import AddModule from "../../components/AddModule/AddModule";
const AdminPanel = () => {
  const [visible, setVisible] = useState(false);
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <h2 className="text-center text-2xl mb-10 mt-3">Administration pannel</h2>
      <div className="flex justify-center mb-10">
        <Button
          name={"Add new module"}
          color={"primary"}
          callback={() => {
            setVisible(true);
            <AddModule isOpen={visible} onClose={closeHandler} />;
          }}
        />
      </div>
      <h3 className="text-xl ml-6">Module list's</h3>

      <AllModules itemData={inventory} />
      {visible && <AddModule isOpen={visible} onClose={closeHandler} />}
    </div>
  );
};
export default AdminPanel;
