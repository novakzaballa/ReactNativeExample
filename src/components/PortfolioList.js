import React, {Component} from 'react';
import {View, StyleSheet,  Text,  Image, FlatList, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import iconA from '../../assets/images/a.png';
import iconB from '../../assets/images/b.png';
import iconC from '../../assets/images/c.png';
import logo from '../../assets/images/logo.png';

//import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
//import SearchInput, { createFilter } from 'react-native-search-filter';

class PortfolioList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filter: 'B',
          filter2: '0',
          catIcon: iconB
        };
      }

    concatCateg(categName){
        const {portfolio} = this.props;
        return portfolio['category ' + categName].map((value, key) => {
            value.category = categName;
            value.fixedVal = Math.round(value.balance * 100) / 100;
            let parts = value.fixedVal.toString().split(".");
            value.fixedVal = "" + parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : ".00");
            value.imageurl = (categName == 'A') ?  iconA : ((categName == 'B') ? iconB : iconC);
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
    return total;
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
                        <Text style={{ flex: 1, margin: 1 }} key='0'>  </Text>
                        {/* <Text style={{ flex: 2, margin: 1 }} key='2'>{item.category}</Text> */}
                        <Image key = '1'
                            style={{flex:1, height: 18}} 
                            source = {item.imageurl} 
                            resizeMode="stretch"/>
                        <Text style={{ flex: 1, margin: 1 }} key='2'>  </Text>
                        <Text style={{ flex: 8, margin: 1 }} key='3'>{item.type}</Text>                        
                        <Text style={{ flex: 4, margin: 1, textAlign: 'right' }} key='4'>{item.fixedVal}</Text>
                        <Text style={{ flex: 1, margin: 1 }} key='5'>  </Text>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
            />            
        )
}

    searchUpdated(f1, f2 = this.state.filter2) {
        this.setState({
            filter: f1, 
            filter2: f2,
            catIcon: (f1 == 'A') ?  iconA : ((f1 == 'B') ? iconB : ((f1 == 'C') ? iconC : logo))
        });
    }
    
        render(){
            return (
                <View style={styles.container}>
                    <View style={styles.topFrame}>
                    </View>
                    <View style={styles.bigNumFrame}>
                        <Image source = {this.state.catIcon}
                            style={{flex:1, height: 60}} 
                            resizeMode="stretch"/>
                        <Text style={styles.textbig}>
                            {this.renderTotal()}
                        </Text>
                    </View>
                    <View style={styles.filterFrame}>
                        <TouchableOpacity
                            style={(this.state.filter=='A') ? styles.selectedButton: styles.button}
                            onPress={() => { this.searchUpdated('A')}}>
                            <Text 
                                style={(this.state.filter=='A') ? styles.selectedButtonText: styles.buttonText}>CATEGORY A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={(this.state.filter=='B') ? styles.selectedButton: styles.button}
                            onPress={() => { this.searchUpdated('B')}}>
                            <Text 
                                style={(this.state.filter=='B') ? styles.selectedButtonText: styles.buttonText}>CATEGORY B</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={(this.state.filter=='C') ? styles.selectedButton: styles.button}
                            onPress={() => { this.searchUpdated('C')}}>
                            <Text 
                                style={(this.state.filter=='C') ? styles.selectedButtonText: styles.buttonText}>CATEGORY C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={(this.state.filter==' ') ? styles.selectedButton: styles.button}
                            onPress={() => { this.searchUpdated(' ')}}>
                            <Text
                                style={(this.state.filter==' ')? styles.selectedButtonText: styles.buttonText}>ALL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchFrame}/>
                    <View style={styles.filterFrame}>
                        <TouchableOpacity
                            style={(this.state.filter2=='0') ? styles.selectedButton: styles.button}
                            onPress={() => { this.searchUpdated(this.state.filter, '0')}}>
                            <Text
                                style={(this.state.filter2=='0')? styles.selectedButtonText2 : styles.buttonText2}>ALL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={(this.state.filter2=='1') ? styles.selectedButton: styles.button}
                            onPress={() => { this.searchUpdated(this.state.filter, '1')}}>
                            <Text
                                style={(this.state.filter2=='1')? styles.selectedButtonText2 : styles.buttonText2}>FILTER1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={(this.state.filter2=='2') ? styles.selectedButton: styles.button}
                            onPress={() => { this.searchUpdated(this.state.filter, '2')}}>
                            <Text
                                style={(this.state.filter2=='2')? styles.selectedButtonText2 : styles.buttonText2}>FILTER2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={(this.state.filter2=='3') ? styles.selectedButton: styles.button}
                            onPress={() => { this.searchUpdated(this.state.filter, '3')}}>
                            <Text
                                style={(this.state.filter2=='3')? styles.selectedButtonText2 : styles.buttonText2}>FILTER3</Text>
                        </TouchableOpacity>
                    </View>
 
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
    filterBar: {
        flex:1,
        backgroundColor:'#F2F2F2',
        width: '100%',
        padding: 2,
        borderRadius:20,
        alignItems: 'center',
        color: '#F2F2F2'
    },  
    button: {
        flex:1,
        backgroundColor:'#F2F2F2',
        width: '100%',
        padding: 5,
        borderRadius:20,
        alignItems: 'center',
        justifyContent: "center",
        color: '#ffffff',
        fontFamily: 'Gotham Rounded',
        fontSize: 8 
    },  
    selectedButton: {
        flex:1,
        backgroundColor:'#31C5C3',
        width: '100%',
        padding: 5,
        borderRadius:20,
        alignItems: 'center',
        justifyContent: "center",
        color: '#ffffff',
        fontFamily: 'Gotham Rounded',
        fontSize: 8 
    },  
    buttonText: {
        fontFamily: 'Gotham Rounded',
        fontWeight:'bold',
        fontSize:8, 
        color:'#3AD1BF'
    },
    buttonText2: {
        fontFamily: 'Gotham Rounded',
        fontWeight:'bold',
        fontSize:10, 
        color:'#3AD1BF'
    },
    selectedButtonText: {
        fontFamily: 'Gotham Rounded',
        fontWeight:'bold',
        fontSize:8, 
        color:'#FFFFFF'
    },
    selectedButtonText2: {
        fontFamily: 'Gotham Rounded',
        fontWeight:'bold',
        fontSize:10, 
        color:'#FFFFFF'
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
        fontSize: 40, 
        marginLeft: 10
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
        flex: 100
    },
    bigNumFrame: {
        flex: 100,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%'
    },
    filterFrame: {
        flex: 20,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        width: '76%',
        backgroundColor:'#F2F2F2',
        borderRadius:20,
        padding: 3,
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
    }
  });

export default connect(mapStateToProps)(PortfolioList)
