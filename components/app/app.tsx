import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  TextInput,
  Button,
  ScrollView,
  Dimensions
} from 'react-native';

import {IGig, createGig, testGigs} from "../../types/gig";
import Gig from "../gig";

import {BarChart} from "react-native-chart-kit";
import { Dataset, ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';


const App = () => {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number|undefined>();
  const [total, setTotal] = useState<number>(0);
  const [gigs, setGigs] = useState<IGig[]>(testGigs);

  useEffect( () => {
     const t = gigs.reduce( (s,g) => s+g.amount, 0);
     setTotal(t);
  }, [gigs]);

  const addGig = () => {
    if(description && amount>0) {
      const g = createGig(description, amount);
      setGigs([...gigs, g]);
    }
  };

  const ggs: JSX.Element[] = [];
  for(let i=0; i<gigs.length; i++) {
    const g = gigs[i];
    ggs.push(<Gig key={i} gig={g} />)
  }
  const strAmount = (amount) ? ""+amount: "";

  const barChartDataset: Dataset = {
    data: [
      Math.random()*30,
      Math.random()*30,
      Math.random()*30,
      Math.random()*30,
      Math.random()*30,
      Math.random()*30,
    ]
  };
  const barChartData: ChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [barChartDataset]
  };
  const barChartWidth = Dimensions.get("window").width;
  const barChartColorFunc = (opacity = 1) => `rgba(0, 0, 0, ${opacity})`;
  const barChartConfig: AbstractChartConfig = {
      backgroundGradientFrom: "#1e2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#081300",
      backgroundGradientToOpacity: 0.5,
      color: barChartColorFunc,
      strokeWidth: 2,
      barPercentage: 0.5,
      useShadowColorFromDataset: false
  };

  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Todo app</Text>           
        </View>
        

        <Text> Chart </Text>

        <BarChart 
              style={appStyles.barChart}
              data={barChartData}
              width={barChartWidth}
              height={300}
              yAxisLabel="$"
              yAxisSuffix="k"
              chartConfig={barChartConfig}
              verticalLabelRotation={30}
        />

        <TextInput  
              style={appStyles.gigDescription}
              value={description||""}
              onChangeText = {(text) => setDescription(text)}
              placeholder="Enter description"
        />
        <TextInput  
              style={appStyles.gigAmount}
              value={strAmount}
              keyboardType="numeric"
              onChangeText = {(text) => setAmount(Number(text))}
              placeholder="Enter the amount you made in USD ($)"
        />
        <Button 
              title="Add gig" 
              onPress={() => addGig()}
        />
      </SafeAreaView>
      <StatusBar/>
    </>
  );
};

const appStyles = StyleSheet.create({   
  gigDescription: {
    height: 40,
    margin: 20,
    borderColor: "red",
    borderWidth: 1
  },
  gigAmount: {
    height: 40,
    margin: 20,
    borderColor: "red",
    borderWidth: 1
  },
  scrollView: {
    height: "10%"
  },
  barChart: {
      marginVertical: 8,
      borderRadius: 16        
  }
});

export default App;
