import Button from '@/components/button'
import Input from '@/components/input'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import tw from 'twin.macro'

export default function Login() {
  const { register } = useForm<{ email: string; password: string }>({
    defaultValues: { email: '', password: '' },
  })

  const route = useRouter()

  const handelClick = () => {
    route.push('/forget-password')
  }

  return (
    <div tw="p-4">
      <h1 tw="text-3xl text-center font-bold border-b-2 py-2">Katia User</h1>
      <div tw="w-[98vw] h-[80vh] flex items-center justify-center">
        <div tw="flex flex-col gap-4 w-[600px] min-h-[350px] border-2 p-4 rounded-md shadow-md">
          <h4 tw="text-lg font-bold border-b-2 py-2">LogIn</h4>
          <Input
            register={register}
            name="email"
            label="Email"
            placeholder="Enter Your Email"
          />
          <Input
            register={register}
            name="password"
            label="Password"
            placeholder="Enter Your Password"
          />
          <Link href="/forget-password" tw="text-sm underline text-gray-400">
            forget password
          </Link>
          <Button label={<p>LogIn</p>} onClick={handelClick} />
          <p tw="font-bold text-gray-500 text-sm text-center">
            @ {new Date().getFullYear()} All Right Received For Katia
          </p>
        </div>
      </div>
    </div>
  )
}
