import axios from 'axios'
import { USER_ROUTE } from './route'
import { IResetPassword, TLogin, TUser } from './interface'

const postUsers = async (data: TUser) => {
  const { data: responseData } = await axios.post<TUser>(USER_ROUTE.USERS, data)
  return responseData
}
const getUsers = async () => {
  const { data } = await axios.get<TLogin[]>(USER_ROUTE.USERS)
  return data
}
const resetPassword = async (payload: IResetPassword) => {
  const { data } = await axios.put(`${USER_ROUTE.USERS}/${payload.id}`, payload)
  return data
}
export const userApi = {
  postUsers,
  getUsers,
  resetPassword,
}
