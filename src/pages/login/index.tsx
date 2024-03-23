import { userApi } from '@/api/auth/api'
import { TLogin, TUser } from '@/api/auth/interface'
import Input from '@/components/input'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import tw from 'twin.macro'
import Image from 'next/image'
import { Button } from '@nextui-org/react'

export default function Login() {
  const { register, handleSubmit } = useForm<{
    name: string
    email: string
    password: string
  }>({
    defaultValues: { name: '', email: '', password: '' },
  })
  const route = useRouter()

  const handleFormSubmit = async (data: TLogin) => {
    try {
      const response = await userApi.getUsers()
      const user = response.find(user => {
        return user.email === data.email && user.password === data.password
      })
      if (user) {
        console.log('login successfully')
      } else {
        console.log('login error')
      }
    } catch (err) {
      console.log('error', err)
    }
  }

  return (
    <div tw="flex p-4 items-center justify-center w-screen h-screen">
      <div tw="flex container flex-col gap-4 ">
        <h4 tw="font-bold text-3xl text-center mb-4">Sign Up To Account</h4>
        <div>
          <form
            tw="h-full w-full gap-3 flex flex-col justify-center items-center w-[100%]"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <Input
              register={register}
              name="name"
              label="Name"
              placeholder="Enter Your Name"
              tw="w-[30vw]"
            />
            <Input
              register={register}
              name="email"
              label="Email"
              placeholder="Enter Your Email"
              tw="w-[30vw]"
            />
            <Input
              register={register}
              name="password"
              label="Password"
              placeholder="Enter Your Password"
              tw="w-[30vw]"
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
      <div>
        <Image
          src={require('@/pages/images/auth.jpg')}
          style={{ width: '100%', height: '100vh' }}
          alt=""
        />
      </div>
    </div>
  )
}
