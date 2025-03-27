import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "../components/ui";
import { variants } from "../lib/variants";
import { MultiCard, UniCard } from "../components";

function BillTable() {
  const { sortedPlans, data, planNames } = useSelector((state) => state?.data);
  const { plans, features } = data || { plans: [], features: [] };

  return (
    <Grid>
      {/* {plans.map((data, index) => (
        <UniCard key={data.id} {...data} variant={variants[index]} />
      ))} */}

      {planNames.map((name, index) => {
        const plans = sortedPlans[name] || [];
        return !Array.isArray(plans) ? null : plans.length > 1 ? (
          
          <MultiCard
            key={name}
            plans={plans}
            variant={variants[index]}
          />
        ) : (
          <UniCard
            key={name}
            {...plans[0]}
            variant={variants[index]}
          />
        );
      })}
    </Grid>
  );
}

export default BillTable;

