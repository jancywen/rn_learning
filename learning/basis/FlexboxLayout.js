/**
 * rn_learning
 * FlexboxLayout
 *
 * Created by wangwenjie on 2018/5/8 下午1:05
 */


/**
 * flexbox 布局
 * 组件化
 *
 * flexbox_chart 文件夹中是一份 flexbox的图解
 *
 * flexDirection 决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列, 默认值是竖直轴(column)方向。
 * justifyContent 决定其子元素沿着主轴的排列方式  flex-start、center、flex-end、space-around、space-between
 * alignItems 决定其子元素沿着次轴的排列方式 可选项有：flex-start、center、flex-end以及stretch(拉伸,次轴方向不可以有固定长度)。
 * this.props.children 当前组件内部的子组件
 */


import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'



export default class BoxContainer extends Component {
    render() {
        return (
            <MargginBox>
                <BorderBox>
                    <PaddingBox>
                        <ElementBox>
                        </ElementBox>
                    </PaddingBox>
                </BorderBox>
            </MargginBox>
        )
    }
}

class MargginBox extends Component {
    render() {
        return (
            <View style={[BoxStyles.margginBox]}>
                <Box childName="borderBox"  height="height400" width="width400" boxName="margin"
                     classBg="bgorange">{this.props.children}</Box>
            </View>
        );
    }
}

class BorderBox extends Component {
    render() {
        return (
            <Box childName="paddingBox"  height="height300" width="width300" boxName="border"
                 classBg="bggreen" >{this.props.children}</Box>
        );
    }
}

class PaddingBox extends Component {
    render() {
        return (
            <Box childName="elementBox"  height="height200" width="width200" boxName="padding"
                 classBg="bgyellow" >{this.props.children}</Box>
        )
    }
}

class ElementBox extends Component {
    render() {
        return (
            <View style={[BoxStyles.box,BoxStyles.height100,BoxStyles.bgblue]}>
                <View style={[BoxStyles.measureBox]}>
                    <View style={[BoxStyles.right]}><Text>height</Text></View>
                </View>
                <View style={[BoxStyles.bottom,BoxStyles.height50]} ><Text>width</Text></View>
                <View style={[BoxStyles.label]}><Text style={[BoxStyles.white]}>element</Text></View>
                <View style={[BoxStyles.widthdashed]}></View>
                <View style={[BoxStyles.heightdashed]}></View>
            </View>
        )
    }
}

class Box extends Component {
    render() {
        return (
            <View style={[BoxStyles.box,BoxStyles[this.props.width],BoxStyles[this.props.height]]}>
                <View style={[BoxStyles.top,BoxStyles.height50,BoxStyles[this.props.classBg]]}>
                    <Text>top</Text>
                </View>
                <View style={[BoxStyles[this.props.childName]]}>
                    <View style={[BoxStyles.left,BoxStyles[this.props.classBg]]}>
                        <Text>left</Text>
                    </View>
                    {this.props.children}
                    <View style={[BoxStyles.right,BoxStyles[this.props.classBg]]}>
                        <Text>right</Text>
                    </View>
                </View>
                <View style={[BoxStyles.bottom,BoxStyles.height50,BoxStyles[this.props.classBg]]}>
                    <Text>bottom</Text>
                </View>
                <View style={[BoxStyles.label]}>
                    <Text style={[BoxStyles.white]}>{this.props.boxName}</Text>
                </View>
            </View>
        );
    }
}

const BoxStyles = StyleSheet.create({
    "height50": {
        height: 50,
    },
    "height400": {
        height: 400,
    },
    "height300": {
        height: 300,
    },
    "height200": {
        height: 200,
    },
    "height100": {
        height: 100,
    },
    "width400": {
        width: 400,
    },
    "width300": {
        width: 300,
    },
    "width200": {
        width: 200,
    },
    "width100": {
        width: 100,
    },
    "bgorange": {
        backgroundColor: "#F9CC9D",
    },
    "bgyellow": {
        backgroundColor: "#FDDD9B",
    },
    "bggreen": {
        backgroundColor: "#C2CF8A",
    },
    "bgblue": {
        backgroundColor: "#8BB5C0",
    },
    "margginBox":{
        "position": "absolute",
        "top": 50,
        "paddingLeft":7,
        "paddingRight":7,
    },
    "box": {
        flexDirection: "column",
        flex: 1,
        position: "relative",
    },
    "label": {
        top: 0,
        left: 0,
        paddingTop: 0,
        paddingRight: 3,
        paddingBottom: 3,
        paddingLeft: 0,
        position: "absolute",
        backgroundColor: "#000000",
    },
    "top": {
        justifyContent: "center",
        alignItems: "center",
    },
    "bottom": {
        justifyContent: "center",
        alignItems: "center",
    },
    "left": {
        width: 50,
        justifyContent: "space-around",
        alignItems: "center",
    },
    "right": {
        width: 50,
        justifyContent: "space-around",
        alignItems: "center",
    },
    "heightdashed": {
        bottom: 0,
        top: 0,
        right: 20,
        borderLeftWidth: 1,
        position: "absolute",
        borderLeftColor: "#000000"
    },
    "widthdashed": {
        bottom: 25,
        left: 0,
        right: 0,
        borderTopWidth: 1,
        position: "absolute",
        borderTopColor: "#000000"
    },
    "black": {
        color: "#000000",
        fontWeight:"900",
    },
    "white": {
        color: "white",
        fontWeight:"900",
    },
    "borderBox":{
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    "paddingBox":{
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    "elementBox":{
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    "measureBox":{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems:"flex-end"
    }
})