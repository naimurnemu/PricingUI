import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { ArrowDownIcon } from "../../assets/icons";

const SelectWrapper = styled.div`
  position: relative;
`;

const SelectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 8.5px 10px;
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

const DropdownList = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  margin-top: 4px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.2s ease-in, visibility 0.1s linear 0.01s;
`;

const Option = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  border: none;
  background-color: transparent;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const OptionText = styled.div`
  margin: 0;
  padding: 6px 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Select = ({
  selected,
  handleSelect = () => {},
  options = [],
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

  const handleOptionClick = (event, plan) => {
    console.log(plan);
    // handleSelect(plan);
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
      <DropdownList isOpen={isOpen}>
        {options.map((option) => {
          option;
          return (
            <Option
              key={option.title}
              onClick={(event, option) => handleOptionClick(option)}
              selected={selected?.title === option.title}
              {...props}
            >
              <OptionText dangerouslySetInnerHTML={{ __html: option.title }} />
            </Option>
          );
        })}
      </DropdownList>
    </SelectWrapper>
  );
};

export default Select;
