import { IApiConfig } from '@/shared/types/api';

export const API_CLIENT_CONFIG: IApiConfig = {
  env: 'development',
  services: {
    tokens: {
      getTokensUrl: 'http://localhost:3000/api/tokens',
    },
    match: {
      getMatchUrl: 'http://localhost:3000/api/match',
    },
  },
};

export const API_SERVER_CONFIG: IApiConfig = {
  env: 'development',
  services: {
    tokens: {
      getTokensUrl: 'http://localhost:3000/api/tokens',
    },
    match: {
      getMatchUrl: 'http://localhost:3000/api/match',
    },
  },
};
