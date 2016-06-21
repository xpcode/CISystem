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
import Icon from 'react-native-vector-icons/Ionicons'

import commonStyles from '../common/styles'

class OwnView extends React.Component {
    handlePress(name){
        return () => {
            Actions[name]()
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.h1}>智能客户系统</Text>
                    <Text style={styles.h2}>http://www.domain.com</Text>
                </View>
                <View style={styles.search}>
                    <TouchableOpacity onPress={this.handlePress('byNameSearch')}>
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
                        <TouchableOpacity onPress={this.handlePress('byAreaFilter')}>
                            <View style={styles.filterParam}>
                                <Icon
                                    name="ios-podium-outline"
                                    size={30} />
                                <Text
                                    autoFocus={false}
                                    editable={false}
                                    style={styles.searchInput}>
                                    按地区
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handlePress('byIndustryFilter')}>
                            <View style={styles.filterParam}>
                                <Icon
                                    name="ios-pin-outline"
                                    size={30} />
                                <Text
                                    autoFocus={false}
                                    editable={false}
                                    style={styles.searchInput}>
                                    按行业
                                </Text>
                            </View>
                        </TouchableOpacity>
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
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
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
        backgroundColor: '#fff',
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
        flexDirection: 'row',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    filterParam: {
        width: 75,
        height: 75,
        marginLeft: 20,
        marginRight: 20,
        borderColor: '#e0e1e4',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ebecef',
    }
});