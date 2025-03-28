import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { ArrowDownIcon, InfoIcon } from "../../assets/icons";
import Tooltip from "./Tooltip";
import { css } from "@emotion/react";

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

const SelectBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 9px 15px;
  border-radius: 5px;
  color: ${({ theme, variant }) => theme.colors.primary[variant]};
  border: 1px solid ${({ theme, variant }) => theme.colors.primary[variant]};
  cursor: pointer;
  > * {
    color: inherit;
    font-weight: inherit;
  }
`;

const SelectItem = styled.div`
  width: 100%;
  font-size: 12.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  > * {
    color: inherit;
    font-weight: inherit;
  }
`;

const IconWrapper = styled.span`
  margin-bottom: -5px;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(-5px) rotate(180deg)" : "none"};
`;

const SelectQuantity = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;

  &:hover .quantity {
    opacity: 0;
  }

  &:hover .minus {
    opacity: 1;
  }
`;

const QuantityText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  opacity: 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.2s ease;
  position: absolute;
  font-size: 14px;
`;

const Minus = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.2s ease;
  font-size: 14px;
  font-weight: 600;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: 0;
  position: absolute;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 85%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: 5px;
  box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.01), 1px 1px 16px rgba(0, 0, 0, 0.12);
  z-index: 1;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.2s ease-in, visibility 0.1s linear 0.01s;
`;

const commonStyle = (props) => css`
  background: ${props.theme.colors.secondary[props.variant]};
  color: ${props.theme.colors.primary[props.variant]};
`;

const Option = styled.div`
  margin: 0;
  padding: 10px 15px;
  width: 100%;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.card.border};
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

  ${({ selected, theme, variant }) =>
    selected ? commonStyle({ theme, variant }) : null};

  &:hover {
    ${({ theme, variant }) => commonStyle({ theme, variant })};
  }
`;

const OptionText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  color: inherit;
  > * {
    color: inherit;
    font-weight: inherit;
  }
`;

const Select = ({
  selected,
  handleSelect = () => {},
  options = [],
  quantity,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    handleSelect(option);
    setIsOpen(false);
  };

  return (
    <SelectWrapper ref={dropdownRef}>
      <SelectBox {...props} onClick={() => setIsOpen(!isOpen)}>
        <SelectItem
          dangerouslySetInnerHTML={{ __html: selected?.title }}
          {...props}
        />
        <IconWrapper isOpen={isOpen}>
          <ArrowDownIcon variant={props.variant} size={20} />
        </IconWrapper>
      </SelectBox>
      {quantity ? (
        <SelectQuantity>
          <QuantityText className="quantity">{quantity}</QuantityText>
          <Minus
            onClick={() => props.handleModalOpen()}
            {...props}
            className="minus"
          >
            -
          </Minus>
        </SelectQuantity>
      ) : (
        <Tooltip
          style={{ marginBottom: "-2px" }}
          description={selected?.text}
          isIcon={true}
        >
          <InfoIcon {...props} varinant={props.variant} />
        </Tooltip>
      )}
      <DropdownList isOpen={isOpen}>
        {options.map((option) => (
          <Option
            key={option.title}
            onClick={() => handleOptionClick(option)}
            selected={selected?.title === option.title}
            {...props}
          >
            <OptionText
              variant={props.variant}
              dangerouslySetInnerHTML={{ __html: option.title }}
            />
          </Option>
        ))}
      </DropdownList>
    </SelectWrapper>
  );
};

export default Select;
