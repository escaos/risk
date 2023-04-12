import { QUERY_KEY } from '@/shared/constants/queryKeyConstants';
import { IToken } from '@/shared/types/tokens';
import { useQuery } from '@tanstack/react-query';
import API from '../api';

type IFetchTokensResponse = IToken[];

const apiFetchTokens = async (): Promise<IFetchTokensResponse> => {
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

  const result = useQuery<IFetchTokensResponse | undefined, Error>(queryKeys, () =>
    apiFetchTokens()
  );

  return result;
};
