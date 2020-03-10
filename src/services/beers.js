import axios from 'axios';

const listAll = () =>
  new Promise((resolve, reject) => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then(result => {
        const beerList = result.data;
        console.log(beerList);
        resolve(beerList);
      })
      .catch(error => {
        reject(error);
      });
  });

export { listAll };
