/**
 * rn_learning
 * ComponentFlatList
 *
 * Created by wangwenjie on 2018/5/10 下午3:51
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native'

export default class ComponentFlatList extends Component {

    constructor(prpos){
        super(prpos)
        this.state=({
            listRefresh: false
        })
    }

    render() {
        return(
            <FlatList ref={'flatList'}
                      ListHeaderComponent={<View style={{height:40, backgroundColor:'green'}}></View>}
                      ListFooterComponent={<View style={{height:40, backgroundColor:'red'}}></View>}

                      ListEmptyComponent={<Text style={{height:50}}>{'控控乳液'}</Text>}

                      // 这两个没起作用
                      getItemLayout={(data, index) => ( {length: 50, offset: 55 * index, index} )}
                      SeparatorComponent={<Text style={{height:5}}>{'我是分割线'}</Text>}

                      onRefresh={this.listRefresh}
                      refreshing={this.state.listRefresh}
                      data={[{key: 'a'}, {key: 'b'}]}
                      renderItem={({item, index}) =>
                          (
                              <TouchableOpacity onPress={() => this._onPressItem(item, index)}>
                                  <View style={{backgroundColor:'#787878', justifyContent:'center',height: 50, alignItems:'center'}}>
                                      <Text style={{fontSize:20}}>
                                          {item.key + "-" + index}
                                      </Text>
                                  </View>
                              </TouchableOpacity>

                          )
                      } />
        )
    }



    listRefresh = ()=> {

        this.setState({
            listRefresh: true
        })

    }


    _onPressItem = (item, index) => {
        console.log(index)
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})