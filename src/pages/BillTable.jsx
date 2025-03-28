import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "../components/ui";
import { variants, popularPlan, chipContent, subTitles } from "../lib/variants";
import { MultiCard, UniCard } from "../components";

function BillTable() {
  const { sortedPlans, data, planNames } = useSelector((state) => state?.data);
  const { selectedType } = useSelector((state) => state?.selected);
  const { features } = data || { plans: [], features: [] };

  return (
    <Grid>
      {planNames.map((name, index) => {
        const props = {
          plans: sortedPlans[name] || [],
          variant: variants[index],
          featureIndex: index > 0 ? 1 : 0,
          name,
          selectedType,
          index,
          features,
          popularPlan,
          chipContent,
          subTitles,
        };
        console.log(props);
        return !Array.isArray(props?.plans) ? null : props?.plans?.length >
          1 ? (
          <MultiCard key={name} {...props} />
        ) : (
          <UniCard key={name} {...props} />
        );
      })}
    </Grid>
  );
}

export default BillTable;
