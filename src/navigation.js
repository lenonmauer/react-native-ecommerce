import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/Main';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

import { colors } from './styles';

const TabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: ({ focused }) => (
          <Icon name="home" size={24} color={focused ? colors.primary : colors.dark} />
        ),
      },
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: ({ focused }) => (
          <Icon name="cart" size={24} color={focused ? colors.primary : colors.dark} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      showLabel: false,
    },
  },
);

const RootNavigation = createStackNavigator(
  {
    Nested: {
      screen: TabNavigation,
      navigationOptions: ({ navigation }) => {
        const currentRouteName = navigation.state.routes[navigation.state.index].routeName;

        const titles = {
          Home: 'GoCommerce',
          Cart: 'Carrinho',
        };

        return {
          title: titles[currentRouteName],
          headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          },
        };
      },
    },
    ProductDetails,
  },
  {
    initialRouteName: 'Nested',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.white,
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTintColor: colors.primary,
    },
  },
);

export default createAppContainer(RootNavigation);
