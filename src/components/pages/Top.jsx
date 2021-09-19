import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../../providers/UseProvider";
import { useContext } from "react/cjs/react.development";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();

//  const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push({ pathname: "/users" });
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push({ pathname: "/users" });
  };
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div``;
