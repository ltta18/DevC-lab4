export const data = {
  "account_information": {
    
    "bank": {
      "type": 1,
      "total": 25000
    },
    "credit": {
      "total": 1000,
      "type": 2
    },
    "cash": {
      "total": 800,
      "type": 3
    },
    "total": 26800,
  },
  "detail": [
    {
      "id": 1,
      "category": 1,
      "type": 2,
      "spend_money": 250,
      "date_time": "2020/07/23",
      "production_name": "Meat",
      "production_image": "https://sharpmagazineme.com/uploads/2018/10/05102018195139.jpg"
    },
    {
      "id": 2,
      "category": 2,
      "type": 3,
      "spend_money": 100,
      "date_time": "2020/07/23",
      "production_name": "Shirt",
      "production_image": "https://www.marni.com/12/12386489MT_13_n_r.jpg"
    },
    {
      "id": 3,
      "category": 2,
      "type": 1,
      "spend_money": 100,
      "date_time": "2020/07/23",
      "production_name": "Dress",
      "production_image": "https://www.yourwdwstore.net/assets/images/6/60000/3000/700/63764-s1.jpg"
    },
    {
      "id": 4,
      "category": 2,
      "type": 1,
      "spend_money": 100,
      "date_time": "2020/07/23",
      "production_name": "Baby wear",
      "production_image": "https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/1517x/7lj18a002-sb506-912-ghep.jpg"
    },
    {
      "id": 5,
      "category": 1,
      "type": 2,
      "spend_money": 250,
      "date_time": "2020/07/23",
      "production_name": "Chicken meat",
      "production_image": "https://cf.shopee.vn/file/4f6c547e84635f725bb5aa555fda8546"
    },
    {
      "id": 6,
      "category": 3,
      "type": 3,
      "spend_money": 100,
      "date_time": "2020/07/23",
      "production_name": "House",
      "production_image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg"
    },
    {
      "id": 7,
      "category": 3,
      "type": 1,
      "spend_money": 100,
      "date_time": "2020/07/23",
      "production_name": "Office",
      "production_image": "https://assets.iwgplc.com/image/upload/Regus/Website/homepage-product-office-space.jpg"
    },
    {
      "id": 8,
      "category": 1,
      "type": 1,
      "spend_money": 100,
      "date_time": "2020/07/23",
      "production_name": "Tomato",
      "production_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/1280px-Bright_red_tomato_and_cross_section02.jpg"
    }
  ]
}

const detail = data.detail

export const processedData = [{item:[], total: 0},
                              {item:[], total: 0},
                              {item:[], total: 0}]

for (var i=0; i<detail.length; i++) {
  var category = detail[i].category
  processedData[category-1].item.push(detail[i])
  processedData[category-1].total += detail[i].spend_money
}

export const recordCategory = [
  {
    id: 1,
    production_name: 'Categories',
    production_image: require('../assets/cart.png'),
    background_color: '#FEC180',
    text_color: '#FF958F',
    last_record: processedData[0].item[processedData[0].item.length-1],
    total_money: processedData[0].total,
  },
  {
    id: 2,
    production_name: 'Clothes',
    production_image: require('../assets/shirt.png'),
    background_color: '#EFBAD3',
    text_color: '#A254F2',
    last_record: processedData[1].item[processedData[1].item.length-1],
    total_money: processedData[1].total,
  },
  {
    id:3,
    production_name: 'Rental',
    production_image: require('../assets/house.png'),
    background_color: '#54BAE6',
    text_color: '#51EFDE',
    last_record: processedData[2].item[processedData[2].item.length-1],
    total_money: processedData[2].total,
  }
]