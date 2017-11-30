import React, {Component} from 'react';
import {TouchableWithoutFeedback, Button} from 'react-native';
import {observable, computed} from 'mobx';
import {observer, inject} from 'mobx-react';
import styled from 'styled-components/native';
import {AddNum} from './types';

type Props = {
  addNum: AddNum
};


const Container = styled.View`
    flex-direction : row;
    height: 200;
    background-color : #ffffff;
`;


const Text = styled.Text`
    width : 80;
    height : 60;
    color : #FDE000;
    background-color : #ffffff;
    font-size : 20;
`;

@inject('addNum')
@observer
export default class Demo extends Component<Props> {

  render() {
    return (
      <Container>
        <Text>
          {this.props.addNum.num}
        </Text>
        <Button
          title='+'
          onPress={this.props.addNum.addNum}/>
      </Container>
    );
  }
}
