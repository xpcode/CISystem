
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'

import commonStyles from './styles'

export default class BackupButton extends React.Component {
    static defaultProps = {
        iconFloat: false,
        height: 40,
    };

    render() {
        const {
            iconFloat,
            height,
        } = this.props

        return (
            <TouchableOpacity
                onPress={e => Actions.pop() }
                style={[styles.container, { height: height, width: height }, iconFloat && styles.iconFloat]}>
                <Icon
                    name="ios-arrow-back-outline"
                    size={30}
                    style={commonStyles.backIconColor} />
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconFloat: {
        position: 'absolute',
    }
})