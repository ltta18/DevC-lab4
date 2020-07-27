import React from 'react';
import NumberFormat from 'react-number-format';

import { RecordViewStyles as styles } from '../styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { 
  View, 
  Image, 
  Text 
} from 'react-native';


const accountType = (type) => {
  return type === 1
          ? 'Bank account' 
          : type === 2
          ? 'Credit card'
          : 'Cash'
}


export default function RecordView(item) {
  const el = item.item
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.recordCell} 
      onPress={() => {navigation.navigate('Detail', {categoryId: el.id, name: el.production_name})}}
    >
      <View style={[ styles.imageView, {backgroundColor: el.background_color}] }>
        <Image
          style={styles.recordImage}
          source={el.production_image}
        />
      </View>

      <View style={styles.contentView}>
        <View style={styles.leftContent}>
          <Text style={styles.recordTitle}>{el.production_name}</Text>
          <Text style={styles.recordSubtitle}>{accountType(el.last_record.type)}</Text>
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.recordSubtitle}>{el.last_record.date_time}</Text>
          <NumberFormat 
            value={el.total_money} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'$'} 
            decimalScale={5}
            renderText={value => <Text style={[styles.moneySpend, {color: el.text_color}]}>{value}</Text>}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}