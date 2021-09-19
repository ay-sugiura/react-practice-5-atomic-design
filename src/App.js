import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organism/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { Link, BrowserRouter, Route } from "react-router-dom";
import { Router } from "./router/Router";
import styled from "styled-components";
import { UserProvider } from "./providers/UseProvider";
import { RecoilRoot } from "recoil";

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

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
