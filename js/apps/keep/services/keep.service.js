import { storageService } from './storage.service.js'

export const keepService = {
    query,
    getKeepById,
    getNextKeepId,
    addReview,
    deleteReview,
}

const KEY = 'keeps';

var gKeeps = storageService.loadFromStorage(KEY) ||
 [
    {
      "id": "OXeMG8wNskc",
      "title": "metus hendrerit",
      "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
      "authors": [
        "Barbara Cartland"
      ],
      "publishedDate": 1999,
      "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
      "pageCount": 713,
      "categories": [
        "Computers",
        "Hack"
      ],
      "thumbnail": "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg?w=800&quality=85",
      "language": "en",
      "listPrice": {
        "amount": 109,
        "currencyCode": "EUR",
        "isOnSale": false
      }
    },
    {
      "id": "JYOJa2NpSCq",
      "title": "morbi",
      "subtitle": "lorem euismod dictumst inceptos mi",
      "authors": [
        "Barbara Cartland"
      ],
      "publishedDate": 1978,
      "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
      "pageCount": 129,
      "categories": [
        "Computers",
        "Hack"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1511762180596-d03b808430fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "language": "sp",
      "listPrice": {
        "amount": 44,
        "currencyCode": "EUR",
        "isOnSale": true
      }
    },
    {
      "id": "1y0Oqts35DQ",
      "title": "at viverra venenatis",
      "subtitle": "gravida libero facilisis rhoncus urna etiam",
      "authors": [
        "Dr. Seuss"
      ],
      "publishedDate": 1999,
      "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
      "pageCount": 972,
      "categories": [
        "Computers",
        "Hack"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "language": "he",
      "listPrice": {
        "amount": 108,
        "currencyCode": "ILS",
        "isOnSale": false
      }
    },
    {
      "id": "kSnfIJyikTP",
      "title": "dictum",
      "subtitle": "augue eu consectetur class curabitur conubia ligula in ullamcorper",
      "authors": [
        "Danielle Steel"
      ],
      "publishedDate": 1978,
      "description": "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",
      "pageCount": 303,
      "categories": [
        "Computers",
        "Hack"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1484452330304-377cdeb05340?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
      "language": "en",
      "listPrice": {
        "amount": 30,
        "currencyCode": "EUR",
        "isOnSale": true
      }
    },
    {
      "id": "f4iuVmbuKCC",
      "title": "sem himenaeos aptent",
      "subtitle": "interdum per habitasse luctus purus est",
      "authors": [
        "Dr. Seuss"
      ],
      "publishedDate": 2011,
      "description": "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
      "pageCount": 337,
      "categories": [
        "Computers",
        "Hack"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "language": "sp",
      "listPrice": {
        "amount": 19,
        "currencyCode": "USD",
        "isOnSale": false
      }
    },
    {
      "id": "U2rfZO6oBZf",
      "title": "mi ante posuere",
      "subtitle": "sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",
      "authors": [
        "Leo Tolstoy"
      ],
      "publishedDate": 1978,
      "description": "senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
      "pageCount": 748,
      "categories": [
        "Computers",
        "Hack"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1572492887328-4d2ecd6375cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80",
      "language": "en",
      "listPrice": {
        "amount": 91,
        "currencyCode": "USD",
        "isOnSale": true
      }
    },
    {
      "id": "xI0wrXaaAcq",
      "title": "non",
      "subtitle": "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
      "authors": [
        "Leo Tolstoy"
      ],
      "publishedDate": 2011,
      "description": "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
      "pageCount": 65,
      "categories": [
        "Computers",
        "Hack"
      ],
      "thumbnail": "https://images.unsplash.com/flagged/photo-1577567052147-dce889d030af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "language": "he",
      "listPrice": {
        "amount": 90,
        "currencyCode": "USD",
        "isOnSale": false
      }
    },
    {
      "id": "9laHCEdSpFy",
      "title": "tristique",
      "subtitle": "consectetur a eu tincidunt condimentum amet nisi",
      "authors": [
        "Dr. Seuss"
      ],
      "publishedDate": 1999,
      "description": "magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
      "pageCount": 299,
      "categories": [
        "Computers",
        "Hack"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1556711905-4bd1b6603275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      "language": "he",
      "listPrice": {
        "amount": 176,
        "currencyCode": "EUR",
        "isOnSale": false
      }
    },
    {
      "id": "nGhVwZvGCGp",
      "title": "urna ornare gravida",
      "subtitle": "sem vestibulum semper convallis pharetra tempor himenaeos ut",
      "authors": [
        "Jin Yong"
      ],
      "publishedDate": 2011,
      "description": "porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",
      "pageCount": 803,
      "categories": [
        "Computers",
        "Hack"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1598007376125-b0e329e36636?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
      "language": "sp",
      "listPrice": {
        "amount": 116,
        "currencyCode": "USD",
        "isOnSale": true
      }
    },
    {
      "id": "Q8Q9Lsd03BD",
      "title": "consequat neque volutpat",
      "subtitle": "vel quis taciti fermentum feugiat ullamcorper curae praesent",
      "authors": [
        "Dr. Seuss"
      ],
      "publishedDate": 1978,
      "description": "curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
      "pageCount": 891,
      "categories": [
        "Computers",
        "Hack"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1508081685193-835a84a79091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "language": "en",
      "listPrice": {
        "amount": 145,
        "currencyCode": "EUR",
        "isOnSale": false
      },
    }
  
  ]
  storageService.saveToStorage(KEY, gKeeps)



function query(filterBy) {
    if(filterBy) {
        let {title, minPrice, maxPrice} = filterBy
        maxPrice = maxPrice ? maxPrice : Infinity 
        minPrice = minPrice ? minPrice : 0
        const keepsToShow = gKeeps.filter(keep => keep.title.includes(title) && keep.listPrice.amount >= minPrice && keep.listPrice.amount <= maxPrice)
        return Promise.resolve(keepsToShow)
    }
    return Promise.resolve(gKeeps)
}


function getKeepById(keepId){
  var keep = gKeeps.find(keep => {
    return keepId === keep.id
  })
  return Promise.resolve(keep)
}

function getNextKeepId(keepId) {
  const keepIdx = gKeeps.findIndex(keep => keep.id === keepId)
  let nextKeepIdx = keepIdx + 1
  if (nextKeepIdx === gKeeps.length) nextKeepIdx = 0
  return gKeeps[nextKeepIdx].id
}


function addReview(keepId, review){
  const keep = gKeeps.find(keep => {
    return keepId ===keep.id;
  })
  if (!keep.reviews) {
    keep.reviews = [];
  }
  keep.reviews.push(review)
  storageService.saveToStorage(KEY, gKeeps)
  return Promise.resolve(keep);
}



function deleteReview(keepId, reviewId) {
  const keepIdx = gKeeps.findIndex(keep => keep.id === keepId)
  const reviewIdx = gKeeps[keepIdx].reviews.findIndex(review => review.id === reviewId);
  gKeeps[keepIdx].reviews.splice(reviewIdx, 1);
  return Promise.resolve();
}


// function SearchKeep(keySerch){
    
//   let keepCache = storageService.loadFromStorage('searchKeeps')
//   if (keepCache) {
//       console.log('No need to fetch, retrieving from Cache');
//       return Promise.resolve(keepCache)
//   }
//   const prm = axios.get(`https://www.googleapis.com/keeps/v1/volumes?printType=keeps&q=${keySerch}`)
//   prm.then((res) => {
//       console.log('Axios RES:', res);
//       keepCache = res.data
//       storageService.saveToStorage('searchKeeps', res.data)
//       return(res.data)
//   })
//   prm.catch((err) => {
//       console.log('Cannot reach server:', err);
//   })


// }
