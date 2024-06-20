import { createSlice } from "@reduxjs/toolkit";
import appData from "../../utils/Data/Data";
import { followersType } from "../../utils/types/FollowersType";
import notificationData from "../../utils/Data/NotificationData";
import { NotificationType } from "../../utils/types/NotificaitonType";
interface getDataType {
    followersData: followersType[];
}

const dataSlice = createSlice({
    name: 'followersData',
    initialState: {
        followersData: appData,
        notificationData: notificationData
    },
    reducers: {
        setFollowersData: (state: getDataType, action) => {
            state.followersData = action.payload;
        },
        setNotificationData: (state, action) => {
            state.notificationData = action.payload;
        }
    }
});
export const { setFollowersData, setNotificationData } = dataSlice.actions;
export default dataSlice.reducer;