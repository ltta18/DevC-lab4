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


const accountItem = [
  {
    title: 'Bank Account',
    backgroundColor: '#E437BC',
    value: data.account_information.bank.total,
  },
  {
    title: 'Credit Card',
    backgroundColor: '#EFA75A',
    value: data.account_information.credit.total,
  },
  {
    title: 'Cash',
    backgroundColor: '#23E3D6',
    value: data.account_information.cash.total,
  },
]


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
            {accountItem.map((item, i) => {
              return (
                <View 
                  key={`accountItem${i}`}
                  style={[styles.card, { backgroundColor: item.backgroundColor }]}>
                  <Text style={styles.cardName}>{item.title}</Text>
                  <NumberFormat 
                    value={item.value}
                    displayType={'text'} 
                    thousandSeparator={true} 
                    prefix={'$'}
                    renderText={value => <Text style={styles.cardValue}>{value}</Text>} 
                  />
                </View>
              )
            })}
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