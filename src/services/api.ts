import { API_CLIENT_CONFIG, API_SERVER_CONFIG } from '@/shared/constants/apiConstants';
import { IApiConfig, IApiHeaders, IApiResponse } from '@/shared/types/api';
import { IToken, ITokenGetResponse } from '@/shared/types/tokens';

export default class API {
  public static init(config: IApiConfig) {
    if (!config) {
      throw new Error('API config is required');
    }

    const headers: globalThis.HeadersInit = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');

    return {
      public: () => {
        return API.getServices(config, headers);
      },
      private: ({ accessToken }: IApiHeaders) => {
        headers.set('Authorization', `Bearer ${accessToken}`);

        return API.getServices(config, headers);
      },
    };
  }

  public static http = async <T>(
    url: string,
    body?: unknown,
    customConfig: globalThis.RequestInit = {},
    accessToken?: string
  ) => {
    const headers: globalThis.HeadersInit = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const config: globalThis.RequestInit = {
      method: body ? 'POST' : 'GET',
      ...customConfig,
      headers: {
        ...headers,
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        ...(customConfig.headers ?? []),
      },
    };
    console.log('🚀 ~ file: api.ts:47 ~ API ~ config:', config);
    console.log('🚀 ~ file: api.ts:66 ~ API ~ url:', url);

    if (body) config.body = JSON.stringify(body);

    return fetch(url, config)
      .then<T>(async (response) => {
        let data;
        if (response.status !== 204) {
          data = await response.json();
        }

        if (response.ok) {
          return data;
        } else {
          return Promise.reject(data);
        }
      })
      .catch((err) => {
        console.log('🚀 ~ file: api.ts:66 ~ API ~ err:', err);
        return err;
      });
  };

  public static get<TResponse>(
    url: string,
    customConfig: globalThis.RequestInit = {},
    accessToken?: string
  ): Promise<TResponse> {
    return API.http<TResponse>(
      url,
      null,
      {
        ...customConfig,
        method: 'GET',
      },
      accessToken
    );
  }

  public static post<TResponse>(
    url: string,
    body: unknown,
    customConfig: globalThis.RequestInit = {},
    accessToken?: string
  ): Promise<TResponse> {
    return API.http<TResponse>(
      url,
      body,
      {
        ...customConfig,
        method: 'POST',
      },
      accessToken
    );
  }

  public static patch<TResponse>(
    url: string,
    body: unknown,
    customConfig: globalThis.RequestInit = {},
    accessToken?: string
  ): Promise<TResponse> {
    return API.http<TResponse>(
      url,
      body,
      {
        ...customConfig,
        method: 'PATCH',
      },
      accessToken
    );
  }

  public static put<TResponse>(
    url: string,
    body: unknown,
    customConfig: globalThis.RequestInit = {},
    accessToken?: string
  ): Promise<TResponse> {
    return API.http<TResponse>(
      url,
      body,
      {
        ...customConfig,
        method: 'PUT',
      },
      accessToken
    );
  }

  public static delete<TResponse>(
    url: string,
    body?: unknown,
    customConfig: globalThis.RequestInit = {}
  ): Promise<TResponse> {
    return API.http<TResponse>(url, body, {
      ...customConfig,
      method: 'DELETE',
    });
  }

  // TODO: Add Headers
  private static getServices(config: IApiConfig, headers?: Headers) {
    console.log('🚀 ~ file: api.ts:87 ~ API ~ getServices ~ headers:', headers);
    return {
      tokens: {
        getTokens: (): Promise<IApiResponse<ITokenGetResponse>> => {
          const { services } = config;
          const getTokens = services.tokens.getTokensUrl;
          console.log('🚀 ~ file: api.ts:152 ~ API ~ getServices ~ getTokens:', getTokens);
          return API.get(getTokens);
        },
      },
      matches: {
        getTokens: (): Promise<IApiResponse<IToken[]>> => {
          const { services } = config;
          const getTokens = services.tokens.getTokensUrl;
          return API.get(getTokens);
        },
      },
    };
  }

  public static get client() {
    return API.getServices(API_CLIENT_CONFIG);
  }

  public static get server() {
    return API.getServices(API_SERVER_CONFIG);
  }
}
