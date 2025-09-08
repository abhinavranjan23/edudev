// components/forms/FormElements.jsx
import React from "react";

export const FormInput = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  required = false,
  disabled = false,
}) => (
  <div className='mb-4'>
    {label && (
      <label className='block mb-1 font-medium text-gray-700 dark:text-gray-200'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
    )}
    <input
      type={type}
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  </div>
);

export const FormTextarea = ({
  label,
  value,
  onChange,
  placeholder,
  className = "",
  required = false,
  rows = 4,
}) => (
  <div className='mb-4'>
    {label && (
      <label className='block mb-1 font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
    )}
    <textarea
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
    />
  </div>
);

export const FormSelect = ({
  label,
  value,
  onChange,
  options = [],
  className = "",
  required = false,
  disabled = false,
}) => (
  <div className='mb-4'>
    {label && (
      <label className='block mb-1 font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
    )}
    <select
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${className} text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800`}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
