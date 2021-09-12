import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organism/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { Link, BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

const user = {
  name: "すいか食べたい子",
  image: "https://source.unsplash.com/9UUoGaaHtNE",
  email:
    "aaaaabbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbba@a.com",
  phone: "080-0000-0001",
  company: {
    name: "スイカ株式会社",
  },
};

function App() {
  return (
    <BrowserRouter>
      <HeaderOnly>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>２次ボタン</SecondaryButton>
        <br />
        <SearchInput />
        <br />
        <SContainer>
          <UserCard user={user} />
          <UserCard user={user} />
          <UserCard user={user} />
          <UserCard user={user} />
          <UserCard user={user} />
        </SContainer>
        
      </HeaderOnly>
    </BrowserRouter>
  );
}

export default App;

const SContainer = styled.div`

`;