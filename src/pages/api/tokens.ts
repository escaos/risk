import { TOKENS } from '@/shared/constants/TokenConstants';
import { IApiResponse } from '@/shared/types/api';
import { ITokenGetResponse } from '@/shared/types/tokens';
import type { NextApiRequest, NextApiResponse } from 'next';

const getTokens = async () => {
  return TOKENS;
};

export const tokensHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<IApiResponse | ITokenGetResponse>
) => {
  const { method } = req;
  try {
    if (method?.toLowerCase() === 'get') {
      const response = await getTokens();

      return res.status(200).json(response);
    }
  } catch (err) {
    console.error(err);
    const message = (err as Error)?.message ?? 'Unknown error.';
    res.status(500).json({ result: null, error: { message } });
  }

  res.status(500).json({ result: null, error: { message: 'Method unknown.' } });
};

export default tokensHandler;
