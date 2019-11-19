import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
  render() {
		const data = {
  labels: ["NUT", "WAL", "VTX", "LC", "PTI","COMC","IQ","OWN","MTS", "DAPP", "SENSE","BG","PLO","MEETONE","Others"],
  datasets: [
    {
			label: "Holdings (dollars)",
			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","gray"],
			data: [11000,9000,7500,6000,5000,4500,3000,1000,500,400, 300, 200, 100, 100, 5000]
    }
  ]
};
    return (
<Bar data={data} />
    );
  }
}

export default BarChart;
