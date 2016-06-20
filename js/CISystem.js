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
    ExploreView,
    FollowView,
    HomeView,
    OwnView,
    ByNameSearchView,
    ByAreaFilterView,
    ByIndustryFilterView,
    CompanyInfoView,
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
                        title="我" />
                </Scene>
                <Scene key="companyInfo" hideNavBar={false} component={CompanyInfoView} title="详情" />
                <Scene key="byNameSearch" component={ByNameSearchView} title="按企业名查询" />
                <Scene key="byAreaFilter" component={ByAreaFilterView} title="按地区过滤" />
                <Scene key="byIndustryFilter" component={ByIndustryFilterView} title="按行业过滤" />
                <Scene key="login" component={LoginView} title="登录" />
            </Scene>
        </Router>
    )
}

module.exports = CISystemNavigator