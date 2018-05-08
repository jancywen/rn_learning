/**
 * rn_learning
 * ComponentTextInput
 *
 * Created by wangwenjie on 2018/5/8 下午2:35
 */

/**
 * TextInput 输入框的基本属性及回调方法
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'


export default class ComponentTextInput extends Component {

    constructor(props){
        super(props)
        this.state=({
            user:'' ,
            password:''
        })
    }
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={1}
                                  onPress={() => {this.loseFocus()}}>
                    <TextInput ref={'user'}
                               style={[styles.textInputStyle, {marginTop:160}]}
                               placeholder={'用户名'}/>

                    <TextInput ref={'password'}
                               style={styles.textInputStyle}
                               placeholder={'密码'}
                               maxLength={16}
                               numberOfLines={1}
                               multiline={false}
                               secureTextEntry={true}
                               clearTextOnFocus={true}
                               clearButtonMode={'while-editing'}
                               keyboardType={'default'}
                               returnKeyType={'send'}
                               onFocus={(text) => {
                                   console.log('onFocus')
                               }}
                               onChange={(text) => {
                                   console.log('onChange')
                               }}
                               onChangeText={(password) => {
                                   this.setState({password})
                                   console.log('onChangeText')
                               }}
                               onEndEditing={(text)=> {
                                   console.log('onEndEditing')
                               }} />

                    <TouchableOpacity style={styles.btnStyle} onPress={this.btnOnPress}>
                        <Text style={styles.textStyle}>{'确定'}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        )
    }

    btnOnPress = () => {
        this.loseFocus()
        console.log(this.state.password)
    }

    /**
     * 获得焦点
     */
    getFocus = () => {
        this.refs.user.focus()
    }
    /**
     * 失去焦点
     */
    loseFocus = () => {
        this.refs.user.blur()
        this.refs.password.blur()
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:20,
        flexDirection:'column',
        // justifyContent:'center',
    },
    textInputStyle: {
        marginLeft:30,
        marginRight:30,
        height:35,
        borderBottomColor:'#aaa',
        borderBottomWidth:0.5,
        marginBottom:20
    },
    btnStyle: {
        margin:30,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#458fff'
    },
    textStyle:{
        fontSize:20,
        color:'#fff'
    }

})