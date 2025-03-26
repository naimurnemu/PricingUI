import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../components";
import { Grid } from "../components/ui";
import { variants } from "../lib/variants";

function BillTable() {
  const data = useSelector((state) => state?.data.data);
  const { plans, features } = data;

  return (
    <Grid>
      {plans.map((data, index) => (
        <Card key={data.id} {...data} variant={variants[index]} />
      ))}
    </Grid>
  );
}

export default BillTable;
