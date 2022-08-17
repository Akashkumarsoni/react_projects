import { unstable_useId } from "@mui/material";

export const products = [
  {
    id: '001',
    name: "Peach Festive Ethnic Kurta",
    cprice:500,
    price: 200,
    pic: "https://admintcns.wforwoman.com/product/22FEA13190-504281/665/22FEA13190-504281_1.JPG",
  },
  {
    id: "002",
    name: "Green A-Line Dress",
    cprice:500,
    price: 300,
    pic: "https://wforwoman.gumlet.io/product/22FEA12869-701905/300/22FEA12869-701905.JPG",
  },
  {
    id: "003",
    name: "Black Yarn-Dyed Kurta",
    cprice:1000,
    price: 500,
    pic: "https://wforwoman.gumlet.io/product/22CRA12230-702080/300/21FEA12230-702080_1.JPG",
  },
  {
    id: "004",
    name: "Blue Yarn-Dyed Kurta",
    cprice:500,
    price: 200,
    pic: "https://admintcns.wforwoman.com/product/22CRA12230-702081/665/21FEA12230-702081_1.JPG",
  },
  {
    id: "005",
    name: "Yellow Yarn-Dyed Kurta",
    cprice:1000,
    price: 700,
    pic: "https://admintcns.wforwoman.com/product/22CRA12230-702083/665/21FEA12230-702083_3.JPG",
  },
  {
    id: "006",
    name: "Yellow Modern Ethnic Kurta",
    cprice:3000,
    price: 2000,
    pic: "https://admintcns.wforwoman.com/product/22FEA12932-503695/665/22FEA12932-503695_1.JPG",
  },
  {
    id: "007",
    name: "Black Printed Kurta",
    cprice: 4000,
    price: 3000,
    pic: "https://admintcns.wforwoman.com/product/22FEA13089-503654/665/22FEA13089-503654_1.JPG",
  },
  {
    id: "008",
    name: "Yellow Modern Ethnic Kurta",
    cprice:4000,
    price: 2000,
    pic: "https://admintcns.wforwoman.com/product/22FEA12930-503639/665/22FEA12930-503639_1.JPG",
  },
  {
    id: "009",
    name: "White Printed Kurta",
    cprice:1000,
    price: 500,
    pic: "https://admintcns.wforwoman.com/product/22FEA12929-503744/665/22FEA12929-503744_1.JPG",
  },
  {
    id: "010",
    name: "Blue Festive Ethnic Kurta",
    cprice:3000,
    price: 2000,
    pic: "https://admintcns.wforwoman.com/product/22FEA13183-502483/665/22FEA13183-502483_1.JPG",
  },
  {
    id: "011",
    name: "Green Yarn-Dyed Kurta",
    cprice:3000,
    price: 2000,
    pic: "https://admintcns.wforwoman.com/product/22CRA12230-702082/665/21FEA12230-702082_1.JPG",
  },
  {
    id: "012",
    name: "Pink Festive Ethnic Kurta",
    cprice:5000,
    price: 4000,
    pic: "https://admintcns.wforwoman.com/product/22FEA13170-504151/665/22FEA13170-504151_1.JPG",
  },
  {
    id: "013",
    name: "Green Festive Ethnic Kurta",
    cprice:5000,
    price: 2000,
    pic: "https://admintcns.wforwoman.com/product/22FEA13158-504211/665/22FEA13158-504211_1.JPG",
  },
  {
    id: "014",
    name: "Pink Festive Ethnic Kurta",
    cprice:5000,
    price: 4000,
    pic: "https://admintcns.wforwoman.com/product/22FEA13183-502484/665/22FEA13183-502484_1.JPG",
  },
  {
    id: "015",
    name: "Blue Floral Printed Kurta",
    cprice:5000,
    price: 2000,
    pic: "https://admintcns.wforwoman.com/product/22FEA13204-505231/665/22FEA13204-505231_1.JPG",
  },
  {
    id: "016",
    name: "Blue Festive Ethnic Kurta",
    cprice:5000,
    price: 2000,
    pic: "https://admintcns.wforwoman.com/product/22FEA13183-502483/665/22FEA13183-502483_1.JPG",
  },
  {
    id: "017",
    name: "Pink Printed Kurta",
    cprice: 2000,
    price: 800,
    pic: "https://admintcns.wforwoman.com/product/22FEA12957-503661/665/22FEA12957-503661.jpg",
  },
  {
    id: "018",
    name: "Orange Ethnic Festive Kurta and Palazzo Set",
    cprice: 3000,
    price: 2000,
    pic: "https://admintcns.wforwoman.com/product/22FEAS12934-703010/665/22FEAS12934-703010.JPG",
  },
  {
    id: "019",
    name: "Lichen Green Ethnic Kurta with Culottes",
    cprice: 3000,
    price: 2000,
    pic: "https://admintcns.wforwoman.com/product/22FEAS12936-503677/665/22FEAS12936-503677_1.JPG",
  },
  {
    id: "020",
    name: "White Flared Dress",
    cprice: 3000,
    price: 2000,
    pic: "https://admintcns.wforwoman.com/product/22FEA13169-504178/665/22FEA13169-504178.JPG",
  },
  {
    id: "021",
    name: "Peach Printed Dress",
    cprice: 3000,
    price: 2000,
    pic: "https://admintcns.wforwoman.com/product/22FEA12949-503714/665/22FEA12949-503714.JPG",
  },
  {
    id: "022",
    name: "Peach Ethnic Kurta with Culottes",
    cprice: 3000,
    price: 2000,
    pic: "https://admintcns.wforwoman.com/product/22FEAS12936-503678/665/22FEAS12936-503678_1.JPG",
  },
  {
    id: "023",
    name: "Black Yarn-Dyed Kurta, Straight Palazzo and Dupatta Set",
    cprice: 3000,
    price: 2000,
    pic: "https://admintcns.wforwoman.com/product/22FEAS12853-603653/665/22FEAS12853-603653.jpg",
  },
  // {
  //   id: "024",
  //   name: "Shirt",
  //   price: 200,
  //   pic: "https://technext.github.io/famms/images/p2.png",
  // },
  // {
  //   id: "025",
  //   name: "Shirt",
  //   price: 200,
  //   pic: "https://technext.github.io/famms/images/p3.png",
  // },
  // {
  //   id: "026",
  //   name: "Shirt",
  //   price: 200,
  //   pic: "https://technext.github.io/famms/images/p4.png",
  // },
  // {
  //   id: "027",
  //   name: "Shirt",
  //   price: 200,
  //   pic: "https://technext.github.io/famms/images/p5.png",
  // },
  // {
  //   id: "028",
  //   name: "Shirt",
  //   price: 200,
  //   pic: "https://technext.github.io/famms/images/p6.png",
  // },
  // {
  //   id: "029",
  //   name: "Shirt",
  //   price: 200,
  //   pic: "https://technext.github.io/famms/images/p7.png",
  // },
  // {
  //   id: "030",
  //   name: "Shirt",
  //   price: 200,
  //   pic: "https://technext.github.io/famms/images/p8.png",
  // },
  // {
  //   id: "031",
  //   name: "Shirt",
  //   price: 200,
  //   pic: "https://technext.github.io/famms/images/p9.png",
  // },
  // {
  //   id: "032",
  //   name: "Shirt",
  //   price: 200,
  //   pic: "https://technext.github.io/famms/images/p9.png",
  // },
];
