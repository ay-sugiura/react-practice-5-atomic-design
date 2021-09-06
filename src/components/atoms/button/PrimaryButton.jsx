import styled from "styled-components";
import { BaseButton } from "./BaseButton";

//色々なところに使える主要なボタン
export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// styledの書き方。BaseButtonにCSSを上書きする書き方
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
