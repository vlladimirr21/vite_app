import classes from './Button.module.scss'
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

// interface Props {
//   children?: string
// }

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {text}
    </button>
  )
}

export default Button
