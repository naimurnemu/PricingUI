import { useState } from "react";
import { BillMenu } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setPlanType } from "../controller/Slices/selectedSlice";

function BillSelection() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.data) || {};
  const { plansInfo } = data || { plansInfo: {} };
  const planKeys = Object.keys(plansInfo);
  const [selectedPlanType, setSelectedPlanType] = useState(planKeys[0]);

  const handlePlanTypeChange = (key) => {
    dispatch(setPlanType({ data: key }));
    setSelectedPlanType(key);
  };

  const props = {
    planKeys,
    plansInfo,
    handlePlanTypeChange,
    selectedPlanType,
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <BillMenu {...props} />
    </div>
  );
}

export default BillSelection;
