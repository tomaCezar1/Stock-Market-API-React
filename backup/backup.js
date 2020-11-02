// import React from 'react';
// import Plot from 'react-plotly.js';
// import Header from "../components/Header";
// import Quote from "../components/Quote";
// import HistoryPrices from "../components/HistoryPrices";

// class Stock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.API_KEY = 'FXJPC8WQRZ2JZN9O';
//     }

//     state = {
//         stockChartXValues: [],
//         stockChartYValues: [],
//         open: 0,
//         volume: 0,
//         symbol: '',
//         changePercent: 0,
//         close: 0,
//         YearHigh: 0,
//         YearLow: 0,
//         name: '',
//         searchKeyword: 'SU'
//     }

//     componentDidMount = () => {
//         this.fetchStock();
//         this.fetchQuote();
//         this.fetchCompanyOverview();
//         this.fetchSearchEndpoint();
//     }

//     fetchStock = () => {
//         console.log(this)
//         let stockSymbol = 'SU'
//         const API_CAll = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${this.API_KEY}`
//         let stockXValuesArray = [];
//         let stockYValuesArray = [];
//         let volume= 0;


//         fetch(API_CAll)
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data)
//                 const timeSeries = data['Time Series (Daily)'];
//                 // console.log(typeof timeSeries) is an object, we need
//                 // to transform it into an array to loop through it
//                 volume = timeSeries[Object.keys(timeSeries)[0]]['6. volume'] //latest value
//                 volume = Number(volume).toLocaleString();
//                 console.log(volume)

//                 for(let date in timeSeries) {
//                     stockXValuesArray.push(date);
//                     stockYValuesArray.push(timeSeries[date]['1. open']);
//                 }

//                 this.setState({
//                     stockChartXValues : stockXValuesArray,
//                     stockChartYValues : stockYValuesArray,
//                     volume: volume
//                 }, function () {
//                     console.log(this.state.stockChartXValues)
//                 })
//             });
//     }

//     fetchQuote = () => {
//         const API_CALL2 = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=${this.API_KEY}`
//         let symbol = '';
//         let changePercent = 0;
//         let close = 0;

//         fetch(API_CALL2)
//             .then((res) => res.json())
//             .then((data) => {
//                 symbol = data["Global Quote"]["01. symbol"]
//                 changePercent = data["Global Quote"]["10. change percent"]
//                 close = data["Global Quote"]["02. open"]
//                 console.log(close)

//             this.setState({
//                 symbol: symbol,
//                 changePercent: changePercent,
//                 close: close
//             })
//             })

//     }

//     fetchSearchEndpoint = () => {
//         const API_CALL4 = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.searchKeyword}&apikey=${this.API_KEY}`

//         fetch(API_CALL4)
//             .then(res => res.json())
//             .then((data) => {
//                 console.log(data)
//             })
//     }

//     changeKeyword = (e) => {
//         this.setState({
//             searchKeyword: e.target.value
//         })
//     }

//     fetchCompanyOverview = () => {
//         const API_CALL3 = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=${this.API_KEY}`

//         fetch(API_CALL3)
//             .then((res) => res.json())
//             .then((data) => {
//                 const YearHigh = data["52WeekHigh"];
//                 const YearLow = data["52WeekLow"]
//                 const companyName = data.Name

//                 console.log(data)
//                 console.log(companyName)

//                 this.setState({
//                     YearHigh: YearHigh,
//                     YearLow: YearLow,
//                     name: companyName
//                 })
//             })
//             .catch((err) => console.log(err))
//     }


//     render() {
//         return (
//             <div>
//                 <Header
//                 keyword={this.changeKeyword}
//                 />
//                 {/*PLotly.js library*/}
//                 <Plot
//                     data={[
//                         {
//                             x: this.state.stockChartXValues,
//                             y: this.state.stockChartYValues,
//                             type: 'scatter',
//                             mode: 'lines',
//                             marker: {color: 'blue'},
//                             fill: 'tonexty'
//                         }
//                     ]}
//                     layout={ {width: 800, height: 420, title: ""} }
//                     config={{displayModeBar: false}}
//                 />
//                 <Quote
//                     symbolName={this.state.symbol}
//                     YearHigh={this.state.YearHigh}
//                     YearLow={this.state.YearLow}
//                     changeP={this.state.changePercent}
//                     closePrice={this.state.close}
//                     volume={this.state.volume}
//                     name={this.state.name}
//                 />

//                 {/*<HistoryPrices*/}
//                 {/*    stockX={this.state.stockChartXValues}*/}
//                 {/*    open={this.state.close}*/}
//                 {/*    high={this.state.high}*/}
//                 {/*    low={this.state.low}*/}
//                 {/*/>*/}
//             </div>
//         );
//     }
// }


// export default Stock;


