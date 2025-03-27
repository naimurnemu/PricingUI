import  { useState } from "react";
import { BillMenu } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setPlanType } from "../controller/Slices/selectPlansSlice";

function BillSelection() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.data.data);
  const { plansInfo } = data || {plansInfo: {}};
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
    <div>
      <BillMenu {...props} />
    </div>
  );
}

export default BillSelection;
