import React from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import tw from 'twin.macro'

interface IInput<T extends FieldValues> {
  label: string
  register: UseFormRegister<T>
  name: Path<T>
  type?: string
}

const Input = <T extends FieldValues>({
  label,
  name,
  register,
  type = 'string',
  ...rest
}: IInput<T> & React.ComponentPropsWithoutRef<'input'>) => {
  return (
    <div tw="grid w-full">
      <label htmlFor="input">{label}</label>
      <input
        tw="p-2 border-2 rounded-md outline-0 text-sm"
        id="input"
        {...register(name)}
        {...rest}
      />
    </div>
  )
}
export default Input
