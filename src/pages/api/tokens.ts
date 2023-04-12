import { TOKENS } from '@/shared/constants/TokenConstants';
import { IApiResponse } from '@/shared/types/api';
import { IToken } from '@/shared/types/tokens';
import type { NextApiRequest, NextApiResponse } from 'next';

const getTokens = () => {
  return TOKENS;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IApiResponse | IToken[]>
) {
  try {
    if (req.method === 'get') {
      const response = getTokens();
      return res.status(200).json(response);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }

  res.status(500).json([]);
}
