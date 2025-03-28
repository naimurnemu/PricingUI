import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "../components/ui";
import { variants, popularPlan, chipContent, subTitles } from "../lib/variants";
import { ConfirmModal, MultiCard, UniCard } from "../components";

function BillTable() {
  const {
    sortedPlans,
    data: { features },
    planNames,
  } = useSelector((state) => state?.data) || { data: {} };
  const { selectedType } = useSelector((state) => state?.selected);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [planType, setPlanType] = useState(null);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleConfirm = () => {
    setIsModalVisible(false);
  };

  const handleModalOpen = (plan, modalType, planType) => {
    console.log(plan);
    setCurrentPlan(plan);
    setIsModalVisible(true);
    setModalType(modalType);
    setPlanType(planType);
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
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </Grid>
  );
}

export default BillTable;
