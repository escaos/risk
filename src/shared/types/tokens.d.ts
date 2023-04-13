interface IToken {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
}

interface ITokenVersion {
  major: number;
  minor: number;
  patch: number;
}

export interface ITokenGetResponse {
  name: string;
  logoURI: string;
  keywords: string[];
  timestamp: string;
  tokens: IToken[];
  version: ITokenVersion;
}
