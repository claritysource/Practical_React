import React, { useEffect, useRef, useState } from 'react'
import './Solution.css'

const NumberInput = React.forwardRef(({
  min=0,
  max=99,
  disabled,
  value,
  setValue,
  setShowError,
  style={},
}, ref) => {
  // Constants.................................................................

  const [previousValue, setPreviousValue] = useState('')

  // Constants..................................................................

  const isDigitKey     = e => e.keyCode >= 48 && e.keyCode <= 57
  const isArrowKey     = e => e.keyCode === 37 || e.keyCode === 39
  const isBackspaceKey = e => e.keyCode === 8
  const isDeleteKey    = e => e.keyCode === 46
  const isTabKey       = e => e.keyCode === 9
  const isShiftKey     = e => e.keyCode === 16
  const isCapsLock     = e => e.keyCode === 20

  const isNumber = e => !isNaN(parseInt(e.target.value))

  const handleChange = e => {
    const intValue = parseInt(e.target.value)

    if (!isNumber(e) || (intValue < min || intValue > max)) {
      if (e.target.value !== '') {
        setShowError(true)
        e.target.value = previousValue.toString()
      }
      else {
        setValue(e.target.value)
      }
    }
    else {
      if (e.target.value !== 'e') {
        setValue(e.target.value)
        setPreviousValue(intValue)
      }

      setShowError(false)
    }
  }

  const handleKeyDown = e => {
    if (!isDigitKey(e)     &&
        !isBackspaceKey(e) &&
        !isArrowKey(e)     &&
        !isTabKey(e)       &&
        !isShiftKey(e)     &&
        !isDeleteKey(e)    &&
        !isCapsLock(e)
    ) {
      e.preventDefault()
      setShowError(true)
    }
    else {
      setShowError(false)
    }
  }

  const calculateDisplayValue = () =>
    isNaN(value) || value === null ? '' : (value !== 'e' ? value : '')

  // Markup.....................................................................

  return (
    <input
      ref={ref}
      type="input"
      value={calculateDisplayValue()}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      style={style}
    />
  )
})

const Solution = () => {
  const [showError, setShowError] = useState(false)
  const [value, setValue] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <>
      <div className='prompt'>
        Enter a number between 1 and 99
      </div>

      {showError &&
        <div className='error'>
          Enter a number between one and 99
        </div>
      }

      <NumberInput
        ref={inputRef}
        value={value}
        setValue={setValue}
        setShowError={setShowError}
        style={{
          width: '2em',
          fontSize: '1.1em',
        }}
      />

      {value &&
        <div className='value'>
          Value: {value}
        </div>
      }
    </>
  )
}

export default Solution