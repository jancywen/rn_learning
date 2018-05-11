/**
 * rn_learning
 * ComponentSectionList
 *
 * Created by wangwenjie on 2018/5/11 上午10:08
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    SectionList
} from 'react-native'

export default class ComponentSectionList extends Component {

    constructor(props) {
        super(props);
    }

    _renderItem = (info) => {
        var txt = '  ' + info.item.title;
        return <Text
            style={styles.listItem}>{txt}</Text>
    }

    _sectionComp = (info) => {
        var txt = info.section.key;
        return <Text
            style={styles.listSection}>{txt}</Text>
    }

    render() {
        var sections = [
            { key: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
            { key: "B", data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
            { key: "C", data: [{ title: "成吉思汗" }, { title: "超市快递" }] },
            { key: "W", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" },{ title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] },
        ];

        return (
            <View style={styles.container}>
                <SectionList
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem}
                    sections={sections}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                    ListHeaderComponent={() =>
                        <View style={styles.listHeaderOrFooter}>
                            <Text style={styles.headerOrFooterText}>通讯录</Text>
                        </View>}
                    ListFooterComponent={() =>
                        <View style={styles.listHeaderOrFooter}>
                            <Text style={styles.headerOrFooterText}>通讯录尾部</Text>
                        </View>}
                />
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        // flex: 1
    },
    listHeaderOrFooter: {
        backgroundColor: '#25B960',
        alignItems: 'center',
        height: 30,
        justifyContent:'center'
    },
    headerOrFooterText: {
        fontSize: 18,
        color: '#ffffff'
    },
    listSection: {
        height: 50,
        textAlign: 'center',
        backgroundColor: '#9CEBBC',
        color: 'white',
        fontSize: 30,

    },
    listItem: {
        height: 60,
        textAlignVertical: 'center',
        backgroundColor: "#ffffff",
        color: '#5C5C5C',
        fontSize: 15,
    }


})
