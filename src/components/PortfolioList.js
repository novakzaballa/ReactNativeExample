import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';

class PortfolioList extends Component {
    concatCateg(categName){
        const {portfolio} = this.props;
        return portfolio['category ' + categName].map((value, key) => {
            value.category = categName;
            return value;
        }) 
    }
        getPortfolio(){
        //const categ = this.props.portfolio['category A'];
        const {portfolio} = this.props;
        let i = 0;
        let values = this.concatCateg('A').concat(this.concatCateg('B')).concat(this.concatCateg('C'));
        let filtered = values.filter(val => val.category == 'B');
        console.log(values);
        console.log(filtered.reduce((sum, val) => sum + val.balance, 0));
        return portfolioData = filtered.map((value, key) => {
            return <Text key={i++/*key*/}>Balance:{value.balance} Type:{value.type} Status:{value.status}</Text>
        })
    }
    render(){
        console.log(this.props);
        return (
            <View>
                {this.getPortfolio()}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {portfolio: state.portfolio}
}

export default connect(mapStateToProps)(PortfolioList)
