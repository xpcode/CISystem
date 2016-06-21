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
import HeadBar from '../common/HeadBar'

const lvDataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => true
})
const mapStateToProps = (state, ownProps) => {
    const company = state.company.toJS()

    return {
        companyList: company.companyList
    }
}
const mapDispatchToProps = {
    search: fetchCompanysAsync
}

class ByAreaFilterView extends React.Component {
    constructor(props) {
        super(props)

        this.handleChangeText = this.handleChangeText.bind(this)
    }

    handleChangeText(text) {
        const { search } = this.props
        search(text)
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

    render() {
        const { companyList } = this.props
        const dataSource = lvDataSource.cloneWithRows(companyList)

        return (
            <View style={styles.container}>
                <HeadBar>
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
                    {this.renderSortIcon(companyList) }
                </HeadBar>
                {this.renderSearchProgressBar(companyList) }
                <View style={styles.list}>
                    <ListView
                        dataSource={dataSource}
                        renderRow={this.handleRenderRow}
                        onEndReachedThreshold={100}
                        pageSize={5}
                        />
                </View>
            </View>
        )
    }

    renderSortIcon(companyList) {
        if (companyList.length > 0) {
            return (
                <View style={[styles.iconSortWrapper]}>
                    <Icon
                        size={30}
                        name="ios-list-outline" />
                </View>
            )
        }
        return null
    }

    renderSearchProgressBar(companyList) {
        const { length } = companyList

        if (length > 0) {
            return (
                <View style={styles.searchResult}>
                    <Text style={{ fontSize: 12 }}>搜索到 <Text style={styles.listCount}>{length}</Text> 条 企业 数据</Text>
                </View>
            )
        }
        return null
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ByAreaFilterView)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    searchInputWrapper: {
        flex: 1,
        borderLeftWidth: 1,
        borderColor: '#d4d2d2',
    },
    searchInput: {
        paddingLeft: 10,
        borderWidth: 0,
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
    listItem: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    listItemSpit: {
        marginTop: 1,
    }
})