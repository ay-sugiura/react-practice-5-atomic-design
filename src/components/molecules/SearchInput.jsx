import { PrimaryButton } from "../atoms/button/PrimaryButton";
import styled from "styled-components";
import { Input } from "../atoms/input/Input";
import { memo } from "react";

export const SearchInput = memo(() => {
  console.log('SearchInput');
  return (
    <div>
      <SContainer>
        <Input placeholder="検索条件を入力" />
        <SButtonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  );
});

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
