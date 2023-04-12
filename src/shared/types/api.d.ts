export interface IApiConfig {
  env?: Environment;
  services: {
    tokens: {
      getTokensUrl: string;
    };
    match: {
      getMatchUrl: string;
    };
  };
}

interface IApiHeaders {
  accessToken: string;
}

export interface IApiError {
  message: string;
}

export interface IApiResponse<TResult = unknown, TError = IApiError> {
  result: null | TResult;
  error: null | TError;
}
