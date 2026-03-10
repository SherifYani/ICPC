import { useState, useEffect, useRef } from "react";
import { ChevronDown, Trophy } from "lucide-react";
import "./ModernSelect.css";

/**
 * ModernSelect - A modern, accessible, and attractive select component
 *
 * @component
 * @example
 * const options = [
 *   { value: 1, label: "Week 1: Introduction" },
 *   { value: 2, label: "Week 2: Basics" },
 *   { value: 3, label: "Week 3: Advanced" },
 * ];
 *
 * <ModernSelect
 *   value={selectedWeek}
 *   onChange={(value) => setSelectedWeek(value)}
 *   options={options}
 *   label="Select Your Week"
 *   icon={Trophy}
 *   placeholder="Choose a week..."
 * />
 *
 * @param {number|string} value - The currently selected value
 * @param {function} onChange - Callback function when selection changes
 * @param {Array} options - Array of option objects with value and label properties
 * @param {string} label - Label displayed in the dropdown header
 * @param {React.Component} icon - Optional icon component to display in the button
 * @param {string} placeholder - Optional placeholder text when no value is selected
 * @param {boolean} disabled - Optional flag to disable the select
 * @returns {JSX.Element} The rendered select component
 */
function ModernSelect({
  value,
  onChange,
  options,
  label,
  icon: Icon = Trophy,
  placeholder = "Select an option...",
  disabled = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const selectRef = useRef(null);
  const dropdownRef = useRef(null);

  const selectedOption = options.find(opt => opt.value === value);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = e => {
    if (disabled) return;

    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex(prev =>
          prev < options.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        onChange(options[highlightedIndex].value);
        setIsOpen(false);
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
      case "Tab":
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleOptionClick = optionValue => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleButtonClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="modern-select-wrapper">
      {/* Select Button */}
      <button
        ref={selectRef}
        onClick={handleButtonClick}
        onKeyDown={handleKeyDown}
        className={`modern-select-button ${disabled ? "disabled" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        disabled={disabled}
        type="button"
      >
        <span className="modern-select-button-content">
          <Icon className="modern-select-icon" />
          <span className="modern-select-text">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </span>
        <ChevronDown
          className={`modern-select-chevron ${isOpen ? "open" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && !disabled && (
        <div
          ref={dropdownRef}
          className="modern-select-dropdown"
          role="listbox"
        >
          {/* Dropdown Header */}
          <div className="modern-select-dropdown-header">
            <p className="modern-select-dropdown-label">{label}</p>
          </div>

          {/* Options List */}
          <div className="modern-select-options-container">
            {options.length > 0 ? (
              options.map((option, index) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionClick(option.value)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  className={`modern-select-option ${
                    value === option.value ? "selected" : ""
                  } ${highlightedIndex === index ? "highlighted" : ""}`}
                  role="option"
                  aria-selected={value === option.value}
                  type="button"
                >
                  {/* Background gradient for selected state */}
                  <div className="modern-select-option-bg" />

                  {/* Content */}
                  <div className="modern-select-option-content">
                    <div className="modern-select-option-left">
                      {value === option.value && (
                        <div className="modern-select-option-indicator">
                          <div className="modern-select-option-dot" />
                        </div>
                      )}
                      <span className="modern-select-option-label">
                        {option.label}
                      </span>
                    </div>
                    {value === option.value && (
                      <div className="modern-select-option-checkmark">✓</div>
                    )}
                  </div>

                  {/* Hover indicator line */}
                  <div className="modern-select-option-line" />
                </button>
              ))
            ) : (
              <div className="modern-select-empty">No options available</div>
            )}
          </div>

          {/* Dropdown Footer */}
          <div className="modern-select-dropdown-footer">
            <p className="modern-select-footer-text">
              Use ↑↓ to navigate, Enter to select
            </p>
          </div>
        </div>
      )}

      {/* Hidden native select for accessibility and form submission */}
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="modern-select-hidden"
        aria-hidden="true"
        tabIndex={-1}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ModernSelect;
