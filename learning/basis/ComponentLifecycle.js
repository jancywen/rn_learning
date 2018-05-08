/**
 * rn_learning
 * ComponentLifecycle
 *
 * Created by wangwenjie on 2018/5/7 下午4:25
 */

/**
 * 1,组件生命周期
 * 2,父子组件传值
 * 3,状态机
 */


import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class ComponentLifecycleEntrance extends Component {

    constructor(props){
        super(props)
        this.state = ({
            name:'韦小宝',
            count: 0
        })
    }

    componentWillMount() {
        console.log('-------父组件的componentWillMount-------')
    }

    componentDidMount() {
        console.log('-------父组件的componentDidMount-------')
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.changeName}>
                    <Text style = {{fontSize: 20, marginTop:20, marginBottom:10}}>{'change'}</Text>
                </TouchableOpacity>
                <ComponentLifecycle name={this.state.name}
                                    callBack={this.callBack}
                                    testCallBack={this.testCallBack}
                                    test={this.testFunc}/>
            </View>
        )
    }


    changeName = () => {
        this.setState({
            name: '老夫子'
        })
    }


    callBack = (i) => {
        if (i == 3){
            this.setState({
                name:'段誉'
            })
        }
    }

    testCallBack = () => {
        this.setState({
            count: this.state.count + 1
        })
        if (this.state.count == 2) {
            this.setState({
                name: '测试一波'
            })
        }
    }
    testFunc = () => {
        this.setState({
            name:'tet'
        })
        console.log('调用了....testFunction')
    }
}


class ComponentLifecycle extends Component {

    /**
     * 构造函数 组件被加载前最先调用, 仅调用一次
     * 在此函数中定义 状态机变量
     */
    constructor(props) {
        super (props)

        console.log('------constructor-------')

        this.state={
            count:0
        }
    }

    /**
     * 在初渲染前被执行, 只被执行一次
     * 子组件的componentWillMount函数会在父组件componentWillMount函数之后执行
     * 如果在这个函数中调用setState函数改变状态机的值,不会执行渲染操作,等待这个函数执行完毕后再执行初始渲染
     */
    componentWillMount() {

        console.log('-------componentWillMount-------')
    }

    /**
     * 初次渲染执行完毕后马上执行, 只执行一次
     * 子组件的componentDidMount函数在父组件componentDidMount函数执行前调用
     * 请求数据代码可以在此函数中调用
     */
    componentDidMount() {
        console.log('-------componentDidMount-------')
    }

    /**
     * 初始渲染执行完毕后 当组件接收到新的props时调用 初次渲染时不会被调用
     * 如果在这个函数中调用setState函数改变状态机的值,不会执行对这些状态机改变的渲染操作,等待这个函数执行完毕后一起渲染
     * @param nextProps     object参数,新的props 用this.props 访问老的props
     */
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        console.log('------componentWillReceiveProps------')
    }

    /**
     * 初次渲染完成后, 当组件接收到新的props 或者state时调用
     * @param nextProps     新的props
     * @param nextState     新的state
     * @returns {boolean} 返回值 False True
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('=--------shouldComponentUpdate-----')
        if (nextState.count == 5) {
            return false
        }

        return true
    }

    /**
     * 初次渲染后, 重新渲染组件前调用
     * 不可在此方法中改变状态机变量
     * @param nextProps     新的props
     * @param nextStat      新的state
     */
    componentWillUpdate(nextProps, nextStat){

        console.log('------componentWillUpdate----')
    }

    /**
     * 初次渲染后  重新渲染组件完成后调用
     * @param prevProps     渲染前的props
     * @param prevState     渲染前的state
     */
    componentDidUpdate(prevProps, prevState) {

        console.log('-----componentDidUpdate-------')

    }

    /**
     * 组件卸载前调用
     */
    componentWillUnmount() {
        console.log('-------componentWillUnmount-------')
    }


    render() {
        return(
            <View style={styles.container}>

                <Text
                    style={styles.textStyle}

                    onPress={()=>{
                        this.setState({
                            count: this.state.count+1,
                        })

                        // this.callback(this.state.count)
                        // this.props.callBack(this.state.count)

                        // this.props.testCallBack()
                        this.props.test()
                    }
                    }
                >点点点...{this.props.name}</Text>

                <Text style={{fontSize: 30}}>敲打{this.state.count}次</Text>
            </View>
        )

    }
    callback = (i) => {
        this.props.callBack(i)
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    textStyle: {
        fontSize:20,
        backgroundColor:'red'
    }
})
