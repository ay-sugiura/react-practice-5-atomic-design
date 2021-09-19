import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react/cjs/react.development";
import styled from "styled-components";
import { UserContext } from "../../providers/UseProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organism/user/UserCard";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userState } from "../../store/userState";

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
 // const { userInfo, setUserInfo } = useContext(UserContext);
const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => {
    userInfo
      ? setUserInfo({ isAdmin: !userInfo.isAdmin })
      : setUserInfo({ isAdmin: false });
  };
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>

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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
