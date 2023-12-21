// import { useState } from "react";

interface Data extends FormData {
  
}

export interface QueryParams {
  routeName: string;
}

export async function requestFunction( url: string, method?: string, data?: Data | string, queryParams?: QueryParams ) {
  const reqData = JSON.stringify(data);
  const config = {
    method: method,
    body: reqData,
    params: queryParams,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, config);
    const resp = await fetch('/api/')
    return response;
  } catch (error: any) {
    const errorMessage = {reqError: error.message}
    return errorMessage;
  }
}




export enum ApiStatus {
  Loading,
  Success,
  Error,
  
}

interface ApiData {
  status: ApiStatus
  error: any,
  data: any,
}
