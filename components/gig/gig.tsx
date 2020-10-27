import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { IGig } from '../../types/gig';

interface IProps {
  gig: IGig;
}

const Gig = (props: IProps) => {
  return (
    <View>
      <Text style={gigStyles.description}>
        {props.gig.description}
      </Text>
      <Text style={gigStyles.amount}>
        ${props.gig.amount}
      </Text>
    </View>
  );
};

const gigStyles = StyleSheet.create({
  description: {
    fontSize: 10,
    fontWeight: "bold"
  },
  amount: {
    fontSize: 10,
    fontWeight: "bold"
  },  
})

export default Gig;
