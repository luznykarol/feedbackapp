import React from "react";
import Icon from "../../Icon/Icon";

const Select = ({
  options,
  isOpen,
  selectedOption,
  onOptionClick,
  onClick,
}) => {
  return (
    <div className="select">
      <div className="select__header" onClick={onClick}>
        {selectedOption || options[0].label}
      </div>
      {isOpen && (
        <div className="select__list">
          <ul className="select__list__inner">
            {options.map((option, i) => {
              return (
                <li
                  className={
                    selectedOption === option.value
                      ? "select__list__item select__list__item--selected"
                      : "select__list__item"
                  }
                  key={i}
                  onClick={onOptionClick(option)}>
                  {option.label}
                  {selectedOption === option.value && (
                    <Icon className="select__list__item__icon" icon="tick" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
