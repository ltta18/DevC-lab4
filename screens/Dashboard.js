import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import data from '../data/data';

// const icon = []

function recordView() {
  return (
    <View style={styles.recordCell}>
      <View style={styles.imageView}>
        <Text>a</Text>
      </View>
      <View style={styles.contentView}>
        <Text>a</Text>
      </View>
    </View>
  )
}

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Feather name="menu" size={32} style={styles.headerIcon}/> 
          <Text style={styles.headerText}>Dashboard</Text>
          <Feather name="bell" size={32} style={styles.headerIcon}/> 
        </View>

        <View style={styles.accountView}>
          <Text style={styles.titleName}>List of Account</Text>
          <View style={styles.cardView}>
            <View style={[styles.card, { backgroundColor: '#E437BC' }]}>
              <Text style={styles.cardName}>Bank account</Text>
              <Text style={styles.cardValue}>{`$${data.account_information.bank.total}`}</Text>
            </View>
            <View style={[styles.card, { backgroundColor: '#EFA75A' }]}>
              <Text style={styles.cardName}>Credit card</Text>
              <Text style={styles.cardValue}>{`$${data.account_information.credit.total}`}</Text>
            </View>
            <View style={[styles.card, { backgroundColor: '#23E3D6' }]}>
              <Text style={styles.cardName}>Cash</Text>
              <Text style={styles.cardValue}>{`$${data.account_information.cash.total}`}</Text>
            </View>
          </View>
          <View style={styles.balance}>
            <Text style={styles.balanceValue}>$4800.00</Text>
            <Text style={styles.balanceTitle}>Total Balance</Text>
          </View>
        </View>

        <View style={styles.recordView}>
          <Text style={styles.titleName}>Last Records Overview</Text>
          <View style={styles.recordList}>
            <FlatList 
              data={data.detail}
              renderItem={recordView}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F2F4F7',
  },
  headerView: {
    flex: 1/7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 24,
  },
  accountView: {
    flex: 3/7,
    paddingHorizontal: 10,
  },
  recordView: {
    flex: 3/7,
    paddingHorizontal: 10,
  },
  titleName: {
    flex: 1/10,
    fontWeight: '500',
    fontSize: 19,
    marginBottom: 15,
  },
  cardView: {
    flex: 4/10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '30%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardName: {
    color: '#fff',
  },
  cardValue: {
    color: '#fff',
    fontWeight: 'bold',
  },
  balance: {
    flex: 5/10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 5,
  },
  balanceValue: {
    color: '#FF958F',
    fontSize: 30,
  },
  balanceTitle: {
    color: '#A6B1C0',
  },
  recordCell: {
    // flexDirection: 'row',
  },
  imageView: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    zIndex: 2,
    borderRadius: 5,
  },
  contentView: {
    backgroundColor: '#fff',
    marginBottom: 20,
    height: 70,
    marginLeft: 25,
    borderRadius: 5,
  },
  recordList: {
    flex: 9/10,
  }

});