import Immutable from 'immutable'

import {
    ACTION_SEARCH_BYNAME,
    ACTION_SEARCH_BYNAME_FETCHING,
} from '../actions/company'

const initialState = Immutable.fromJS({
    fetching: false,
    companyList: [],
    followList: [],
})

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SEARCH_BYNAME_FETCHING:
            return state.update(['fetching'], x => true)

        case ACTION_SEARCH_BYNAME:
            return state
                .set('companyList', action.payload || [])
                .update(['fetching'], x => false)

        default:
            return state
    }
}