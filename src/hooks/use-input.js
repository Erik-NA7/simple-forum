import { useState } from "react";

const useInput = (validateValue) => {
  const [input, setInput] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateValue(input)
  const hasError = !inputIsValid && isTouched

  const inputChangeHandler = event => {
    setInput(event.target.value)
  }

  const inputBlurHandler = event => {
    setIsTouched(true)
  }

  const reset = () => {
    setInput('')
    setIsTouched(false)
  }

  return {
    value: input,
    isValid: inputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  }
}

export default useInput