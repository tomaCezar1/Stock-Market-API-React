// import React from 'react';
// import Plot from 'react-plotly.js';

// class Stock extends React.Component {
//     state = {
//         stockChartXValues: [],
//         stockChartYValues: [],
//         open: 0,
//         volume: 0
//     }

//     componentDidMount = () => {
//         this.fetchStock();
//     }

//     fetchStock = () => {
//         console.log(this)
//         const API_KEY = 'FXJPC8WQRZ2JZN9O';
//         let stockSymbol = 'SU'
//         const API_CAll = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`
//         let stockXValuesArray = [];
//         let stockYValuesArray = [];

//         fetch(API_CAll)
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data)
//                 const timeSeries = data['Time Series (Daily)'];
//                 // console.log(typeof timeSeries) is an object, we need
//                 // to transform it into an array to loop through it

//                 for(let date in timeSeries) {
//                     console.log(date)
//                     stockXValuesArray.push(date);
//                     stockYValuesArray.push(timeSeries[date]['1. open']);
//                 }
//                 this.setState({
//                     stockChartXValues : stockXValuesArray,
//                     stockChartYValues : stockYValuesArray
//                 }, function () {
//                     console.log(this.state.stockChartXValues)
//                 })
//             });
//     }


//     render() {
//         return (
//             <div>
//                 <h1>Stock Market</h1>
//                 {/*PLotly.js library*/}
//                 <Plot
//                     data={[
//                         {
//                             x: this.state.stockChartXValues,
//                             y: this.state.stockChartYValues,
//                             type: 'scatter',
//                             mode: 'lines+markers',
//                             marker: {color: 'red'}
//                         }
//                     ]}
//                     layout={ {width: 1600, height: 900, title: ""} }
//                     config={{displayModeBar: false}}
//                 />
//             </div>
//         );
//     }
// }


// export default Stock;