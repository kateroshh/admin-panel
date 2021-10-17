const orders = {
  '1270989': {
    orderID: '1270989',
    orderDate: '15.02.2021, 18:00',
    statusID: '1',
    clientID: '1',
    itemsID: ['1', '1', '3', '3', '4', '5']
  }, 
  '2353474': {
    orderID: '2353474',
    orderDate: '12.03.2021, 05:15',
    statusID: '1',
    clientID: '2',
    itemsID: ['5', '5']
  }, 
  '1103397': {
    orderID: '1103397',
    orderDate: '03.02.2021, 08:04',
    statusID: '2',
    clientID: '3',
    itemsID: ['1', '3', '4', '6', '6']
  }, 
  '6924662': {
    orderID: '6924662',
    orderDate: '21.01.2021, 13:32',
    statusID: '5',
    clientID: '4',
    itemsID: ['5']
  }, 
  '2200086': {
    orderID: '2200086',
    orderDate: '19.01.2021, 10:28',
    statusID: '4',
    clientID: '5',
    itemsID: []
  }, 
  '2842064': {
    orderID: '2842064',
    orderDate: '04.01.2021, 12:12',
    statusID: '3',
    clientID: '6',
    itemsID: ['8']
  }, 
  '1730071': {
    orderID: '1730071',
    orderDate: '17.12.2021, 22:45',
    statusID: '5',
    clientID: '7',
    itemsID: ['7']
  }, 
  '7987376': {
    orderID: '7987376',
    orderDate: '07.12.2021, 08:57',
    statusID: '5',
    clientID: '8',
    itemsID: ['7', '1', '5']
  }, 
  '1373265': {
    orderID: '1373265',
    orderDate: '15.11.2020, 14:26',
    statusID: '5',
    clientID: '9',
    itemsID: ['3']
  }, 
  '1311100': {
    orderID: '1311100',
    orderDate: '07.11.2020, 18:52',
    statusID: '4',
    clientID: '10',
    itemsID: []
  }, 
};

const orderStatus = {
  '1': {
    statusID: '1',
    statusName: 'Новый'
  }, 
  '2': {
    statusID: '2',
    statusName: 'Рассчет'
  }, 
  '3': {
    statusID: '3',
    statusName: 'Отложен'
  }, 
  '4': {
    statusID: '4',
    statusName: 'Отменен'
  }, 
  '5': {
    statusID: '5',
    statusName: 'Выполнен'
  },
};

const items = {
  '1': {
    itemsID: '1', 
    itemName: 'Обои Лесная сказка',
    itemPrice: 4566
  },
  '2': {
    itemsID: '2', 
    itemName: 'Пила',
    itemPrice: 35000
  },
  '3': {
    itemsID: '3', 
    itemName: 'Паркетная доска',
    itemPrice: 7800
  },
  '4': {
    itemsID: '4', 
    itemName: 'Ванна акриловая',
    itemPrice: 25000
  },
  '5': {
    itemsID: '5', 
    itemName: 'Обои Закат',
    itemPrice: 2508
  },
  '6': {
    itemsID: '6', 
    itemName: 'Клей',
    itemPrice: 1500
  },
  '7': {
    itemsID: '7', 
    itemName: 'Клей для паркетной доски',
    itemPrice: 3900
  },
  '8': {
    itemsID: '8', 
    itemName: 'Утеплитель для паркетной доски',
    itemPrice: 9090
  }, 
};

const clients = {
  '1': {
    clientID: '1',
    clientName: 'Чернышев Филипп Семенович'
  },
  '2': {
    clientID: '2',
    clientName: 'Филиппов Степан Васильевич'
  },
  '3': {
    clientID: '3',
    clientName: 'Тихонова Алина Давидовна'
  },
  '4': {
    clientID: '4',
    clientName: 'Александрова ЮлияиНикитична'
  },
  '5': {
    clientID: '5',
    clientName: 'Андрей'
  },
  '6': {
    clientID: '6',
    clientName: 'Судакова Анастасия Ильинична'
  },
  '7': {
    clientID: '7',
    clientName: 'Зверева Арина Николаевна'
  },
  '8': {
    clientID: '8',
    clientName: 'Карташов Максим Кириллович'
  },
  '9': {
    clientID: '9',
    clientName: 'Васильев Вадим Даниилович'
  },
  '10': {
    clientID: '10',
    clientName: 'София'
  },
}