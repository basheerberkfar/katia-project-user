import { userApi } from '@/api/auth/api'
import { TEmail, TLogin, TPassword, TUser } from '@/api/auth/interface'
import Button from '@/components/button'
import Input from '@/components/input'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import tw from 'twin.macro'

export default function ResetPassword() {
  const { register, handleSubmit } = useForm<{
    password: string
    newpassword: string
  }>({
    defaultValues: { password: '', newpassword: '' },
  })

  const route = useRouter()
  const handelClick = () => {
    route.push('/login')
  }
  const router = useRouter()

  const { pathname, query } = router
  const email = pathname.split('/')[2]
  const handleFormSubmit = async (data: TPassword) => {
    try {
      const response = await userApi.getUsers()
      const user = response.find(_user => _user.email === email)
      await userApi.resetPassword({
        confirmPassword: data.newpassword,
        email: email,
        password: data.password,
        id: user?.id,
        name: user?.name,
      })
      console.log('user', user)
    } catch (err) {
      console.log('eee', err)
    }
  }
  return (
    <div tw="p-4">
      <h1 tw="text-3xl text-center font-bold border-b-2 py-2">Katia User</h1>
      <div tw="w-[98vw] h-[80vh] flex items-center justify-center">
        <div tw="flex flex-col gap-4 w-[600px] min-h-[350px] border-2 p-4 rounded-md shadow-md">
          <h4 tw="text-lg font-bold border-b-2 py-2">LogIn</h4>
          <form className="mt-1" onSubmit={handleSubmit(handleFormSubmit)}>
            <Input
              register={register}
              name="password"
              label="Email"
              placeholder="Enter Your Email"
            />
            <Input
              register={register}
              name="newpassword"
              label="Email"
              placeholder="Enter Your Email"
            />
            <button type="submit">Sign Up</button>
          </form>
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
