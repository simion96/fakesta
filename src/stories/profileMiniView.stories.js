import React from 'react';

import ProfileMiniView from "../components/ProfileMiniView";


export default {
    title: 'User/ProfileMiniView',
    component: ProfileMiniView
};
const user = {
    username: "simionp",
    fullname: "simion putoina"
}

export const profileMiniView = () => <ProfileMiniView user={user} />;
