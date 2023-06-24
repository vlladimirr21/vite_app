import { type FC, type InputHTMLAttributes } from 'react'
import classes from './Input.module.scss'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  onChange,
  type = 'text',
  placeholder,
  ...props
}) => {
  return (
    <input
      {...props}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={classes.myIn}
    ></input>
  )
}

export default Input
