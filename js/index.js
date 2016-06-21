import React from 'React'
import { Provider } from 'react-redux'
import Immutable from 'immutable'
import codePush from 'react-native-code-push'

import configureStore from './store/configureStore'
import CISystem from './CISystem'

const store = configureStore()

class App extends React.Component {
    componentDidMount() {
        codePush.sync()
    }

    render() {
        return (
            <Provider store={store}>
                <CISystem/>
            </Provider>
        )
    }
}

export default () => App

console.disableYellowBox = true

global.LOG = (...args) => {
    console.log('/------------------------------\\')
    console.log(...args)
    console.log('\\------------------------------/')
    return args[args.length - 1]
}