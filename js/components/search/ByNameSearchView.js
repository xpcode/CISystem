import React from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
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
        companyList: company.companyList,
        fetching: company.fetching,
    }
}
const mapDispatchToProps = {
    search: fetchCompanysAsync
}

class SearchView extends React.Component {
    constructor(props) {
        super(props)

        this.handleChangeText = this.handleChangeText.bind(this)
        this.handleRenderRow = this.handleRenderRow.bind(this)
        this.handlePressItem = this.handlePressItem.bind(this)
    }

    handleChangeText(text) {
        const { search } = this.props
        search(text)
    }

    handleRenderRow(...args) {
        const [rowData, a, rowIndex] = args

        if (!!rowData && !!rowData.company_name) {
            return (
                <TouchableOpacity onPress={this.handlePressItem} style={[styles.listItem, rowIndex !== 0 && styles.listItemSpit]}>
                    <Text>{rowData.company_name}</Text>
                </TouchableOpacity>
            )
        }
        return null
    }

    handlePressItem() {
        Actions.companyInfo()
    }

    render() {
        const {
            fetching,
            companyList,
        } = this.props

        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <View style={styles.iconBackWrapper}>
                        <Icon
                            name="ios-arrow-back-outline"
                            size={30}
                            onPress={e => Actions.pop() } />
                    </View>
                    <TouchableOpacity style={styles.searchInputWrapper}>
                        <TextInput
                            style={styles.searchInput}
                            autoCorrect={false}
                            autoFocus={true}
                            maxLength={50}
                            onChangeText={this.handleChangeText}
                            placeholder="请输入企业名.."
                            selectTextOnFocus={true}
                            selectionColor="red"
                            />
                    </TouchableOpacity>
                    {this.renderSortIcon(companyList.length === 0) }
                </View>
                {this.renderSearchProgressBar(fetching, companyList.length) }
                <View style={styles.list}>
                    {this.renderSearchResult() }
                </View>
            </View>
        )
    }

    renderSearchResult() {
        const { companyList } = this.props
        const dataSource = lvDataSource.cloneWithRows(companyList)

        if (companyList.length === 0) {
            return (
                <View style={styles.nodata}>
                    <Text>暂无数据</Text>
                </View>
            )
        }

        return (
            <ListView
                dataSource={dataSource}
                renderRow={this.handleRenderRow}
                onEndReachedThreshold={100}
                pageSize={5}
                />)
    }

    renderSortIcon(isNoData) {
        if (isNoData) return null

        return (
            <View style={[styles.iconSortWrapper]}>
                <Icon
                    size={30}
                    name="ios-list-outline" />
            </View>
        )
    }

    renderSearchProgressBar(fetching, dataNum) {
        LOG(dataNum)
        if (fetching === true) {
            return (
                <View style={styles.searchResult}>
                    <Text style={{ fontSize: 12 }}>查询中..</Text>
                </View>
            )
        } else if (dataNum === 0) {
            return null
        }

        return (
            <View style={styles.searchResult}>
                <Text style={{ fontSize: 12 }}>搜索到 <Text style={styles.listCount}>{dataNum}</Text> 条 企业 数据</Text>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView)


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
        backgroundColor: '#e8e8e8',
    },
    nodata: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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