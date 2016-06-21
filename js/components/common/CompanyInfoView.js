
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Navigator,
} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'

import commonStyles from './styles'
import HeadBar from './HeadBar'

export default class CompanyInfoView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeadBar iconFloat={true}>
                    <Text>详情</Text>
                </HeadBar>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})