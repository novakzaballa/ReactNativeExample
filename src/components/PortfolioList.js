import React, {Component} from 'react';
import {View, StyleSheet,  Text,  Button, FlatList, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
//import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
//import SearchInput, { createFilter } from 'react-native-search-filter';

class PortfolioList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filter: 'B',
        };
      }

    concatCateg(categName){
        const {portfolio} = this.props;
        return portfolio['category ' + categName].map((value, key) => {
            value.category = categName;
            value.fixedVal = Math.round(value.balance * 100) / 100;
            let parts = value.fixedVal.toString().split(".");
            value.fixedVal = "" + parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : ".00");
            return value;
        }) 
    }

    renderTotal(){
        const {portfolio} = this.props;
        let i = 0;
        const values = this.concatCateg('A').concat(this.concatCateg('B')).concat(this.concatCateg('C'));
        const filtered = (this.state.filter == ' ') ? values : values.filter(val => val.category == this.state.filter);
        let total = filtered.reduce((sum, val) => sum + val.balance, 0);
        total = Math.round(total * 100) / 100;
        let parts = total.toString().split(".");
        total = "" + parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : ".00");
    return this.state.filter + '  ' + total;
    }

    getPortfolio(){
        //const categ = this.props.portfolio['category A'];
        const {portfolio} = this.props;
        let i = 0;
        const values = this.concatCateg('A').concat(this.concatCateg('B')).concat(this.concatCateg('C'));
        const filtered = (this.state.filter == ' ') ? values : values.filter(val => val.category == this.state.filter);
        console.log(values);
        console.log(filtered.reduce((sum, val) => sum + val.balance, 0));
        return (
            <FlatList
                data={filtered}
                renderItem={({ item }) => (
                    <View style={styles.listItem} key={i++}>
                        <Text style={{ flex: 1, margin: 1 }} key='1'>  </Text>
                        <Text style={{ flex: 2, margin: 1 }} key='2'>{item.category}</Text>
                        <Text style={{ flex: 8, margin: 1 }} key='3'>{item.type}</Text>                        
                        <Text style={{ flex: 4, margin: 1, textAlign: 'right' }} key='4'>{item.fixedVal}</Text>
                        <Text style={{ flex: 1, margin: 1 }} key='5'>  </Text>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
            />            
        )

    }

    searchUpdated(term) {
        this.setState({filter: term})
          }
    
        render(){
            console.log(this.props);
            return (
                <View style={styles.container}>
                    <View style={styles.topFrame}>
                    </View>
                    <View style={styles.bigNumFrame}>
                        <Text style={styles.textbig}>
                            {this.renderTotal()}
                        </Text>
                    </View>
                    <View style={styles.filterFrame}>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={() => { this.searchUpdated('A')}}>
                            <Text style={{fontSize:8}}>CATEGORY A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={() => { this.searchUpdated('B')}}>
                            <Text style={{fontSize:8}}>CATEGORY B</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={() => { this.searchUpdated('C')}}>
                            <Text style={{fontSize:8}}>CATEGORY C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={() => { this.searchUpdated(' ')}}>
                            <Text style={{fontSize:8}}>ALL</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.filterFrame}/>
                <View style={styles.searchFrame}/>
{/*                     <SearchInput 
                        onChangeText={(term) => { this.searchUpdated(term) }} 
                        style={styles.searchInput}
                        placeholder="Type a item to search"
                        />
 */}
                 <View style={styles.dataFrame}>           
                    {this.getPortfolio()}
                </View>
        </View>
            )
        }
    }

const mapStateToProps = state => {
    return {portfolio: state.portfolio}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : "column",
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    button: {
        flex:1,
        backgroundColor:'#31C5C3',
        width: '100%',
        padding: 5,
        borderRadius:20,
        alignItems: 'center',
        color: '#ffffff',
        fontFamily: 'Gotham Rounded',
        fontSize: 8 
    },  
    searchInput:{
      padding: 10,
      borderColor: '#CCC',
      borderWidth: 1
    },
    fixToText: {
        margin: 30, 
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      textbig: {
          textAlign: 'center',
          color:'#3AD1BF',
          fontFamily: 'Gotham Rounded',
          fontWeight:'bold',
          fontSize: 40 
        },
      listItem: {
        paddingVertical: 10,
        marginBottom: 2,
        flexDirection: "row",
        backgroundColor: "#ffffff",
        borderBottomColor: "#C8C8C8",
        borderBottomWidth: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        zIndex: -1
      },
    topFrame: {
        flex: 100 //167
    },
    bigNumFrame: {
        flex: 100, //107
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%'
    },
    filterFrame: {
        flex: 20,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        width: '76%',
        flexWrap: 'nowrap'
    },
    searchFrame: {
        flex: 160,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    dataFrame: {
        flex: 400,
        width: '100%',
        justifyContent: "flex-end",
        flexGrow: 250
//        flexGrow: 1,
//        justifyContent: 'center',
//        alignContent: 'center',
//        alignItems: 'center'
    }
  });

export default connect(mapStateToProps)(PortfolioList)
