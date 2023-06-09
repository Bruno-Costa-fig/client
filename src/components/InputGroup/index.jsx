import PropTypes from 'prop-types'
import { forwardRef } from 'react'

const InputGroup = forwardRef(({ labelText, helperText, ...props }, ref) => {
  return (
    <div className="container w-full">
      {labelText && (
        <label htmlFor={labelText.replace(" ", "-").toLowerCase()} className="me-2">
          {labelText}
        </label>
      )}

      <input ref={ref} className='p-3 my-2 w-full' placeholder={labelText} name={labelText.replace(" ", "-").toLowerCase()} {...props} />

      {!!helperText && <span className="error">{helperText}</span>}
    </div>
  )
})

InputGroup.propTypes = {
  labelText: PropTypes.string,
  helperText: PropTypes.string
}

InputGroup.displayName = 'InputGroup'

export default InputGroup
