import { StyleSheet } from "react-native";


export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigator: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  navigator2: {
    fontSize: 30,
    backgroundColor: 'red',
    
  }
});


export const DashboardStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
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
    fontSize: 17,
    marginBottom: 15,
  },
  cardView: {
    flex: 4/10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '32%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardName: {
    color: '#fff',
    fontSize: 12,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.01,
    shadowRadius: 3.84,

    elevation: 5,
  },
  balanceValue: {
    color: '#FF958F',
    fontSize: 30,
  },
  balanceTitle: {
    color: '#A6B1C0',
    fontSize: 18,
  },
  recordList: {
    flex: 9/10,
  },

});


export const RecordViewStyles = StyleSheet.create({
  imageView: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 10,
    left: 5,
    zIndex: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  recordImage: {
    width: 25,
    height: 25,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  contentView: {
    backgroundColor: '#fff',
    marginBottom: 20,
    height: 70,
    borderRadius: 5,
    marginLeft: 20,
    paddingLeft: 50,
    flexDirection: 'row',

  },
  leftContent: {
    flex: 1,
    justifyContent: 'center',
  },
  rightContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  recordTitle: {
    fontSize: 19, 
  },
  recordSubtitle: {
    color: '#A6B1C0',
    fontSize: 12,
  }
});


export const RecordDetailStyles = StyleSheet.create({
  detailContainer: {
    flex: 1,
  },
  detailHeader: {
    flex: 1/7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 10,
  },
  detailBody: {
    flex: 6/7,
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
  },
  detailElContainer: {
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  detailImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 10,
    marginRight: 10,
  }, 
  detailMessage: {
    marginRight: 10,
  },
  detailDate: {
    color: '#A6B1C0',
    fontSize: 12,
    marginTop: 10,
  }
}); 


export const ProfileStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});