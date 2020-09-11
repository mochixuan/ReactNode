import { USER_MODIFY_NAME_ACT } from "./actTypes";

export const modifyUserName = (name) => ({
    type: USER_MODIFY_NAME_ACT,
    data: name,
})