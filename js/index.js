import React from 'React'
import { Provider } from 'react-redux'
import Immutable from 'immutable'

import configureStore from './store/configureStore'
import CISystem from './CISystem'

const store = configureStore()

export default () => () => {
    return (
        <Provider store={store}>
            <CISystem/>
        </Provider>
    )
}

// ext install change-case

console.disableYellowBox = true

global.LOG = (...args) => {
    console.log('/------------------------------\\')
    console.log(...args)
    console.log('\\------------------------------/')
    return args[args.length - 1]
}