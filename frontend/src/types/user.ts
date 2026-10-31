export type User = {
  id: string
  email: string
  name: string
  phone: string
  role: 'ADMIN' | 'CUSTOMER'
  createdAt: string
  updatedAt: string
}
export type UsersResponse = {
  data: User[]
  total: number
}
