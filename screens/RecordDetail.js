import React from 'react';
import NumberFormat from 'react-number-format';

import { RecordDetailStyles as styles } from '../styles/styles';
import { processedData } from '../data/data';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { 
  View, 
  Image, 
  Text 
} from 'react-native';


const MoneyFormat = (money) => {
  return (
    <NumberFormat 
      value={money} 
      displayType={'text'} 
      thousandSeparator={true} 
      prefix={'$'} 
      decimalScale={5}
      renderText={value => <Text style={styles.moneySpend}>{value}</Text>}
    />
  )
}

const DetailItem = (e) => {
  const el = e.detailItem
  return (
    <View style={styles.detailElContainer}>
      <Image source={{uri: el.production_image}} style={styles.detailImage} />
      <View>
      <Text style={styles.detailMessage}>You bought {el.production_name} for {MoneyFormat(el.spend_money)}</Text>
      <Text style={styles.detailDate}>{el.date_time}</Text>
      </View>
    </View>
  )
}

export default function RecordDetail( {route, navigation} ) {
  const { categoryId, name } = route.params

  return (
    <View style={styles.detailContainer}>
      <View style={styles.detailHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{name}</Text>
        <View style={{marginLeft: 40}}></View>
      </View>
      <View style={styles.detailBody}>
        <FlatList

          data={processedData[categoryId-1].item}
          renderItem={({item}) => <DetailItem detailItem={item}/>}
          keyExtractor={(item, index) => item.id + index + "index"}
        />
      </View>
    </View>
  )
}