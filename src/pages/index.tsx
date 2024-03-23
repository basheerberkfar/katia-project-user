import { userApi } from '@/api/auth/api'
import { TUser } from '@/api/auth/interface'
import Button from '@/components/button'
import Input from '@/components/input'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import tw from 'twin.macro'
import Image from 'next/image'

export default function signUp() {
  const { register, handleSubmit } = useForm<{
    name: string
    email: string
    password: string
    confirmPassword: string
  }>({
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  })

  const route = useRouter()

  const handleFormSubmit = async (data: TUser) => {
    try {
      await userApi.postUsers(data)
      route.push('/login')
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
            <Input
              register={register}
              name="confirmPassword"
              label="confirmPassword"
              placeholder="Enter Your Confirm Password"
              tw="w-[30vw]"
            />
            <div
              style={{
                width: 'full',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Link href="/login">
                <button type="submit">Sign In</button>
              </Link>
              <Link href="/reset-email">forget password</Link>
            </div>
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
