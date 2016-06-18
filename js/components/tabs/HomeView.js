import React from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import { 
    Scene,
    Reducer,
    Router,
    Switch,
    TabBar,
    Modal,
    Schema,
    Actions 
} from 'react-native-router-flux'

class OwnView extends React.Component {
    handlePress(){
        Actions.search()
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.h1}>智能客户系统</Text>
                    <Text style={styles.h2}>http://cis.chaoke.cn</Text>
                </View>
                <View style={styles.search}>
                    <TouchableOpacity onPress={this.handlePress}>
                        <View style={styles.searchInputBorder}>
                            <Text
                                autoFocus={false}
                                editable={false}
                                style={styles.searchInput}>
                                请输入企业名..
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.filter}>
                    <View style={styles.filter_head}>
                        <Text style={styles.filter_input}>筛选客户</Text>
                    </View>
                    <View style={styles.filter_body}>
                        <Text>nothing...</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = store => {
    return {
        search: store.search
    }
}

export default connect(mapStateToProps)(OwnView)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    head: {
        height: 160,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    h1: {
        fontSize:36,
        fontWeight: 'bold',
    },
    h2: {
        fontSize:14,
        marginTop: 10,
    },

    search: {
        height: 140,
        justifyContent: 'center',
    },
    searchInputBorder: {
        height: 40,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#999',
        justifyContent: 'center',
    },
    searchInput: {
        color: '#999'
    },

    filter: {
    },
    filter_head: {
        backgroundColor: '#ccc',
        padding: 5,
        paddingLeft: 10,
    },
    filter_input: {

    },
    filter_body: {
        height: 140,
        alignItems: 'center',
        justifyContent: 'center'
        // backgroundColor: 'blue',
    }
});