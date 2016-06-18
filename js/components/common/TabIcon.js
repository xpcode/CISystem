import React from 'React'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

class TabIcon extends React.Component {
    render() {
        const {
            selected,
            title,
            iconName,
        } = this.props
        const color = selected ? '#FF3366' : '#FFB3B3'

        return (
            <View style={styles.container}>
                <Icon
                    style={{ color: color }}
                    name={iconName}
                    size={30} />
                <Text style={{ color: color }}>{title}</Text>
            </View>
        )
    }
}

export default TabIcon

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
    }
})