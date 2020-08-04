import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Container,
} from 'native-base';
import Footers from '../Footers';
import axios from 'axios';

export default class Kategori extends Component {
  static navigationOptions = {headerShown: false};

  constructor() {
    super();
    this.state = {
      dataCategory: [],
      dataCollections: [],
    };
  }

  getDataCategory = () => {
    axios
      .get(`https://developers.zomato.com/api/v2.1/categories`, {
        headers: {'user-key': '6d0885c8f71ca044d1d39f36d49b8c0e'},
      })
      .then(res => {
        this.setState({
          dataCategory: res.data.categories,
        });
      });
  };

  getDataCollections = () => {
    axios
      .get(`https://developers.zomato.com/api/v2.1/collections?city_id=74`, {
        headers: {'user-key': '6d0885c8f71ca044d1d39f36d49b8c0e'},
      })
      .then(res => {
        this.setState({
          dataCollections: res.data.collections,
        });
      });
  };

  componentDidMount() {
    this.getDataCategory();
    this.getDataCollections();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Container style={{flex: 3}}>
          <Content>
            {this.state.dataCollections.map((data, key) => {
              return (
                <Card key={key}>
                  <CardItem cardBody>
                    <Image
                      style={{height: 200, width: null, flex: 1}}
                      source={{
                        uri: data.collection.image_url,
                      }}
                    />
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>{data.collection.title}</Text>
                      <Text note>{data.collection.description}</Text>
                    </Body>
                  </CardItem>
                </Card>
              );
            })}
          </Content>
        </Container>
        <Container style={{flex: 1}}>
          <Text style={{margin: 10}}> Kategori </Text>
          <Content horizontal style={{marginTop: 20}}>
            {this.state.dataCategory.map((data, key) => {
              return (
                <Button rounded key={key} style={{margin: 10}}>
                  <Text>{data.categories.name}</Text>
                </Button>
              );
            })}
          </Content>
        </Container>
        <Footers />
      </View>
    );
  }
}
