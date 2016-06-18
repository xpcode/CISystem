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

class LoginView extends React.Component {

    validateEmail(str) {
        const REEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const REMobilePhone = /^1\d{10}$/

        return REEmail.test(str) || REMobilePhone.test(str);
    }

    handlePress(type) {
        // if (type === 'submit') {
        //     const { login } = this.props
        //     const { userName, password } = this.state
        //     const { refUserName, refPassword } = this.refs

        //     if (userName.length === 0 || !this.validateEmail(userName)) {
        //         alert('请输入正确的用户名!')
        //     } else if (password.length < 6) {
        //         alert('请输入正确的密码!')
        //     } else {
        //         // login(userName, password)
        //     }

        // } else if (type === 'resetPwd') {
        //     // TODO: navigate to resetpwd continer
        // }
    }

    handleChangeText(stateKey, value) {
        this.setState({
            [stateKey]: value.trim()
        })
    }

    render() {console.log(991)
        return (
            <View style={[styles.loginBox]}>
                <TextInput
                    ref="refUserName"
                    autoFocus={true}
                    style={[styles.base, styles.input]}
                    onChangeText={this.handleChangeText.bind(this, 'userName') }
                    placeholder={'邮箱或者手机号'}
                    returnKeyType={"next"}
                    maxLength={ 16 }
                    />
                <View style={styles.underline}/>

                <TextInput
                    ref="refPassword"
                    style={[styles.base, styles.input]}
                    returnKeyType={"next"}
                    placeholder={'密码'}
                    onChangeText={this.handleChangeText.bind(this, 'password') }
                    maxLength={ 16 }
                    secureTextEntry={ true }
                    />
                <View style={styles.underline}/>

                <View style={styles.options}>
                    <TouchableOpacity style={styles.loginButton} onPress={ this.handlePress.bind(this, 'submit') }>
                        <Text style={[styles.base, styles.button]}> 登录 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.resetPassword} onPress={ this.handlePress.bind(this, 'resetPwd') }>
                        <Text style={[styles.base, styles.button]}> 忘记密码 </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default connect()(LoginView)


const styles = StyleSheet.create({
    base: {
        fontSize: 18
    },

    loginBox: {
        marginTop: 0,
        marginLeft: 30,
        marginRight: 30,
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    input: {
        height: 45,
        paddingLeft: 20,
        backgroundColor: 'transparent',
    },

    button: {
        fontSize: 20
    },

    underline: {
        alignSelf: 'stretch',
        height: 1,
        paddingLeft: 10,
        marginBottom: 10,
        backgroundColor: 'gray'
    },

    footerWrapper: {
        flex: 0,
        flexDirection: 'row',
        height: 60,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 40
    },

    options: {
        height: 50,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    loginOptions: {
        flex: 0,
        height: 100,
        alignSelf: 'stretch',
        paddingTop: 20,
    },

})