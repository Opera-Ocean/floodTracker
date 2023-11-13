import { LineChart } from "react-native-gifted-charts";

import { Colors, Spaces, fontSizes } from '../../Constants/theme';

export const MeasurementLineChart = ({line}) =>{

    return(        
        <LineChart data ={line}
            areaChart  
            initialSpacing={0}
            spacing={Spaces.medium}
            thickness={fontSizes.small / 5}
            hideRules
            isAnimated
            hideYAxisText
            yAxisColor={Colors.secondary}
            xAxisColor={Colors.secondary}
            color={Colors.success} 
            dataPointsColor={Colors.off}
            textColor={Colors.secondary}
            textFontSize={fontSizes.medium}
            />
    )
}
