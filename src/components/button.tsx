import React from 'react'
import tw from 'twin.macro'

interface TButton {
  type?: 'button' | 'submit' | 'reset'
  label: React.ReactNode
}

const Button = ({
  label,
  type = 'button',
  ...rest
}: TButton & React.ComponentPropsWithoutRef<'button'>) => {
  return (
    <button type={type} {...rest}>
      {label}
    </button>
  )
}
export default Button
