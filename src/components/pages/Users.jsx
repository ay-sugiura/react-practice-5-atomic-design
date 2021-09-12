import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organism/user/UserCard";

const users = [...Array(10).keys()].map((value) => {
  return {
    id: value,
    name: `${value}番、すいか食べたい子`,
    image: "https://source.unsplash.com/9UUoGaaHtNE",
    email:
      "aaaaabbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbba@a.com",
    phone: "080-0000-0001",
    company: {
      name: "スイカ株式会社",
    },
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-colums: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
