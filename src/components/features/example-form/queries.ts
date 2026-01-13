import { useMutation } from "@tanstack/react-query";

import { FE_AUTH_LOGIN_VERIFY } from "@/constants/uri-api-frontend";
import { post } from "@/libs/ky";

import type { IResultLogin } from "@/app/api/auth/model";

export const postVerifyOtp = async (body: { otp: string; email: string }) => {
  return await post<IResultLogin>(FE_AUTH_LOGIN_VERIFY, { json: body });
};

export function useVerifyOtp() {
  return useMutation({ mutationFn: postVerifyOtp });
}
