/**
 * rn_learning
 * index
 *
 * Created by wangwenjie on 2018/5/8 上午11:03
 */

import { AppRegistry } from 'react-native';

import ComponentLifecycleEntrance from './ComponentLifecycle'

import FlexboxLayout from './FlexboxLayout'

// import ComponentTextInput from './ComponentTextInput'

import ComponentFlatList from './ComponentFlatList'


import ComponentSectionList from './ComponentSectionList'

// AppRegistry.registerComponent('rn_learning', () => ComponentLifecycleEntrance)

// AppRegistry.registerComponent('rn_learning', () => FlexboxLayout)

// AppRegistry.registerComponent('rn_learning', () => ComponentTextInput)

// AppRegistry.registerComponent('rn_learning', () => ComponentFlatList)

AppRegistry.registerComponent('rn_learning',  () => ComponentSectionList)