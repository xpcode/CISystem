import { combineReducers } from 'redux'

import user from './user'
import navigation from './navigation'
import company from './company'
import tabs from './tabs'

export default combineReducers({
    user,
    navigation,
    company,
    tabs,
})