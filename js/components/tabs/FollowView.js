import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Navigator,
} from 'react-native'

class OwnView extends React.Component {
    render(){
        return (
            <View style={{backgroundColor: 'red'}}>
                <View>
                    <Text>智能客户系统</Text>
                    <Text>http://cis.chaoke.cn</Text>
                </View>
                <View>
                    <Text>请输入企业名..</Text>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    drawer: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
    },
    header: {
        padding: 20,
        justifyContent: 'flex-end',
    },
    name: {
        marginTop: 10,
        color: 'white',
        fontSize: 12,
    },
});

export default OwnView