export interface SignUpForm {
  email: string
  username: string
  password: string
  gender: number
  birthday: Date
  acceptedTerms: boolean
}

export interface SignInForm {
  email: string
  password: string
}
