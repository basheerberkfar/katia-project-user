import { userApi } from '@/api/auth/api'
import { TEmail, TLogin, TUser } from '@/api/auth/interface'
import Button from '@/components/button'
import Input from '@/components/input'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import tw from 'twin.macro'
import Image from 'next/image'

export default function Login() {
  const { register, handleSubmit } = useForm<{
    name: string
    email: string
    password: string
  }>({
    defaultValues: { name: '', email: '', password: '' },
  })

  const route = useRouter()

  const handleFormSubmit = async (data: TEmail) => {
    try {
      const response = await userApi.getUsers()
      const emailExists = response.find(
        (user: TEmail) => user.email === data.email,
      )
      if (emailExists) {
        route.push(`/reset-password?email=${data.email}`)
      } else {
        console.log('Email not found')
      }
    } catch (err) {
      console.log('error', err)
    }
  }
  return (
    <div tw="flex items-center justify-center w-screen h-screen">
      <div tw="flex container flex-col gap-4 ">
        <h4 tw="font-bold text-3xl text-center mb-4">Sign Up To Account</h4>
        <div>
          <form
            tw="h-full w-full gap-3 flex flex-col justify-center items-center w-[100%]"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <Input
              register={register}
              name="email"
              label="Email"
              placeholder="Enter Your Email"
              tw="w-[30vw]"
            />

            <button type="submit">Sign In</button>
            <Link href="/login">
              <button type="submit">back to login </button>
            </Link>
          </form>
        </div>
      </div>
      <div tw="relative w-full h-screen">
        <Image
          src="/images/auth.jpg"
          fill
          // style={{ width: '100%', height: '100vh' }}
          alt=""
        />
      </div>
    </div>
  )
}
