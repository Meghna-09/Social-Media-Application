import { createSlice } from "@reduxjs/toolkit";
import appData from "../../utils/Data/Data";
import { followersType } from "../../utils/types/FollowersType";
import notificationData from "../../utils/Data/NotificationData";
import chatData from "../../utils/Data/Chat";
interface getDataType {
    followersData: followersType[];
}

const dataSlice = createSlice({
    name: 'followersData',
    initialState: {
        followersData: appData,
        notificationData: notificationData,
        chatData: chatData
    },
    reducers: {
        setFollowersData: (state: getDataType, action) => {
            state.followersData = action.payload;
        },
        setNotificationData: (state, action) => {
            state.notificationData = action.payload;
        },
        setChatData: (state, action) => {
            state.chatData = [...state.chatData, action.payload]
        }
    }
});
export const { setFollowersData, setNotificationData, setChatData } = dataSlice.actions;
export default dataSlice.reducer;