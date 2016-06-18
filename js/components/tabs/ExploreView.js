
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Navigator,
} from 'react-native'
import { connect } from 'react-redux'

class ExploreView extends React.Component {
    constructor(){
        super()
    }
    render() {
        return (
            <View>
                <Text>请输入企业名..</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    drawer: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
    },
    header: {
        padding: 20,
        justifyContent: 'flex-end',
    },
    name: {
        marginTop: 10,
        color: 'white',
        fontSize: 12,
    },
});

export default ExploreView