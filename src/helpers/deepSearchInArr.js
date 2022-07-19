const contains = (query, item) => {
  if (item) {
    // string, number or boolean
    if (typeof item != 'object') {
      const str = item.toString().toLowerCase();
      if (str.includes(query.toString().toLowerCase())) {
        return true;
      }
    } else {
      const str = JSON.stringify(item).toLowerCase();
      if (str.includes(query.toString().toLowerCase())) {
        return true;
      }
      // item is an object
      // for (let key in item) {
      //   console.log("PESQUISA STR", str);
      //   if (item[key]) {
      //     if (typeof item[key] == 'object') {
      //       return contains(query, item[key]);
      //     } else {
      //       const str = item[key].toString().toLowerCase();
      //       if (str.includes(query.toString().toLowerCase())) {
      //         return true;
      //       }
      //     }
      //   }
      // }
    }
  }
  return false;
};

export const deepSearchInArr = (query, arr) => {
  return arr.filter(x => x.Nome.toLowerCase().includes(query.toLowerCase()));
  // let array = [];
  // console.log(arr)
  // for (let i = 0; i < arr.length; i++) {
  //   if (contains(query, arr[i])) {
  //     console.log('É PRA ADD', arr[i])
  //     array.push(arr[i]);
  //   } else {
  //     array.push(null);
  //   }
  //   if (i == arr.length - 1) {
  //     return array;
  //   }
  // }
  // return array;
  // for (let i = 0; i <= arr.length - 1; i++) {
  //   if (contains(query, arr[i])) {
  //     array.push(arr[i]);
  //   } else {
  //     array.push(null);
  //   }
  //   if (i == arr.length - 1) {
  //     return array;
  //   }
  // }
};
