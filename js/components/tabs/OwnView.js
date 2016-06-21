import React from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    ListView,
    TouchableOpacity,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'

export default class OwnView extends React.Component {
    handlePressHeadImg(){
        Actions.login()
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Icon
                        name="ios-contact"
                        size={130}
                        onPress={this.handlePressHeadImg} />
                    <Image style={styles.headImg}>
                        <Text>登录</Text>
                    </Image>
                </View>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text>我的售前</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text>我的售后</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menuItem, styles.menuItemSplit]}>
                        <Text>关于</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    head:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f1f1',
    },
    headImg: {
    },
    
    menu: {
        flex: 2,
    },
    menuItem:{
        height: 40,
        justifyContent: 'center',
        paddingLeft: 20,
        borderTopWidth: 1,
        borderColor: '#e4e3e3',
    },
    menuItemSplit: {
        borderBottomWidth: 1,
    },
})