import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { easing } from '../../styles/easing';

/**
 * Dropdown
 *
 * @param {function} onChange Callback that fires when an option is selected.
 * @param {array} options List of { name: string, value: string | number } objects.
 * @param {number} selected The index of the currently selected option.
 */
export const Dropdown = ({ onChange, options = [], selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  const handleDocClick = ({ target }) => {
    if (node.current.contains(target)) {
      // Inside Toggle click, keep dropdown open.
      return null;
    }

    // Closes dropdown when you click outside of it.
    setIsOpen(false);
  };

  const handleKeyDown = ({ keyCode }) => {
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

    // Close dropdown when an option is selected.
    handleToggleClick();
  };

  return (
    <DropdownWrapper ref={node}>
      <DropdownCurrentValue
        aria-expanded={isOpen}
        data-testid="dropdown-current-value"
        onClick={handleToggleClick}
      >
        {options[selected].name}
      </DropdownCurrentValue>
      <DropdownOptions isOpen={isOpen}>
        {options.map(option => (
          <li key={option.value}>
            <DropdownInput
              checked={selected === option.value}
              id={option.name}
              name={option.name}
              onChange={handleChange}
              type="radio"
              value={option.value}
            />
            <DropdownOptionLabel htmlFor={option.name} key={option.value}>
              <DropdownOptionText data-testid="dropdown-option-name">
                {option.name}
              </DropdownOptionText>
            </DropdownOptionLabel>
          </li>
        ))}
      </DropdownOptions>
      <DropdownChevron isOpen={isOpen} />
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  selected: PropTypes.number.isRequired,
};

const DropdownChevron = ({ isOpen }) => (
  <DropdownChevronSvg
    isOpen={isOpen}
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
  transition: background 0.3s ${easing.OUT};

  &:hover {
    background: #dee3dc;
  }
`;

const DropdownCurrentValue = styled.button`
  background: none;
  border: none;
  color: #6e8682;
  max-width: 80%;
  overflow: hidden;
  padding: 10px 12px;
  text-align: left;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
  width: 100%;
`;

const DropdownOptions = styled.ul`
  background: white;
  border: 1px solid ${colors.LIGHT_GREEN};
  border-radius: 3px;
  left: 0;
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  position: absolute;
  top: 36px;
  transition: all 0.3s ${easing.OUT};
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
  transition: background 0.3s ${easing.OUT};

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
  top: 10px;
  transform: ${({ isOpen }) => (isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)')};
  transition: transform 0.3s ${easing.OUT};
  width: 16px;
`;
