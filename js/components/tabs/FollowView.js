import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'

import {
    fetchCompanysAsync
} from '../../actions/company'

const lvDataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => true
})
const mapStateToProps = (state, ownProps) => {
    const company = state.company.toJS()

    return {
        followList: company.followList
    }
}
const mapDispatchToProps = {
    search: fetchCompanysAsync
}

class FollowView extends React.Component {
    componentDidMount(){

    }

    render() {
        const { followList } = this.props
        const dataSource = lvDataSource.cloneWithRows(followList)

        return (
            <View style={styles.container}>
                <ListView
                    dataSource={dataSource}
                    renderRow={this.handleRenderRow}
                    onEndReachedThreshold={100}
                    />
            </View>
        )
    }

    handleRenderRow(...args) {
        const [rowData, a, rowIndex] = args

        if (!!rowData && !!rowData.company_name) {
            return (
                <TouchableOpacity style={[styles.listItem, rowIndex !== 0 && styles.listItemSpit]}>
                    <Text>{rowData.company_name}</Text>
                </TouchableOpacity>
            )
        }
        return null
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowView)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    search: {
        flex: 0,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-around',
        backgroundColor: '#9ba1f1',
        borderBottomWidth: 1,
    },
    iconBackWrapper: {
        flex: 0,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchInputWrapper: {
        flex: 1,
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    iconSortWrapper: {
        flex: 0,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    searchResult: {
        flex: 0,
        height: 20,
        justifyContent: 'center',
        paddingLeft: 6,
        backgroundColor: '#999',
    },
    listCount: {
        color: 'red',
    },

    list: {
        flex: 1,
        backgroundColor: '#999',
    },
    listItem: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    listItemSpit: {
        marginTop: 2,
        borderTopWidth: 1,
    }
})