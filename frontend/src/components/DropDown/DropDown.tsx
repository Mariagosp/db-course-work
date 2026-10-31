import './DropDown.scss';
import { useEffect, useRef, useState } from "react";
import ChevronDownIcon from "../../assets/Arrow-down.svg?react";

import "./Dropdown.scss";

interface DropdownItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  onSelect: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ label, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown__button" onClick={() => setIsOpen(!isOpen)}>
        {label}
        <ChevronDownIcon className="dropdown__icon" />
      </button>
      {isOpen && (
        <div className="dropdown__menu">
          {items.map((item) => (
            <div
              key={item.value}
              className="dropdown__item"
              onClick={() => {
                onSelect(item.value);
                setIsOpen(false);
              }}
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
