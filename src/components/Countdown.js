import React, {Component} from 'react';

class Countdown extends Component {
    state = {
        count: 20,
        message: 'Only 5 API requests per minute allowed...'
    }

    componentDidMount() {
        this.intervalChange();
    }

    intervalChange = () => {
        let myInterval = setInterval(() => {
            if(this.state.count === 0){
                clearInterval(myInterval);
                this.setState({message: 'Search a new stock!'});
            } else
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }

    render() {
        return (
            <div className='countdown-div'>
                {this.state.count > 0 ? <h1 style={countNumbStyleTrue}>{this.state.count}</h1>
                    : <h1 style={countNumbStyleFalse}>{this.state.count}</h1>}

                {this.state.count > 0 ? <h1 className='h1-message' style={isNotZero}>{this.state.message}</h1>
                    : <h1 className='h1-message' style={isZero}>{this.state.message}</h1>}

            </div>
        );
    }
}

const countNumbStyleTrue = {
    fontSize: '3rem',
    marginBottom: '-0.4rem'
}

const countNumbStyleFalse = {
    opacity: '0'
}

const isZero= {
    color: '#FF0000',
    fontStyle: 'bolder',
    fontSize: '2.2rem'
}

const isNotZero = {
    color: '#000'
}

export default Countdown;