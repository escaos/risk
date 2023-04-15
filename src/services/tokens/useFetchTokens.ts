import { QUERY_KEY } from '@/shared/constants/queryKeyConstants';
import { ITokenGetResponse } from '@/shared/types/tokens';
import { useQuery } from '@tanstack/react-query';
import API from '../api';

const apiFetchTokens = async (): Promise<ITokenGetResponse> => {
  try {
    const res = await API.client.tokens.getTokens();

    const { result } = res;

    if (!result) throw new Error('Unable to fetch tokens');
    return result;
  } catch {
    throw new Error('Unable to fetch tokens');
  }
};

export const useFetchTokens = () => {
  const queryKeys = [QUERY_KEY.TOKENS];

  const result = useQuery<ITokenGetResponse | undefined, Error>(queryKeys, () => apiFetchTokens());

  return result;
};
