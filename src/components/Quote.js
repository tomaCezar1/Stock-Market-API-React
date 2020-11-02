import React, {Component} from 'react';
import '../Stock/Stock.css'

class Quote extends Component {
    render() {
        return (
            <div className='quotes-container'>
                <h1>{this.props.symbolName} - {this.props.name} </h1>
                <p className='box-items'> <span className='quotes' id=''>52 Week High</span> <span className='year-high'>{this.props.YearHigh}</span></p>
                <p className='box-items'> <span className='quotes' id=''>52 Week Low</span> <span className='year-low'>{this.props.YearLow}</span></p>
                <p className='box-items'> <span className='quotes' id=''>Volume</span> <span className='blue-data'>{this.props.volume}</span></p>
                <p className='box-items'> <span className='quotes' id=''>Close</span> <span className='blue-data'>{this.props.closePrice}</span></p>
                <p className='box-items'> <span className='quotes' id=''>Changed Percent</span> <span className='blue-data'>{this.props.changeP}</span></p>
            </div>
        );
    }
}

export default Quote;