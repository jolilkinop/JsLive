import { catalog } from './catalog.js';
import { getData } from './getData.js'

const wishList = ['idd005', 'idd100', 'idd077', 'idd033'];

const cartlist = [
  {
    id: 'idd015',
    count: 3
  },
  {
    id: 'idd045',
    count: 1
  },
  {
    id: 'idd095',
    count: 2
  }
];

export const loadData = () => {

  if (location.search) {
    const search = decodeURI(location.search);
    const prop = search.split('=')[0].slice(1);
    const value = search.split('=')[1];


    if (prop === 's') {
      console.log(value);
    } else if (prop === 'wishlist') {
      getData.wishList(wishList, (data) => console.dir({wishlist: data}));
    } else {
      getData.category(prop, value, (data) => console.log(data));
    }
  }

  if (location.hash) {
    getData.item(location.hash.slice(1), (data) => console.log(data));
  }

  if (location.pathname.includes('cart')) {
    getData.cart(cartlist, (data) => console.log(data));
  }
};

