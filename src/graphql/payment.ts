import gql from "graphql-tag";

export const EXCUTE_PAY = gql`
  type PayInfo {
    id: string!
    amount: Int!
  }

  type PaymnetInfos {
    payInfo: PayInfo[]
  }

  mutation EXCUTE_PAY($info: PaymnetInfos) {
    payInfo(info: $info)
  }
`;
