import React from 'react';
import Plot from 'react-plotly.js';
import Header from "../components/Header";
import Quote from "../components/Quote";
import Countdown from "../components/Countdown";

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.API_KEY = 'FXJPC8WQRZ2JZN9O';
        this.changeKeyword = this.changeKeyword.bind(this);
    }

    state = {
        stockChartXValues: [],
        stockChartYValues: [],
        open: 0,
        volume: 0,
        symbol: '',
        changePercent: 0,
        close: 0,
        YearHigh: 0,
        YearLow: 0,
        name: '',
        searchKeyword: 'TSLA'
    }

    componentDidMount = () => {
        this.fetchStock();
        this.fetchQuote();
        this.fetchCompanyOverview();
    }

    fetchStock = () => {
        const API_CAll = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.state.searchKeyword}&outputsize=compact&apikey=${this.API_KEY}`
        let stockXValuesArray = [];
        let stockYValuesArray = [];

        fetch(API_CAll)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                const timeSeries = data['Time Series (Daily)'];
                // console.log(typeof timeSeries) is an object, we need
                // to transform it into an array to loop through it
                let volume = timeSeries[Object.keys(timeSeries)[0]]['6. volume'] //latest value
                volume = Number(volume).toLocaleString();
                console.log(volume)

                for(let date in timeSeries) {
                    stockXValuesArray.push(date);
                    stockYValuesArray.push(timeSeries[date]['1. open']);
                }

                this.setState({
                    stockChartXValues : stockXValuesArray,
                    stockChartYValues : stockYValuesArray,
                    volume: volume
                }, function () {
                    console.log('fetching data is done!')
                })
            })
            .catch((err) => console.log(err));
    }

    fetchQuote = () => {
        const API_CALL2 = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.searchKeyword}&apikey=${this.API_KEY}`

        fetch(API_CALL2)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                let symbol = data["Global Quote"]["01. symbol"]
                let changePercent = data["Global Quote"]["10. change percent"]
                let close = data["Global Quote"]["02. open"]

            this.setState({
                symbol: symbol,
                changePercent: changePercent,
                close: close
            })
            })
            .catch((err) => console.log(err))

    }

    fetchCompanyOverview = () => {
        const API_CALL3 = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${this.state.searchKeyword}&apikey=${this.API_KEY}`

        fetch(API_CALL3)
            .then((res) => res.json())
            .then((data) => {
                const YearHigh = data["52WeekHigh"];
                const YearLow = data["52WeekLow"]
                const companyName = data.Name

                console.log(data)
                console.log(companyName)

                this.setState({
                    YearHigh: YearHigh,
                    YearLow: YearLow,
                    name: companyName
                })
            })
            .catch((err) => console.log(err))
    }

    changeKeyword = async (event) => {
        const { value } = event.target;
        if (event.key === 'Enter') {
            this.setState({
                searchKeyword: value
            });
            await console.log(this.state.searchKeyword)
            await console.log(this.state.searchStock)
            await this.secondFetch();
            await console.log('Enter key pressed')
        }
    }

    secondFetch = () => {
        this.fetchStock();
        this.fetchQuote();
        this.fetchCompanyOverview();
    }


    render() {
        return (
            <div>
                <Header
                inputHandler={this.changeKeyword}
                inputValue={this.state.searchKeyword}
                secondFetch={this.secondFetch}
                />
                <Countdown didSearch={this.state.searchStock}/>
                <Quote
                    symbolName={this.state.symbol}
                    YearHigh={this.state.YearHigh}
                    YearLow={this.state.YearLow}
                    changeP={this.state.changePercent}
                    closePrice={this.state.close}
                    volume={this.state.volume}
                    name={this.state.name}
                />
                {/* PLotly.js library */}
                <Plot
                    data={[
                        {
                            x: this.state.stockChartXValues,
                            y: this.state.stockChartYValues,
                            type: 'scatter',
                            mode: 'lines',
                            marker: {color: 'blue'},
                            fill: 'tonexty'
                        }
                    ]}
                    layout={ {width: 1000, height: 600, title: ""} }
                    config={{displayModeBar: false}}
                />
            </div>
        );
    }
}


export default Stock;


