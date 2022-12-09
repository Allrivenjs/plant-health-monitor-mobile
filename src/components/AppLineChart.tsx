import {FC} from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

interface DatasetLineChart {
  data: number[];
}

interface AppLineChartProps {
  backgroundColor: string;
  lightColor: string;
  labels: string[];
  datasets: DatasetLineChart[];
}
    

export const AppLineChart: FC<AppLineChartProps> = ({
  backgroundColor,
  lightColor,
  labels,
  datasets,
}) => {
  return (
    <LineChart
      data={{
        labels: labels,
        datasets: datasets,
      }}
      width={Dimensions.get('window').width - 60} // from react-native
      height={209}
      yAxisSuffix='%'
      chartConfig={{
        backgroundColor: backgroundColor,
        backgroundGradientFrom: backgroundColor,
        backgroundGradientTo: backgroundColor,
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: '6',
          strokeWidth: '2',
          stroke: lightColor,
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};
