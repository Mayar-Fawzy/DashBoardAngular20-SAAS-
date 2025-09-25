

export interface ILogin {
  email: string
  password: string
}
export interface IloginReseltRoot {
  message: string
  user: User
  token: string
}

export interface User {
  name: string
  email: string
  role: string
}
