import React, { Fragment, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Dropdown = ({ onChange, options = [], value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  const handleDocClick = event => {
    if (node.current.contains(event.target)) {
      // Inside Toggle click.
      return null;
    }

    // Outside Toggle click.
    setIsOpen(false);
  };

  const handleKeyDown = ({ keyCode }: KeyboardEvent) => {
    // Close dropdown when esc key is pressed.
    if (keyCode === 27) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleDocClick);
      document.addEventListener('keydown', handleKeyDown, false);
    }

    return () => {
      document.removeEventListener('mousedown', handleDocClick);
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [isOpen]);

  const handleToggleClick = () => setIsOpen(!isOpen);
  const handleChange = ({ target }) => {
    onChange(target.value);
    handleToggleClick();
  };

  return (
    <DropdownWrapper ref={node}>
      <DropdownCurrentValue onClick={handleToggleClick}>
        {options[value].name}
      </DropdownCurrentValue>
      <DropdownOptions isOpen={isOpen}>
        {options.map(option => (
          <Fragment key={option.value}>
            <DropdownInput
              checked={value === option.value}
              id={option.name}
              name={option.name}
              onChange={handleChange}
              type="radio"
              value={option.value}
            />
            <DropdownOptionLabel htmlFor={option.name} key={option.value}>
              <DropdownOptionText>{option.name}</DropdownOptionText>
            </DropdownOptionLabel>
          </Fragment>
        ))}
      </DropdownOptions>
      <DropdownChevron />
    </DropdownWrapper>
  );
};

const DropdownChevron = () => (
  <DropdownChevronSvg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 10 10"
  >
    <path
      fill="#231F20"
      fillRule="nonzero"
      d="M6.005 6.999L6.006 7l-.299.3a1 1 0 0 1-1.414 0L.227 3.233a.712.712 0 0 1 1.007-1.007L5 5.994l3.766-3.767a.712.712 0 0 1 1.007 1.007L6.047 6.96a1.016 1.016 0 0 1-.042.039z"
    />
  </DropdownChevronSvg>
);

const DropdownWrapper = styled.div`
  background: ${colors.LIGHT_GREEN_2};
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  transition: background 0.15s ease-out;

  &:hover {
    background: #dee3dc;
  }
`;

const DropdownCurrentValue = styled.div`
  color: #6e8682;
  max-width: 80%;
  overflow: hidden;
  padding: 6px 12px;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;

const DropdownOptions = styled.div`
  background: white;
  border: 1px solid ${colors.LIGHT_GREEN};
  border-radius: 3px;
  left: 0;
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  position: absolute;
  top: 40px;
  transition: all 0.15s ease-out;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 1;
`;

const DropdownInput = styled.input`
  display: none;

  :checked + label {
    background: ${colors.DARK_GREEN};
    color: white;
  }
`;

const DropdownOptionLabel = styled.label`
  border-bottom: 1px solid ${colors.LIGHT_GREEN};
  color: #6e8682;
  cursor: pointer;
  display: block;
  font-size: 14px;
  padding: 6px 12px;
  text-transform: uppercase;
  transition: background 0.15s ease-out;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${colors.DARK_GREEN};
    color: white;
  }
`;

const DropdownOptionText = styled.span``;

const DropdownChevronSvg = styled.svg`
  height: 16px;
  position: absolute;
  pointer-events: none;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
`;
