import { atom } from "recoil";

export const userState = atom({
    key: "userState", //何でもよいキー
    default: {isAdmin:false}
});