import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "../components/ui";
import { variants, popularPlan, chipContent, subTitles } from "../lib/variants";
import { ConfirmModal, MultiCard, UniCard } from "../components";
import { addPlan, removePlan } from "../controller/Slices/selectedSlice";

function BillTable() {
  const {
    sortedPlans,
    data: { features },
    planNames,
  } = useSelector((state) => state?.data) || { data: {} };
  const { selectedType, selectedPlans } = useSelector((state) => state?.selected);
  const dispatch = useDispatch();
  const [currentPlan, setCurrentPlan] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [planType, setPlanType] = useState(null);

  const handleAddPlan = (plan) => {
    dispatch(addPlan(plan));
  };

  const handleDeletePlan = (plan) => {
    dispatch(removePlan(plan));
  };

  const handleModalOpen = (plan, modalType, planType) => {
    setCurrentPlan(plan);
    setIsModalVisible(true);
    setModalType(modalType);
    setPlanType(planType);
  };

  const handleConfirm = () => {
    setIsModalVisible(false);
    console.log(currentPlan);
    modalType === "confirm" ? handleAddPlan(currentPlan) : handleDeletePlan(currentPlan);
  };


  return (
    <Grid>
      {planNames.map((name, index) => {
        const props = {
          plans: sortedPlans[name] || [],
          variant: variants[index],
          featureIndex: index > 0 ? 1 : 0,
          name,
          selectedType,
          selectedPlans,
          index,
          features,
          popularPlan,
          chipContent,
          subTitles,
          handleModalOpen,
        };
        return (
          <div key={name}>
            {!Array.isArray(props?.plans) ? null : props?.plans?.length > 1 ? (
              <MultiCard {...props} />
            ) : (
              <UniCard {...props} />
            )}
          </div>
        );
      })}
      <ConfirmModal
        isVisible={isModalVisible}
        type={modalType}
        title={planType + ": " + currentPlan?.title}
        onCancel={() => setIsModalVisible(false)}
        onConfirm={handleConfirm}

      />
    </Grid>
  );
}

export default BillTable;
