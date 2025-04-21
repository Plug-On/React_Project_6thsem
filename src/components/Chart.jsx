import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = () => {
    const options = {
        title: {
            text: "My first Highchart"
        },
        series: [
            {
                name: "new Series",
                data:[1,5,3,4,2,9]
            }
        ]
    };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart