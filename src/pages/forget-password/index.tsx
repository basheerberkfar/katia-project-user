import Button from '@/components/button'
import Link from 'next/link'

const ForgetPassword = () => {
  return (
    <div>
      <p>Forget Password Page</p>
      <Link href="/">
        <Button label={<p>Return To login page</p>} />
      </Link>
    </div>
  )
}
export default ForgetPassword
