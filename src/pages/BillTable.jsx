import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../components";
import { Grid } from "../components/ui";

function BillTable() {
  const { plans, features } = useSelector((state) => state?.data?.data);
 
  return (
    <Grid>
      {plans.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </Grid>
  );
}

export default BillTable;