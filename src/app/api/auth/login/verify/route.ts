import { NextResponse } from "next/server";

import { BE_AUTH_LOGIN_VERIFY } from "@/constants/uri-api-backend";
import { post } from "@/libs/fetch-node";
import { getError } from "@/utils/server";

import { getResponseLogin } from "../../model";

import type { IResponseLogin } from "../../types";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await post<IResponseLogin>(BE_AUTH_LOGIN_VERIFY, { body });

    return NextResponse.json(getResponseLogin(response));
  } catch (err) {
    return getError(err, request);
  }
}
