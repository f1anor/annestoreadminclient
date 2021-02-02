import React from "react";
import List from "./List/List";
import { Params } from "./Params/Params";

const Admins = ({ admins, root, isDisabled }) => {
  return (
    <div className="pt-5">
      <div>
        <Params root={root} isDisabled={isDisabled} />
      </div>
      <div>
        <List admins={admins} />
      </div>
    </div>
  );
};

export default Admins;
