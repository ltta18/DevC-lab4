import React, { useState } from 'react';
import RecordView from './RecordView';
import NumberFormat from 'react-number-format';

import { DashboardStyles as styles } from '../styles/styles';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Modal } from 'react-native-paper';
import { 
  SafeAreaView, 
  View, 
  Text, 
  FlatList
} from 'react-native';
import { 
  data, 
  recordCategory 
} from '../data/data';


export default function Dashboard() {
  const [ modalVisible, setModalVisible ] = useState(false);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Feather name="menu" size={32} style={styles.headerIcon}/> 
          <Text style={styles.headerText}>Dashboard</Text>
          <TouchableOpacity onPress={() => {setModalVisible(true)}}>
            <Feather name="bell" size={32} style={styles.headerIcon}/>
          </TouchableOpacity>
        </View>

        <View style={styles.accountView}>
          <Text style={styles.titleName}>List of Account</Text>
          <View style={styles.cardView}>
            <View style={[styles.card, { backgroundColor: '#E437BC' }]}>
              <Text style={styles.cardName}>Bank account</Text>
              <NumberFormat 
                value={data.account_information.bank.total}
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$'}
                renderText={value => <Text style={styles.cardValue}>{value}</Text>} 
              />
            </View>
            <View style={[styles.card, { backgroundColor: '#EFA75A' }]}>
              <Text style={styles.cardName}>Credit card</Text>
              <NumberFormat 
                value={data.account_information.credit.total}
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$'}
                renderText={value => <Text style={styles.cardValue}>{value}</Text>} 
              />
            </View>
            <View style={[styles.card, { backgroundColor: '#23E3D6' }]}>
              <Text style={styles.cardName}>Cash</Text>
              <NumberFormat 
                value={data.account_information.cash.total}
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$'}
                renderText={value => <Text style={styles.cardValue}>{value}</Text>} 
              />
            </View>
          </View>
          <View style={styles.balance}>
            <NumberFormat 
              value={data.account_information.total}
              displayType={'text'} 
              thousandSeparator={true} 
              prefix={'$'}
              renderText={value => <Text style={styles.balanceValue}>{value}</Text>} 
            />
            <Text style={styles.balanceTitle}>Total Balance</Text>
          </View>
        </View>

        <View style={styles.recordView}>
          <Text style={styles.titleName}>Last Records Overview</Text>
          <View style={styles.recordList}>
            <FlatList
              data={recordCategory}
              renderItem={({item}) => <RecordView item={item}/>}
              keyExtractor={(item) => "detail" + item.id}
            />
          </View>
        </View>
      </View>

      <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalView}>
          <Text>Notifications</Text>
          <TouchableOpacity onPress={() => {setModalVisible(false)}}>
            <Feather name="x" size={30}/>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}