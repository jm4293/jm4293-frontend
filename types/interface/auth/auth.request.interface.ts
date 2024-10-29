export interface IAuthSignInReq {
  email: string;
  password: string;
}

export interface IAuthSignUpReq {
  email: string;
  password: string;
  name: string;
}

export interface IAuthVerifyEmailReq {
  email: string;
  name: string;
}

export interface IAuthChangePasswordReq {
  email: string;
  password: string;
}

export interface IAuthFindEmailReq {
  name: string;
}
