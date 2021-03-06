import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

import Field from "../Field";

const generateOptions = (options) =>
  options.map(({ label, value, ...props }) => (
    <option value={value} key={value || label} {...props}>
      {label}
    </option>
  ));

const Select = ({
  caution,
  className,
  error,
  help,
  id,
  label,
  labelClassName,
  onChange,
  options,
  required,
  stacked,
  success,
  takeFocus,
  wrapperClassName,
  ...props
}) => {
  const selectRef = useRef(null);

  useEffect(() => {
    if (takeFocus) {
      selectRef.current.focus();
    }
  }, [takeFocus]);

  return (
    <Field
      caution={caution}
      className={wrapperClassName}
      error={error}
      forId={id}
      help={help}
      isSelect={true}
      label={label}
      labelClassName={labelClassName}
      required={required}
      stacked={stacked}
      success={success}
    >
      <select
        className={classNames("p-form-validation__input", className)}
        id={id}
        onChange={(evt) => onChange && onChange(evt)}
        ref={selectRef}
        {...props}
      >
        {generateOptions(options)}
      </select>
    </Field>
  );
};

Select.propTypes = {
  caution: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.node,
  help: PropTypes.node,
  id: PropTypes.string,
  label: PropTypes.node,
  labelClassName: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  required: PropTypes.bool,
  stacked: PropTypes.bool,
  success: PropTypes.node,
  /**
   * Focus on the select box on first render.
   */
  takeFocus: PropTypes.bool,
  wrapperClassName: PropTypes.string,
};

export default Select;
