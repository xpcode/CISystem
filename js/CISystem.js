import React from 'React'
import { connect } from 'react-redux'

import { 
    Scene,
    Reducer,
    Router,
    Switch,
    TabBar,
    Modal,
    Schema,
    Actions 
} from 'react-native-router-flux'

import {
    TabIcon,
    LoginView,
    SearchView,
    ExploreView,
    FollowView,
    HomeView,
    OwnView,
} from './components'

const CISystemNavigator = () => {
    return (
        <Router hideNavBar={true}>
            <Scene key="root">
                <Scene key="tabBar" tabs={true} default="home" initial={true}>
                    <Scene key="home"
                        component={HomeView}
                        hideNavBar={true}
                        icon={TabIcon}
                        iconName={"md-home"}
                        title="首页"
                        initial={true} />

                    <Scene key="follow"
                        component={FollowView}
                        hideNavBar={true}
                        icon={TabIcon}
                        iconName={"md-at"}
                        title="关注" />

                    <Scene key="explore"
                        component={ExploreView}
                        hideNavBar={true}
                        icon={TabIcon}
                        iconName={"md-search"}
                        title="发现" />

                    <Scene key="own"
                        component={OwnView}
                        hideNavBar={true}
                        icon={TabIcon}
                        iconName={"md-person"}
                        title="我的" />
                </Scene>
                <Scene key="search"
                    component={SearchView}
                    title="查询企业"
                    />
                <Scene key="login"
                    component={LoginView}
                    title="登录"
                    />
            </Scene>
        </Router>
    )
}

module.exports = CISystemNavigator