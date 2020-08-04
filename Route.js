/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Homes from './Menu/Home/Homes';
import Masakan from './Menu/Masakan/Masakan';
import Restaurant from './Menu/Restaurant';
import Kota from './Menu/Kota/Kota';
import Kategori from './Menu/Kategori/Kategori';

const Router = createStackNavigator(
  {
    Homes: {
      screen: Homes,
    },
    Masakan: {
      screen: Masakan,
    },
    Restaurant: {
      screen: Restaurant,
    },
    Kota: {
      screen: Kota,
    },
    Kategori: {
      screen: Kategori,
    },
  },
  {initialRouteName: 'Homes'},
);

export default createAppContainer(Router);
