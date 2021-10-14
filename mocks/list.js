const orders = [
  {
    orderID: 1270989,
    orderDate: '15.02.2021, 18:00',
    statusID: 1,
    clientID: 1,
    itemsID: [1, 1, 3, 3, 4, 5]
  }, 
  {
    orderID: 2353474,
    orderDate: '12.03.2021, 05:15',
    statusID: 1,
    clientID: 2,
    itemsID: [5, 5]
  }, 
];

const orderStatus = [
  {
    statusID: 1,
    statusName: 'Новый'
  }, {
    statusID: 2,
    statusName: 'Рассчет'
  }, {
    statusID: 3,
    statusName: 'Отложен'
  }, {
    statusID: 4,
    statusName: 'Отменен'
  }, {
    statusID: 5,
    statusName: 'Выполнен'
  },
];

const items = [
  {
    itemsID: 1, 
    itemName: 'Обои Лесная сказка',
    itemPrice: 4566
  },
   {
    itemsID: 2, 
    itemName: 'Пила',
    itemPrice: 35000
  },
  {
    itemsID: 3, 
    itemName: 'Паркетная доска',
    itemPrice: 7800
  },
  {
    itemsID: 4, 
    itemName: 'Ванна акриловая',
    itemPrice: 25000
  },
  {
    itemsID: 5, 
    itemName: 'Обои Закат',
    itemPrice: 2508
  },
  {
    itemsID: 6, 
    itemName: 'Клей',
    itemPrice: 1500
  },
  {
    itemsID: 7, 
    itemName: 'Клей для паркетной доски',
    itemPrice: 3900
  },
  {
    itemsID: 8, 
    itemName: 'Утеплитель для паркетной доски',
    itemPrice: 9090
  }, 
];

const clients = [
  {
    clientID: 1,
    clientName: 'Чернышев Филипп Семенович'
  },
  {
    clientID: 2,
    clientName: 'Филиппов Степан Васильевич'
  },
]