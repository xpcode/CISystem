
import React from 'react'
import { StyleSheet, View } from 'react-native'

import commonStyles from './styles'
import BackupButton from './BackupButton'

export default class HeadBar extends React.Component {
    static propTypes = {
        iconFloat: React.PropTypes.bool,
        height: React.PropTypes.number,
    };

    static defaultProps = {
        iconFloat: false,
        height: 40,
    };

    render() {
        const {
            height,
            iconFloat,
        } = this.props

        return (
            <View style={[styles.container, { height: height }, commonStyles.backgroundColor]}>
                <BackupButton iconFloat={iconFloat} height={height}/>
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