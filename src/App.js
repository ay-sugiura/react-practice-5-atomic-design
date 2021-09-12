import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organism/user/UserCard";
import { Router } from "./router/Router";
import styled from "styled-components";

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
  return <Router />
}

export default App;
