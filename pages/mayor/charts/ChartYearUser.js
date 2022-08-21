import { Chart, SeriesTemplate, CommonSeriesSettings, Legend, Size} from 'devextreme-react/chart';
import { dataSource } from '../../dataChart/DataChart.js';
import useDataChart from './useDataChart.js';

const ChartYearUser = () =>  {
  const {myObj} = useDataChart('Age');

    return (
      <div style={{position:'absolute', top:'100px'}}>
        <Chart
            id="chart"
            palette="Soft"
            dataSource={myObj[0] !== undefined ? myObj[0].graphValues : dataSource}>
            <CommonSeriesSettings
                argumentField="name"
                valueField="value"
                type="bar"
                ignoreEmptyPoints={true}
                />
            <SeriesTemplate nameField="name" />
            <Size height={166} width={267} />
            <Legend visible={false} />

          </Chart>
      </div>
    );
  }

export default ChartYearUser;