import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Subtitle, Title } from "../ui";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.01);
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.card.background};
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.01), 1px 2px 16px rgba(0, 0, 0, 0.12);
  padding: 30px 40px;
  border-radius: 4px;
  max-width: 500px;
  width: 80%;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

const ModalDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 15px 0;
  line-height: 1.4;
`;

const ButtonGroup = styled.div`
  align-self: end;
  display: inline-flex;
  gap: 20px;
  gap: 30px;
`;

const Button = styled.button`
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ type }) => {
    switch (type) {
      case "confirm":
        return ({ theme }) => theme.colors.success;
      case "delete":
        return ({ theme }) => theme.colors.error;
      default:
        return ({ theme }) => theme.colors.gray;
    }
  }};
  color: white;
  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s ease-in-out;
  }
`;

const ConfirmModal = ({ isVisible, type, title, onCancel, onConfirm, ...props }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target === event.currentTarget) {
        onCancel();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onCancel]);

  if (!isVisible) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <div>
          <Title
            style={{
              fontSize: "24px",
              margin: 0,
              color: type === "confirm" ? "#007bff" : "#dc3545",
            }}
          >
            Please Confirm Your Action
          </Title>
          <Subtitle
            style={{ fontSize: "16px", fontWeight: "600", margin: "8px 0" }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <ModalDescription>
            {type === "delete" ? (
              <>
                Are you sure you want to remove this plan you have added?
                <br />
              </>
            ) : (
              <>
                Ensure that the details are correct before proceeding.
                <br />
              </>
            )}
          </ModalDescription>
        </div>

        <ButtonGroup>
          <Button type="button" onClick={onCancel}>
            Cancel
          </Button>
          <Button type={type} onClick={onConfirm}>
            Confirm
          </Button>
        </ButtonGroup>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ConfirmModal;
