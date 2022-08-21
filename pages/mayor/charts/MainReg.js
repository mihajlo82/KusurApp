import chartStyle from '../../../styles/mayor/Chart.module.css'
import 'devextreme/data/odata/store';
import Chart, {
  ValueAxis,
  ArgumentAxis,
  CommonPaneSettings,
  Grid,
  Series,
  Legend,
  Size,
  Border,
  LoadingIndicator,
} from 'devextreme-react/chart';
import { dataSource } from '../../dataChart/DataChart';
import useDataChart from './useDataChart';

const MainReg = () => {
  const {myObj} = useDataChart('KpiCollectedVsSpentPoints');

    return (
      <div  className={chartStyle.mainRegChart}>
        <Chart
          dataSource={myObj[0] !== undefined ? myObj[0].graphValues : dataSource}>
          <Size height={166}  width={576} />
          <ValueAxis valueType="numeric">
            <Grid opacity={0.2} />
          </ValueAxis>

          <ArgumentAxis type="discrete"  >
            <Grid visible={true} opacity={0.5} />
          </ArgumentAxis>
          <CommonPaneSettings>
            <Border
              visible={true}
              width={2}
              top={false}
              right={false}
            />
          </CommonPaneSettings>
          <Series 
            argumentField="value"
            valueField="value2"
            type="spline"
          />
          <Legend visible={false} />
          <LoadingIndicator enabled={true} />
        </Chart>
      </div>
    );
  }
export default MainReg;
