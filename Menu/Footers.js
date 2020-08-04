import React, {Component} from 'react';
import {Footer, FooterTab, Button, Icon, Text} from 'native-base';
import {withNavigation} from 'react-navigation';

class Footers extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate('Homes');
            }}>
            <Icon name="apps" active />
            <Text>Home</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate('Masakan');
            }}>
            <Icon name="pizza" />
            <Text>Masakan</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate('Kota');
            }}>
            <Icon active name="navigate" />
            <Text>Kota</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate('Kategori');
            }}>
            <Icon name="person" />
            <Text>Kategori</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default withNavigation(Footers);
