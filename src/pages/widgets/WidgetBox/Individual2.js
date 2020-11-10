import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Image,
  Text,
} from 'react-native';
import './wStyles.css';
/*  icon and pic */
const totalScore = require('../img/total-score.png');
const accessScore = require('../img/access-score.png');
const archScore = require('../img/architecture-score.png')
const comfortlScore = require('../img/comfort-score.png')
const naturelScore = require('../img/nature-score.png')
const safelScore = require('../img/safety-score.png')
const amenlScore = require('../img/amenities-score.png')

/* score only */
const scoreImage = require('../img/score-bk.png');
const meterImage = require('../img/highMeter.png');


export default class Individual extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id:1, image: totalScore,   title:" Overall score: ",       description:" total",   featName: "Total Score",        value:true},
                {id:2, image: accessScore,  title:" Overall Access: ",      description:"access",   featName: "Access Score",       value:true},
                {id:3, image: archScore,    title:" Overall Architecture:", description:"arcg",     featName: "Architecture Score", value:true},
                {id:4, image: comfortlScore,title:" Overall Comfort: ",     description:"com",      featName: "Comfort Score",      value:true},
                {id:5, image: naturelScore, title:" Overall Nature: ",      description:"nat",      featName: "Nature Score",       value:true},
                {id:6, image: safelScore,   title:" Overall Safety: ",      description:"safe",     featName: "Safety Score",       value:true},
                {id:7, image: amenlScore,   title:" Overall Amenities: ",   description:"amen",     featName: "Amenities Score",    value:true},
            ],
        };
        this.iconClick = this.iconClick.bind(this);
        this.meterClick = this.meterClick.bind(this);
    }

    iconClick = () =>
        this.setState((prev) => ({
            data: prev.data.map((item) => ({
            ...item,
            image: scoreImage,
            value: !this.state.value,
        })),
    }));


    meterClick = () =>
        this.setState((prev) => ({
            data: prev.data.map((item) => ({
            ...item,
            image: meterImage,
            value: !this.state.value,
        })),
    }));



    render() {
      
        return (
        <FlatList
            style ={ styles.container }
            enableEmptySections={ true }
            data={ this.state.data }
            keyExtractor= { (item) => {
                return item.id;
            }}

            renderItem={({ item }) => {
                return (
                    <View style={styles.box}>
                        <View style={styles.info}>
                            <Text>
                                <label>uncheckIcon</label>
                                <input type="checkbox" onClick={this.iconClick} value={this.state.value} />
                            </Text>
                            <Text>
                                <label>MeterSpeed</label>
                                <input type="checkbox" onChange={this.meterClick} value={this.state.value} />
                            </Text>
                        
                            {/* <Text><button  onClick={this.meterClick} value={this.state.value} >meterPic</button></Text> */}

                            <Text style={styles.name}>{item.featName} </Text>
                            {/* <Image style={styles.image} source={{uri:item.image} } />   */}

                            { <img className="image" src={item.image} />  }
                        </View>

                        <View style={styles.info}>
                            
                                <View style={styles.iconContainer}>
                                    <Text  style={styles.title}>{item.title} </Text> 
                                    
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.descFonts}>{item.description}</Text>
                                </View>
                        </View>
                    </View>    

                )
            }}/>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:30,
    },
    info: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
     image: {
        width: 173,
        height: 88,
     },
    name:{
        color: 'black',
        opacity: 1,
    },
    title: {
        color: '#707070',
        opacity: 1,
    },
    textContainer: {
        flex: 1,
        alignItems:'center'
      },
    descFonts: {
      color: 'gray',
    },
    box: {
        marginLeft:-120,
        marginTop:10,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom:20,
      },

  });
