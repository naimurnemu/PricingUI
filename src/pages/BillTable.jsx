import React from "react";
import { Card } from "../components";
import { useSelector } from "react-redux";

function BillTable() {
  const { plans, plansInfo, features } = useSelector((state) => state.data);
  console.log(plans);
  return (
    <div>
      {plans.map(() => (
        <Card />
      ))}
    </div>
  );
}

export default BillTable;
