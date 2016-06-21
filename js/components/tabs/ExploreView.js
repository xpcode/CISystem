
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
            <View style={styles.container}>
                <Text>暂无</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ExploreView