import Immutable from 'immutable'

import {
    ACTION_SEARCH_BYNAME
} from '../actions/company'

const initialState = Immutable.fromJS({
    companyList: [],
    followList: [],
})

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SEARCH_BYNAME:
            return state.set('companyList', [].concat(action.payload))

        default:
            return state
    }
}