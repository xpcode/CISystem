
import React from 'react'
import { StyleSheet, View } from 'react-native'

import commonStyles from './styles'
import BackupButton from './BackupButton'

export default class HeadBar extends React.Component {
    propTypes = {
        iconFloat: false
    };

    render() {
        return (
            <View style={[styles.container, commonStyles.backgroundColor]}>
                <BackupButton iconFloat={this.props.iconFloat}/>
                <View style={styles.title}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#c5c4c4',
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})