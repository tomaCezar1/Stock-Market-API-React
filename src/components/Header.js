import React from 'react';
import '../Stock/Stock.css'

class Header extends React.Component {
    state = {
        isClicked: false
    }

    inputClick = () => {
        const doesShow = this.state.isClicked;
        this.setState({
            isClicked: !doesShow
        })
        console.log(this.state.isClicked)
    }

    onBlur = () => {
        this.setState({
            isClicked: false
        })
}

    render() {
        const { isClicked } = this.state;

        return (
            <div style={blackHeader}>
                <h1 className='header-h1'>React Stock Market</h1>
                <p>Stock Market API</p>
                <div className='wrapper'>
                    <input className={`header-input ${isClicked ? 'clicked-input' : ''}`}
                           type="text"
                           placeholder='Pick a stock (e.g. BABA, ZM, AAPL, GOLD)'
                           onClick={this.inputClick}
                           onBlur={this.onBlur}
                           onKeyDown={this.props.inputHandler}
                        // value={this.props.inputValue}
                    />
                    <i
                        onClick={this.props.secondFetch}
                        className='fas fa-search fa-2x'>
                    </i>
                </div>
            </div>
        );
    }
}

const blackHeader = {
    color: '#ffffff',
    backgroundColor: '#252529',
    padding: '1.2rem',
    letterSpacing: '2px',
    paddingBottom: '2rem'
}

export default Header;