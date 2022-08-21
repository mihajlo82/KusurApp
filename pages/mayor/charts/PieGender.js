import PieChart, {
  Series,
  Label,
  Connector,
  Size,
} from 'devextreme-react/pie-chart';
import useDataChart from './useDataChart';

const stylePie = {marginTop:'56px', paddingRight:'20px', marginLeft:'-41px'}

  const PieGender = ({data}) => {
    const {myObj} = useDataChart('Gender');

    return (
      <div style={stylePie}>
        <PieChart
          id="pie"
          dataSource={myObj[0] !== undefined ? myObj[0].graphValues : data}
          palette="Bright" 
        >
          <Series
          argumentField='name'
          valueField='value' 
          >
            <Label  visible={true}>
              <Connector visible={true} width={1} />
            </Label>
          </Series>

          <Size width={351} height={230}  />
        </PieChart>
      </div>
    );
  }

export default PieGender;
