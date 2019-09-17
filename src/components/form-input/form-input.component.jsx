import React from 'react'
import './form-input.styles.scss'

const FormInput = ({handleChange, label, name, ...otherProps})=> {
    return(
        <div className="group">
            <input 
                className="form-input"
                onChange={handleChange}
                id={name}
                {...otherProps}
               
            />
            {
                label ?
                (<label 
                    className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
                    htmlFor={name}
                >
                    {label}
                </label>)
                : null
            }
        </div>
    )
}

export default FormInput