import React from 'react'


const InputField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    {label && <label htmlFor={input.name}>{label}</label>}
    <div>
      <input {...input} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export default InputField
