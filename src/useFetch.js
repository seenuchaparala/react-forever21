// import { useState, useEffect } from 'react'

// const useFetch = (query) => {
//   const key = process.env.REACT_APP_API_KEY
 
//   const [data, setData] = useState([])
//   useEffect(() => {
//     const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=${query}&rows=60&color_groups=black&start=0`
//     const options = {
//       method: 'GET',

//       headers: {
//         'X-RapidAPI-Key': '78bed3a4a8mshbf6e6f99e1ad1a5p14e1ddjsn26dbe05350e0',
//         'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com',
//       },
//     }

//     fetch(url, options)
//       .then((response) => response.json())
//       .then((result) => setData(result.response.docs))
//       .catch((error) => console.log(error))
//   }, [query, key])
//   return data
// }

// export default useFetch

const useFetch = {
  "response": {
      "numFound": 115,
      "start": 0,
      "docs": [
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw70c5972d/1_front_750/00468077-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000468077011.html",
              "brand": "FOREVER 21",
              "title": "Tinted Cat-Eye Sunglasses",
              "pid": "1000468077",
              "variants": [
                  {
                      "sku_color_group": "BROWN",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw24e3cabf/1_front_750/00468077-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw06b29242/sw_22/00468077-02.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw70c5972d/1_front_750/00468077-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw116bf495/sw_22/00468077-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw6bf60a5a/1_front_750/00460987-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000460987021.html",
              "brand": "21MEN",
              "title": "Men Rectangular Frame Sunglasses",
              "pid": "1000460987",
              "variants": [
                  {
                      "sku_color_group": "BLUE",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwcbb98bdd/1_front_750/00460987-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwa28da7a6/sw_22/00460987-02.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw6bf60a5a/1_front_750/00460987-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw83694a56/sw_22/00460987-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwc2b3b078/1_front_750/00465340-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000465340011.html",
              "brand": "21MEN",
              "title": "Men Rectangular Frame Sunglasses",
              "pid": "1000465340",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwc2b3b078/1_front_750/00465340-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwaff74226/sw_22/00465340-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw3f434e3d/1_front_750/00465337-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000465337011.html",
              "brand": "21MEN",
              "title": "Men Square Frame Sunglasses",
              "pid": "1000465337",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw3f434e3d/1_front_750/00465337-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw78924a1d/sw_22/00465337-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 5.99,
              "price": 5.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw60de8cd0/1_front_750/00464850-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000464850011.html",
              "brand": "FOREVER 21 GIRLS",
              "title": "Girls Aviator Sunglasses (Kids)",
              "pid": "1000464850",
              "variants": [
                  {
                      "sku_color_group": "YELLOW",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw9bebab60/1_front_750/00464850-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwa4c7ec53/sw_22/00464850-01.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw60de8cd0/1_front_750/00464850-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwb91332a9/sw_22/00464850-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 5.99,
              "price": 5.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw5b4f9434/1_front_750/00464854-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000464854011.html",
              "brand": "FOREVER 21 GIRLS",
              "title": "Kids Aviator Frame Sunglasses (Girls + Boys)",
              "pid": "1000464854",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw5b4f9434/1_front_750/00464854-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwf9516c34/sw_22/00464854-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw7580130e/1_front_750/00464396-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000464396011.html",
              "brand": "FOREVER 21",
              "title": "Round Frame Sunglasses",
              "pid": "1000464396",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw7580130e/1_front_750/00464396-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw322604cd/sw_22/00464396-02.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "PINK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw5567e942/1_front_750/00464396-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwf9983383/sw_22/00464396-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1f49d2f4/1_front_750/00464412-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000464412011.html",
              "brand": "FOREVER 21",
              "title": "Square Frame Sunglasses",
              "pid": "1000464412",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1f49d2f4/1_front_750/00464412-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwd41c3f4b/sw_22/00464412-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwdfd9a9af/1_front_750/00464395-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000464395011.html",
              "brand": "FOREVER 21",
              "title": "Cat-Eye Frame Sunglasses",
              "pid": "1000464395",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwdfd9a9af/1_front_750/00464395-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwd7aaf838/sw_22/00464395-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 5.99,
              "price": 5.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwa87d43b4/1_front_750/00464364-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000464364011.html",
              "brand": "FOREVER 21 GIRLS",
              "title": "Girls Round Frame Sunglasses (Kids)",
              "pid": "1000464364",
              "variants": [
                  {
                      "sku_color_group": "PINK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw91f1b31d/1_front_750/00464364-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw6051c3ef/sw_22/00464364-02.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwa87d43b4/1_front_750/00464364-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw3de7790b/sw_22/00464364-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 5.0,
              "price": 5.0,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw361909c7/1_front_750/00402212-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000402212021.html",
              "brand": "FOREVER 21",
              "title": "Cat-Eye Frame Sunglasses",
              "pid": "1000402212",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw361909c7/1_front_750/00402212-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw6ccbb7bb/sw_22/00402212-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw0ec3e4b7/1_front_750/00403595-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000403595021.html",
              "brand": "FOREVER 21",
              "title": "Gradient Square Sunglasses",
              "pid": "1000403595",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw0ec3e4b7/1_front_750/00403595-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw7533bda2/sw_22/00403595-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe6965b7d/1_front_750/00469645-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000469645021.html",
              "brand": "FOREVER 21",
              "title": "Cat-Eye Frame Sunglasses",
              "pid": "1000469645",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe6965b7d/1_front_750/00469645-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw54170757/sw_22/00469645-02.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BROWN",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw46ebf8e0/1_front_750/00469645-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwee2b626c/sw_22/00469645-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwfc870162/1_front_750/00457768-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000457768011.html",
              "brand": "FOREVER 21",
              "title": "Tortoiseshell Cat-Eye Sunglasses",
              "pid": "1000457768",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwfc870162/1_front_750/00457768-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw71673f5e/sw_22/00457768-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw4571037c/1_front_750/00443166-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000443166021.html",
              "brand": "FOREVER 21",
              "title": "Oval Metal Sunglasses",
              "pid": "1000443166",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw4571037c/1_front_750/00443166-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwfdb3a54f/sw_22/00443166-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 5.99,
              "price": 5.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1f6ecdf5/1_front_750/00461782-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000461782021.html",
              "brand": "21MEN",
              "title": "Men Rectangular Sunglasses",
              "pid": "1000461782",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1f6ecdf5/1_front_750/00461782-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw41301adb/sw_22/00461782-02.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "WHITE",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwc0694f04/1_front_750/00461782-03.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw1803de46/sw_22/00461782-03.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe8697ee6/1_front_750/00464397-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000464397021.html",
              "brand": "FOREVER 21",
              "title": "Round Frame Sunglasses",
              "pid": "1000464397",
              "variants": [
                  {
                      "sku_color_group": "PINK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwf5f97c8d/1_front_750/00464397-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw882afb0c/sw_22/00464397-01.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe8697ee6/1_front_750/00464397-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw386e3db9/sw_22/00464397-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwab84b1ea/1_front_750/00464408-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000464408021.html",
              "brand": "FOREVER 21",
              "title": "Oval Frame Sunglasses",
              "pid": "1000464408",
              "variants": [
                  {
                      "sku_color_group": "WHITE",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw8124911d/1_front_750/00464408-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwa859acce/sw_22/00464408-01.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwab84b1ea/1_front_750/00464408-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw6844b540/sw_22/00464408-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw04c04abc/1_front_750/00464400-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000464400011.html",
              "brand": "FOREVER 21",
              "title": "Cat-Eye Frame Sunglasses",
              "pid": "1000464400",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw04c04abc/1_front_750/00464400-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw9962b1d3/sw_22/00464400-02.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "WHITE",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwc14cb148/1_front_750/00464400-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwbcc10887/sw_22/00464400-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw935e8501/1_front_750/00462100-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000462100011.html",
              "brand": "FOREVER 21",
              "title": "Cat-Eye Frame Sunglasses",
              "pid": "1000462100",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw935e8501/1_front_750/00462100-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw0dbb5841/sw_22/00462100-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe28b79db/1_front_750/00464403-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000464403011.html",
              "brand": "FOREVER 21",
              "title": "Rectangular Frame Sunglasses",
              "pid": "1000464403",
              "variants": [
                  {
                      "sku_color_group": "RED",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw356f891a/1_front_750/00464403-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw0484f8d0/sw_22/00464403-02.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe28b79db/1_front_750/00464403-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwcb000f58/sw_22/00464403-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw23a50caf/1_front_750/00460020-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000460020011.html",
              "brand": "FOREVER 21",
              "title": "Oversized Square Sunglasses",
              "pid": "1000460020",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw23a50caf/1_front_750/00460020-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwd05bed4e/sw_22/00460020-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwf9923c5d/1_front_750/00462050-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000462050011.html",
              "brand": "FOREVER 21",
              "title": "Tinted Cat-Eye Sunglasses",
              "pid": "1000462050",
              "variants": [
                  {
                      "sku_color_group": "GREEN",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw713fbfb5/1_front_750/00462050-03.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwa0919718/sw_22/00462050-03.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BROWN",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw7d1cd3a8/1_front_750/00462050-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw097fe3f1/sw_22/00462050-01.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwf9923c5d/1_front_750/00462050-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw3a79e7cc/sw_22/00462050-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 3.2,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwf8673cc6/1_front_750/00462055-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000462055021.html",
              "brand": "FOREVER 21",
              "title": "Cat-Eye Tinted Sunglasses",
              "pid": "1000462055",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwf8673cc6/1_front_750/00462055-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw94bd8668/sw_22/00462055-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwb1446cd0/1_front_750/00460012-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000460012021.html",
              "brand": "FOREVER 21",
              "title": "Cat-Eye Frame Sunglasses",
              "pid": "1000460012",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwb1446cd0/1_front_750/00460012-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw325aeabd/sw_22/00460012-01.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "PINK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw0b1e39e3/1_front_750/00460012-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw99b36bf4/sw_22/00460012-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dweb80d299/1_front_750/00460010-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000460010011.html",
              "brand": "FOREVER 21",
              "title": "Rectangular Tinted Sunglasses",
              "pid": "1000460010",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dweb80d299/1_front_750/00460010-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwcf79c8d8/sw_22/00460010-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 5.0,
              "price": 5.0,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwffa80e5b/1_front_750/00458364-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000458364021.html",
              "brand": "FOREVER 21",
              "title": "Tinted Cat-Eye Sunglasses",
              "pid": "1000458364",
              "variants": [
                  {
                      "sku_color_group": "BROWN",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwc1588392/1_front_750/00458364-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwec456a04/sw_22/00458364-01.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwffa80e5b/1_front_750/00458364-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw628b4e53/sw_22/00458364-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw30a8c6bc/1_front_750/00458327-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000458327011.html",
              "brand": "FOREVER 21",
              "title": "Tinted Aviator Sunglasses",
              "pid": "1000458327",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw30a8c6bc/1_front_750/00458327-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwaaf32f3c/sw_22/00458327-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwb6d64ebb/1_front_750/00458356-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000458356011.html",
              "brand": "FOREVER 21",
              "title": "Tinted Aviator Sunglasses",
              "pid": "1000458356",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwb6d64ebb/1_front_750/00458356-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwe793d150/sw_22/00458356-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 9.99,
              "price": 9.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw0e6b29da/1_front_750/00460022-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000460022021.html",
              "brand": "FOREVER 21",
              "title": "Oversized Square Sunglasses",
              "pid": "1000460022",
              "variants": [
                  {
                      "sku_color_group": "BROWN",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwcd8b00a9/1_front_750/00460022-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw76e0debb/sw_22/00460022-02.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw0e6b29da/1_front_750/00460022-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw6da22e79/sw_22/00460022-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw7163c47e/1_front_750/00460008-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000460008031.html",
              "brand": "FOREVER 21",
              "title": "Tinted Oval Sunglasses",
              "pid": "1000460008",
              "variants": [
                  {
                      "sku_color_group": "PINK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw91c6e38d/1_front_750/00460008-03.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw1560b8fe/sw_22/00460008-03.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw7163c47e/1_front_750/00460008-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwdfc7508e/sw_22/00460008-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw9f3464f6/1_front_750/00458342-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000458342021.html",
              "brand": "FOREVER 21",
              "title": "Tinted Cat-Eye Sunglasses",
              "pid": "1000458342",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw9f3464f6/1_front_750/00458342-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwea577718/sw_22/00458342-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw47f35c52/1_front_750/00458346-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000458346011.html",
              "brand": "FOREVER 21",
              "title": "Oversized Square Frame Sunglasses",
              "pid": "1000458346",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw47f35c52/1_front_750/00458346-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw03bc33ee/sw_22/00458346-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw4f1024bf/1_front_750/00458341-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000458341021.html",
              "brand": "FOREVER 21",
              "title": "Checkered Rectangular Sunglasses",
              "pid": "1000458341",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw4f1024bf/1_front_750/00458341-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwb2c483ab/sw_22/00458341-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 9.99,
              "price": 9.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwfec1d39c/1_front_750/00458339-03.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000458339011.html",
              "brand": "FOREVER 21",
              "title": "Square Frame Sunglasses",
              "pid": "1000458339",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwfec1d39c/1_front_750/00458339-03.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw9c2b68e7/sw_22/00458339-03.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "WHITE",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe6fc1555/1_front_750/00458339-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw78549c3f/sw_22/00458339-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw2c922211/1_front_750/00456872-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000456872021.html",
              "brand": "FOREVER 21",
              "title": "Oversized Square Sunglasses",
              "pid": "1000456872",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw2c922211/1_front_750/00456872-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw934a5349/sw_22/00456872-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 4.0,
              "price": 9.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw70ce41ec/1_front_750/00456874-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000456874011.html",
              "brand": "FOREVER 21",
              "title": "Tinted Shield Sunglasses",
              "pid": "1000456874",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw70ce41ec/1_front_750/00456874-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw6974ac6b/sw_22/00456874-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1bf32053/1_front_750/00456873-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000456873021.html",
              "brand": "FOREVER 21",
              "title": "Aviator Gradient Sunglasses",
              "pid": "1000456873",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1bf32053/1_front_750/00456873-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw38084831/sw_22/00456873-02.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "ORANGE",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwef0df22c/1_front_750/00456873-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwc3056b58/sw_22/00456873-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw8fde7f7d/1_front_750/00457770-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000457770011.html",
              "brand": "FOREVER 21",
              "title": "Tinted Square Sunglasses",
              "pid": "1000457770",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw8fde7f7d/1_front_750/00457770-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw9f8cf28d/sw_22/00457770-01.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BROWN",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw57dc904e/1_front_750/00457770-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwc0d1d68f/sw_22/00457770-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe9685f77/1_front_750/00454231-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000454231011.html",
              "brand": "FOREVER 21",
              "title": "Square Tinted Sunglasses",
              "pid": "1000454231",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe9685f77/1_front_750/00454231-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwde3cdefc/sw_22/00454231-01.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BROWN",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwb8aea60c/1_front_750/00454231-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw7c6c496b/sw_22/00454231-02.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "OTHER",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw749d170a/1_front_750/00454231-03.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw71e1124d/sw_22/00454231-03.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 3.2,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw73b00e21/1_front_750/00453065-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000453065021.html",
              "brand": "FOREVER 21",
              "title": "Tinted Cat-Eye Sunglasses",
              "pid": "1000453065",
              "variants": [
                  {
                      "sku_color_group": "OTHER",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw847b5847/1_front_750/00453065-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw95e5316e/sw_22/00453065-02.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw73b00e21/1_front_750/00453065-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw401e819c/sw_22/00453065-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 9.99,
              "price": 9.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwf803f4e6/1_front_750/00452917-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000452917011.html",
              "brand": "FOREVER 21",
              "title": "Oversized Shield Sunglasses",
              "pid": "1000452917",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwf803f4e6/1_front_750/00452917-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwf4d973ae/sw_22/00452917-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dweb110b54/1_front_750/00453077-04.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000453077011.html",
              "brand": "FOREVER 21",
              "title": "Blue Light Square Reader Glasses",
              "pid": "1000453077",
              "variants": [
                  {
                      "sku_color_group": "BROWN",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw87020de3/1_front_750/00453077-03.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwcc366f7a/sw_22/00453077-03.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dweb110b54/1_front_750/00453077-04.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw90441f86/sw_22/00453077-04.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "OTHER",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw60041fe6/1_front_750/00453077-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw1c4d79d2/sw_22/00453077-02.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "PINK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw508e49ae/1_front_750/00453077-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw20c1175f/sw_22/00453077-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 6.0,
              "price": 6.0,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw53df66f1/1_front_750/00450900-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000450900011.html",
              "brand": "FOREVER 21",
              "title": "Cat-Eye Tinted Sunglasses",
              "pid": "1000450900",
              "variants": [
                  {
                      "sku_color_group": "OTHER",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwc68d9bcf/1_front_750/00450900-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw8ffb6f38/sw_22/00450900-02.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw53df66f1/1_front_750/00450900-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw774e5685/sw_22/00450900-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw50b8ab3f/1_front_750/00452918-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000452918011.html",
              "brand": "FOREVER 21",
              "title": "Aviator Frame Sunglasses",
              "pid": "1000452918",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw50b8ab3f/1_front_750/00452918-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwf50136ca/sw_22/00452918-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 7.99,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw206abdfd/1_front_750/00453073-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000453073011.html",
              "brand": "FOREVER 21",
              "title": "Oversized Square Sunglasses",
              "pid": "1000453073",
              "variants": [
                  {
                      "sku_color_group": "ORANGE",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwb896f6b7/1_front_750/00453073-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw8f1ed334/sw_22/00453073-01.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw206abdfd/1_front_750/00453073-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw120be185/sw_22/00453073-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 3.2,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw03c8b650/1_front_750/00450910-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000450910021.html",
              "brand": "FOREVER 21",
              "title": "Tortoiseshell Blue Light Reader Glasses",
              "pid": "1000450910",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw03c8b650/1_front_750/00450910-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw9cccc786/sw_22/00450910-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 5.0,
              "price": 5.0,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw247e21b2/1_front_750/00449461-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000449461011.html",
              "brand": "FOREVER 21",
              "title": "Rimless Rectangle Sunglasses",
              "pid": "1000449461",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw247e21b2/1_front_750/00449461-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwde1b9e43/sw_22/00449461-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 3.2,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw64e3870e/1_front_750/00447188-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000447188011.html",
              "brand": "FOREVER 21",
              "title": "Tortoiseshell Oval Sunglasses",
              "pid": "1000447188",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw64e3870e/1_front_750/00447188-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwe4770731/sw_22/00447188-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 3.2,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwcd887f97/1_front_750/00450451-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000450451011.html",
              "brand": "FOREVER 21",
              "title": "Tortoiseshell Square Sunglasses",
              "pid": "1000450451",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwcd887f97/1_front_750/00450451-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwaca8bb24/sw_22/00450451-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 3.2,
              "price": 7.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwf1cfb17b/1_front_750/00449460-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000449460011.html",
              "brand": "FOREVER 21",
              "title": "Tinted Cat-Eye Sunglasses",
              "pid": "1000449460",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwf1cfb17b/1_front_750/00449460-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwdda831a3/sw_22/00449460-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 5.0,
              "price": 5.0,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwf8fb04b6/1_front_750/00447178-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000447178011.html",
              "brand": "FOREVER 21",
              "title": "Tortoiseshell Gradient Sunglasses",
              "pid": "1000447178",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwf8fb04b6/1_front_750/00447178-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwb1a0c560/sw_22/00447178-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 3.0,
              "price": 3.0,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw9d632254/1_front_750/00425222-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000425222011.html",
              "brand": "21MEN",
              "title": "Men Round Square Sunglasses",
              "pid": "1000425222",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw9d632254/1_front_750/00425222-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwe50cfc20/sw_22/00425222-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 4.0,
              "price": 9.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwac07bdcd/1_front_750/00443110-02.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000443110021.html",
              "brand": "FOREVER 21",
              "title": "Blue Light Reader Glasses",
              "pid": "1000443110",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwac07bdcd/1_front_750/00443110-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw1b37370a/sw_22/00443110-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 5.0,
              "price": 5.0,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw8fb82dd6/1_front_750/00444621-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000444621011.html",
              "brand": "FOREVER 21",
              "title": "Square Frame Sunglasses",
              "pid": "1000444621",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw8fb82dd6/1_front_750/00444621-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwb39c1dd2/sw_22/00444621-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 2.4,
              "price": 5.99,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw033082f7/1_front_750/00444613-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000444613021.html",
              "brand": "FOREVER 21",
              "title": "Tinted Cat-Eye Sunglasses",
              "pid": "1000444613",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw033082f7/1_front_750/00444613-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwb681c9b0/sw_22/00444613-01.jpg"
                      ]
                  },
                  {
                      "sku_color_group": "OTHER",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe607f453/1_front_750/00444613-02.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw3b3af905/sw_22/00444613-02.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 4.0,
              "price": 4.0,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw23b5281c/1_front_750/00444618-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000444618011.html",
              "brand": "FOREVER 21",
              "title": "Rimless Cat-Eye Sunglasses",
              "pid": "1000444618",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw23b5281c/1_front_750/00444618-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwa01fbdd6/sw_22/00444618-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 5.0,
              "price": 5.0,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw509dc809/1_front_750/00444608-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000444608011.html",
              "brand": "FOREVER 21",
              "title": "Tortoiseshell Square Sunglasses",
              "pid": "1000444608",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw509dc809/1_front_750/00444608-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwb3a649bb/sw_22/00444608-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 6.0,
              "price": 6.0,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw27c87662/1_front_750/00444614-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000444614011.html",
              "brand": "FOREVER 21",
              "title": "Tinted Cat-Eye Sunglasses",
              "pid": "1000444614",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw27c87662/1_front_750/00444614-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwb8745f40/sw_22/00444614-01.jpg"
                      ]
                  }
              ]
          },
          {
              "sale_price": 6.0,
              "price": 6.0,
              "thumb_image": "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw57a574a3/1_front_750/00440655-01.jpg?sh=330",
              "url": "https://www.forever21.com/us/1000440655011.html",
              "brand": "FOREVER 21",
              "title": "Oversized Square Sunglasses",
              "pid": "1000440655",
              "variants": [
                  {
                      "sku_color_group": "BLACK",
                      "sku_thumb_images": [
                          "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw57a574a3/1_front_750/00440655-01.jpg?sh=330"
                      ],
                      "sku_swatch_images": [
                          "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw9d41c1b1/sw_22/00440655-01.jpg"
                      ]
                  }
              ]
          }
      ]
  },
  "facet_fields": {
      "brand": [
          {
              "name": "WOMEN",
              "count": 102
          },
          {
              "name": "MEN",
              "count": 8
          },
          {
              "name": "KIDS",
              "count": 3
          },
          {
              "name": "BEAUTY",
              "count": 2
          }
      ],
      "gender": [
          {
              "name": "Female",
              "count": 107
          },
          {
              "name": "Male",
              "count": 8
          }
      ],
      "color_groups": [
          {
              "name": "black",
              "count": 115
          },
          {
              "name": "brown",
              "count": 53
          },
          {
              "name": "pink",
              "count": 38
          },
          {
              "name": "other",
              "count": 15
          },
          {
              "name": "white",
              "count": 19
          },
          {
              "name": "orange",
              "count": 11
          },
          {
              "name": "red",
              "count": 11
          },
          {
              "name": "green",
              "count": 6
          },
          {
              "name": "yellow",
              "count": 116
          },
          {
              "name": "grey",
              "count": 18
          },
          {
              "name": "blue",
              "count": 6
          },
          {
              "name": "purple",
              "count": 2
          },
          {
              "name": "giftcard",
              "count": 1
          }
      ],
      "sizes": [
          {
              "name": "one size",
              "count": 115
          }
      ],
      "category_id_list": [
          {
              "name": "acc",
              "count": 54
          },
          {
              "name": "acc_glasses",
              "count": 52
          },
          {
              "name": "women_main",
              "count": 49
          },
          {
              "name": "sale",
              "count": 71
          },
          {
              "name": "sale_acc",
              "count": 68
          },
          {
              "name": "sale_women",
              "count": 68
          },
          {
              "name": "sale_acc_sunglasses",
              "count": 67
          },
          {
              "name": "promo_stocking_stuffers",
              "count": 68
          },
          {
              "name": "promo_stocking_stuffers_womens",
              "count": 68
          },
          {
              "name": "acc_glasses_sunglasses_cat_eye",
              "count": 16
          },
          {
              "name": "acc_glasses_sunglasses_square",
              "count": 23
          },
          {
              "name": "promo_singles_sale",
              "count": 23
          },
          {
              "name": "promo_singles_sale_acc",
              "count": 23
          },
          {
              "name": "promo_the_hype_girl",
              "count": 24
          },
          {
              "name": "acc_glasses_sunglasses_round",
              "count": 7
          },
          {
              "name": "promo_influencer_buys_acc",
              "count": 6
          },
          {
              "name": "promo_master",
              "count": 11
          },
          {
              "name": "promo_summer_shop",
              "count": 6
          },
          {
              "name": "promo_25_under_best_sellers_acc",
              "count": 5
          },
          {
              "name": "promo_best_sellers_25_under",
              "count": 5
          },
          {
              "name": "promo_summer_shop_women",
              "count": 5
          },
          {
              "name": "backinstock",
              "count": 6
          },
          {
              "name": "backinstock_acc",
              "count": 6
          },
          {
              "name": "women_new_arrivals_accessories",
              "count": 6
          },
          {
              "name": "women_new_arrivals_accessories_sunglasses",
              "count": 6
          },
          {
              "name": "women_new_arrivals_clothing",
              "count": 6
          },
          {
              "name": "promo_90s_spring_vibe",
              "count": 5
          },
          {
              "name": "promo_acc_shop_by_girl_alexa",
              "count": 5
          },
          {
              "name": "promo_20_and_under_10_under",
              "count": 8
          },
          {
              "name": "promo_20_and_under_10_under_acc",
              "count": 7
          },
          {
              "name": "promo_20_and_under_10_under_women",
              "count": 7
          },
          {
              "name": "promo_web_exclusives",
              "count": 7
          },
          {
              "name": "promo_20_and_under_5_under",
              "count": 6
          },
          {
              "name": "promo_20_and_under_5_under_acc",
              "count": 6
          },
          {
              "name": "promo_cosmic_street_acc",
              "count": 5
          },
          {
              "name": "promo_the_goddess",
              "count": 5
          },
          {
              "name": "promo_doorbusters",
              "count": 4
          },
          {
              "name": "promo_doorbusters_acc",
              "count": 4
          },
          {
              "name": "promo_doorbusters_women",
              "count": 4
          },
          {
              "name": "promo_festival_shop",
              "count": 4
          },
          {
              "name": "promo_best_sellers_acc",
              "count": 3
          },
          {
              "name": "promo_shop_by_city_malibu_acc",
              "count": 3
          },
          {
              "name": "acc_glasses_sunglasses_aviators",
              "count": 9
          },
          {
              "name": "branded_shop",
              "count": 6
          },
          {
              "name": "branded_shop_women_accessories",
              "count": 5
          },
          {
              "name": "promo_forever_bold",
              "count": 3
          },
          {
              "name": "promo_heartland",
              "count": 3
          },
          {
              "name": "promo_heartland_acc",
              "count": 3
          },
          {
              "name": "promo_acc_shop_by_girl_callie",
              "count": 2
          },
          {
              "name": "promo_bored_not_boring",
              "count": 2
          },
          {
              "name": "promo_bts_deals",
              "count": 2
          },
          {
              "name": "promo_bts_deals_acc",
              "count": 2
          },
          {
              "name": "promo_bts_deals_women",
              "count": 2
          },
          {
              "name": "promo_casual_girl_plus",
              "count": 2
          },
          {
              "name": "promo_exclusives_acc",
              "count": 2
          },
          {
              "name": "promo_festival_shop_boho",
              "count": 2
          },
          {
              "name": "promo_festival_shop_women",
              "count": 2
          },
          {
              "name": "promo_occasion_shop_roadtrip",
              "count": 2
          },
          {
              "name": "promo_occasion_shop_vacation",
              "count": 2
          },
          {
              "name": "promo_plus_size_fall_uniform",
              "count": 2
          },
          {
              "name": "promo_shop_by_city_venice_acc",
              "count": 2
          },
          {
              "name": "promo_summer_shop_plus",
              "count": 2
          },
          {
              "name": "acc_glasses_readers",
              "count": 6
          },
          {
              "name": "mens_accessories",
              "count": 5
          },
          {
              "name": "mens_accessories_sunglasses",
              "count": 5
          },
          {
              "name": "mens_main",
              "count": 5
          },
          {
              "name": "bopis_shop_all",
              "count": 4
          },
          {
              "name": "mens_new_arrivals_accessories",
              "count": 4
          },
          {
              "name": "mens_new_arrivals_clothing",
              "count": 4
          },
          {
              "name": "mens_web_exclusives",
              "count": 4
          },
          {
              "name": "promo_bored_not_boring_acc",
              "count": 4
          },
          {
              "name": "promo_acc_under_10",
              "count": 3
          },
          {
              "name": "promo_good_game",
              "count": 3
          },
          {
              "name": "promo_singles_sale_women",
              "count": 3
          },
          {
              "name": "promo_summer_ready_plus",
              "count": 3
          },
          {
              "name": "backinstock_women",
              "count": 2
          },
          {
              "name": "promo_acc_under_10_womens",
              "count": 2
          },
          {
              "name": "promo_fall_sale",
              "count": 2
          },
          {
              "name": "promo_fall_sale_acc",
              "count": 2
          },
          {
              "name": "promo_fall_sale_women",
              "count": 2
          },
          {
              "name": "promo_influencer_jessica_lauren",
              "count": 2
          },
          {
              "name": "promo_january_collection_plus",
              "count": 2
          },
          {
              "name": "promo_plus_size_vacation",
              "count": 2
          },
          {
              "name": "promo_spring_break",
              "count": 2
          },
          {
              "name": "promo_spring_ready_shop_all",
              "count": 2
          },
          {
              "name": "promo_swimwear_acc",
              "count": 2
          },
          {
              "name": "promo_swimwear_acc_glasses",
              "count": 2
          },
          {
              "name": "promo_swimwear_acc_new_arrivals",
              "count": 2
          },
          {
              "name": "promo_vacation_accessories",
              "count": 2
          },
          {
              "name": "21_items",
              "count": 1
          },
          {
              "name": "21_items_acc",
              "count": 1
          },
          {
              "name": "promo_comfort_lux",
              "count": 1
          },
          {
              "name": "promo_cozy_but_cool",
              "count": 1
          },
          {
              "name": "promo_cozy_but_cool_plus",
              "count": 1
          },
          {
              "name": "promo_fall_staples_plus",
              "count": 1
          },
          {
              "name": "promo_fast_forward",
              "count": 1
          },
          {
              "name": "promo_festival_shop_plus",
              "count": 1
          },
          {
              "name": "promo_flash_deals",
              "count": 1
          },
          {
              "name": "promo_flash_deals_acc",
              "count": 1
          },
          {
              "name": "promo_flash_deals_womens",
              "count": 1
          },
          {
              "name": "promo_gen_z_looks",
              "count": 1
          },
          {
              "name": "promo_gen_z_looks_plus",
              "count": 1
          },
          {
              "name": "promo_holiday_shop_deals",
              "count": 1
          },
          {
              "name": "promo_holiday_shop_deals_acc",
              "count": 1
          },
          {
              "name": "promo_holiday_shop_deals_women",
              "count": 1
          },
          {
              "name": "promo_influencer_china_mcclain",
              "count": 1
          },
          {
              "name": "promo_influencer_madison_pettis",
              "count": 1
          },
          {
              "name": "promo_january_it_list",
              "count": 1
          },
          {
              "name": "promo_january_it_list_plus_size",
              "count": 1
          },
          {
              "name": "promo_memorial_day",
              "count": 1
          },
          {
              "name": "promo_memorial_day_accessories",
              "count": 1
          },
          {
              "name": "promo_new_low_prices",
              "count": 1
          },
          {
              "name": "promo_new_low_prices_acc",
              "count": 1
          },
          {
              "name": "promo_new_low_prices_women",
              "count": 1
          },
          {
              "name": "promo_now_trending",
              "count": 1
          },
          {
              "name": "promo_now_trending_crochet",
              "count": 1
          },
          {
              "name": "promo_occasion_shop_casual",
              "count": 1
          },
          {
              "name": "promo_occasion_shop_date_night",
              "count": 1
          },
          {
              "name": "promo_pineapple_express_acc",
              "count": 1
          },
          {
              "name": "promo_plus_size_going_out",
              "count": 1
          },
          {
              "name": "promo_pretty_cool",
              "count": 1
          },
          {
              "name": "promo_pretty_cool_acc",
              "count": 1
          },
          {
              "name": "promo_shop_by_city_downtown_mens",
              "count": 1
          },
          {
              "name": "promo_shop_by_city_hollywood",
              "count": 1
          },
          {
              "name": "promo_shop_by_city_hollywood_acc",
              "count": 1
          },
          {
              "name": "promo_shop_by_city_hollywood_plus",
              "count": 1
          },
          {
              "name": "promo_shop_by_city_venice",
              "count": 1
          },
          {
              "name": "promo_spring_break_acc",
              "count": 1
          },
          {
              "name": "promo_spring_deals_acc",
              "count": 1
          },
          {
              "name": "promo_summer_ready",
              "count": 1
          },
          {
              "name": "promo_sweethearts_ball",
              "count": 1
          },
          {
              "name": "promo_the_cool_girl",
              "count": 1
          },
          {
              "name": "promo_web_exclusive_essentials_plus",
              "count": 1
          },
          {
              "name": "promo_y2k_babe",
              "count": 1
          },
          {
              "name": "promo_y2k_women",
              "count": 1
          },
          {
              "name": "sale_newly_added",
              "count": 1
          },
          {
              "name": "promo_new_this_week",
              "count": 6
          },
          {
              "name": "promo_new_this_week_acc",
              "count": 6
          },
          {
              "name": "girls_accessories",
              "count": 3
          },
          {
              "name": "girls_clothing",
              "count": 3
          },
          {
              "name": "girls_main",
              "count": 3
          },
          {
              "name": "girls_new_arrivals",
              "count": 3
          },
          {
              "name": "girls_new_arrivals_accessories",
              "count": 3
          },
          {
              "name": "mens_sale",
              "count": 3
          },
          {
              "name": "mens_sale_accessories",
              "count": 3
          },
          {
              "name": "promo_shop_by_girl_edgy",
              "count": 3
          },
          {
              "name": "promo_shop_by_girl_edgy_day_acc",
              "count": 3
          },
          {
              "name": "promo_shop_by_girl_sexy_edgy",
              "count": 3
          },
          {
              "name": "boys_new_arrivals",
              "count": 2
          },
          {
              "name": "promo_bts_cart_starters",
              "count": 2
          },
          {
              "name": "promo_bts_cart_starters_acc",
              "count": 2
          },
          {
              "name": "promo_bts_cart_starters_women",
              "count": 2
          },
          {
              "name": "promo_fall_favorites",
              "count": 2
          },
          {
              "name": "promo_mens_boardwalk_trend",
              "count": 2
          },
          {
              "name": "promo_mens_meadows_trend",
              "count": 2
          },
          {
              "name": "promo_mens_summer_of_love",
              "count": 2
          },
          {
              "name": "promo_mens_summer_trend",
              "count": 2
          },
          {
              "name": "promo_millennial_looks",
              "count": 2
          },
          {
              "name": "promo_quality_classics_acc",
              "count": 2
          },
          {
              "name": "backinstock_men",
              "count": 1
          },
          {
              "name": "boys_accessories",
              "count": 1
          },
          {
              "name": "boys_main",
              "count": 1
          },
          {
              "name": "branded_shop_men",
              "count": 1
          },
          {
              "name": "branded_shop_men_accessories",
              "count": 1
          },
          {
              "name": "dummy_3_dollars",
              "count": 1
          },
          {
              "name": "mens_top_picks",
              "count": 1
          },
          {
              "name": "promo_20_and_under_10_under_men",
              "count": 1
          },
          {
              "name": "promo_20_and_under_5_under_men",
              "count": 1
          },
          {
              "name": "promo_acc_sunshine_shack",
              "count": 1
          },
          {
              "name": "promo_acc_under_10_mens",
              "count": 1
          },
          {
              "name": "promo_anything_but_basic",
              "count": 1
          },
          {
              "name": "promo_athleisure",
              "count": 1
          },
          {
              "name": "promo_blue_lagoon",
              "count": 1
          },
          {
              "name": "promo_blue_lagoon_acc",
              "count": 1
          },
          {
              "name": "promo_comfort_lux_plus",
              "count": 1
          },
          {
              "name": "promo_contemporary_acc",
              "count": 1
          },
          {
              "name": "promo_contemporary_basics",
              "count": 1
          },
          {
              "name": "promo_cote_dazur_acc",
              "count": 1
          },
          {
              "name": "promo_festival_shop_men",
              "count": 1
          },
          {
              "name": "promo_good_game_acc",
              "count": 1
          },
          {
              "name": "promo_influencer_buys_men",
              "count": 1
          },
          {
              "name": "promo_january_collection",
              "count": 1
          },
          {
              "name": "promo_last_chance",
              "count": 1
          },
          {
              "name": "promo_last_chance_acc",
              "count": 1
          },
          {
              "name": "promo_last_chance_women",
              "count": 1
          },
          {
              "name": "promo_lush_life",
              "count": 1
          },
          {
              "name": "promo_mens_bts_jordan",
              "count": 1
          },
          {
              "name": "promo_mens_the_cool_guy",
              "count": 1
          },
          {
              "name": "promo_mid_day_deal_dash",
              "count": 1
          },
          {
              "name": "promo_sexy_femme_plus",
              "count": 1
          },
          {
              "name": "promo_shop_by_girl_edgy_day",
              "count": 1
          },
          {
              "name": "promo_spring_break_mens",
              "count": 1
          },
          {
              "name": "promo_stocking_stuffers_acc",
              "count": 1
          },
          {
              "name": "promo_stocking_stuffers_mens",
              "count": 1
          },
          {
              "name": "promo_summer_ready_acc",
              "count": 1
          },
          {
              "name": "promo_summer_shop_men",
              "count": 1
          },
          {
              "name": "promo_sweetest_thing",
              "count": 1
          },
          {
              "name": "promo_sweetest_thing_accessories",
              "count": 1
          },
          {
              "name": "promo_work_wear",
              "count": 1
          },
          {
              "name": "sale_acc_home_and_gift_items",
              "count": 1
          }
      ],
      "rep_color_code": [
          {
              "name": "01",
              "count": 85
          },
          {
              "name": "02",
              "count": 53
          },
          {
              "name": "03",
              "count": 9
          },
          {
              "name": "04",
              "count": 1
          }
      ],
      "inventory": [
          {
              "name": "0",
              "count": 62
          },
          {
              "name": "1",
              "count": 19
          },
          {
              "name": "255",
              "count": 2
          },
          {
              "name": "263",
              "count": 2
          },
          {
              "name": "313",
              "count": 2
          },
          {
              "name": "199",
              "count": 2
          },
          {
              "name": "225",
              "count": 2
          },
          {
              "name": "104",
              "count": 1
          },
          {
              "name": "112",
              "count": 1
          },
          {
              "name": "135",
              "count": 1
          },
          {
              "name": "155",
              "count": 1
          },
          {
              "name": "159",
              "count": 1
          },
          {
              "name": "165",
              "count": 1
          },
          {
              "name": "167",
              "count": 1
          },
          {
              "name": "19",
              "count": 1
          },
          {
              "name": "2",
              "count": 1
          },
          {
              "name": "220",
              "count": 1
          },
          {
              "name": "226",
              "count": 1
          },
          {
              "name": "230",
              "count": 1
          },
          {
              "name": "241",
              "count": 1
          },
          {
              "name": "252",
              "count": 1
          },
          {
              "name": "281",
              "count": 1
          },
          {
              "name": "284",
              "count": 1
          },
          {
              "name": "290",
              "count": 1
          },
          {
              "name": "302",
              "count": 1
          },
          {
              "name": "324",
              "count": 1
          },
          {
              "name": "351",
              "count": 1
          },
          {
              "name": "354",
              "count": 1
          },
          {
              "name": "359",
              "count": 1
          },
          {
              "name": "360",
              "count": 1
          },
          {
              "name": "363",
              "count": 1
          },
          {
              "name": "411",
              "count": 1
          },
          {
              "name": "423",
              "count": 1
          },
          {
              "name": "49",
              "count": 1
          },
          {
              "name": "54",
              "count": 1
          },
          {
              "name": "70",
              "count": 1
          },
          {
              "name": "720",
              "count": 1
          },
          {
              "name": "8",
              "count": 1
          },
          {
              "name": "80",
              "count": 1
          },
          {
              "name": "111",
              "count": 1
          },
          {
              "name": "136",
              "count": 1
          },
          {
              "name": "145",
              "count": 1
          },
          {
              "name": "150",
              "count": 1
          },
          {
              "name": "238",
              "count": 1
          },
          {
              "name": "242",
              "count": 1
          },
          {
              "name": "243",
              "count": 1
          },
          {
              "name": "246",
              "count": 1
          },
          {
              "name": "248",
              "count": 1
          },
          {
              "name": "266",
              "count": 1
          },
          {
              "name": "283",
              "count": 1
          },
          {
              "name": "306",
              "count": 1
          },
          {
              "name": "33",
              "count": 1
          },
          {
              "name": "336",
              "count": 1
          },
          {
              "name": "36",
              "count": 1
          },
          {
              "name": "4",
              "count": 1
          },
          {
              "name": "446",
              "count": 1
          },
          {
              "name": "493",
              "count": 1
          },
          {
              "name": "494",
              "count": 1
          },
          {
              "name": "499",
              "count": 1
          },
          {
              "name": "52",
              "count": 1
          },
          {
              "name": "66",
              "count": 1
          }
      ],
      "new_arrival": [
          {
              "name": "N",
              "count": 102
          },
          {
              "name": "Y",
              "count": 13
          }
      ],
      "age_group": [
          {
              "name": "Adult",
              "count": 110
          },
          {
              "name": "kids",
              "count": 3
          },
          {
              "name": "adult",
              "count": 2
          }
      ],
      "pattern": [
          {
              "name": "Solid",
              "count": 105
          },
          {
              "name": "Revo",
              "count": 7
          },
          {
              "name": "Colorblock",
              "count": 1
          },
          {
              "name": "Leopard",
              "count": 1
          },
          {
              "name": "Multi Color",
              "count": 1
          }
      ],
      "days_since_intro_date": [
          {
              "name": "210",
              "count": 4
          },
          {
              "name": "331",
              "count": 3
          },
          {
              "name": "100",
              "count": 2
          },
          {
              "name": "39",
              "count": 2
          },
          {
              "name": "421",
              "count": 2
          },
          {
              "name": "74",
              "count": 2
          },
          {
              "name": "499",
              "count": 3
          },
          {
              "name": "10",
              "count": 2
          },
          {
              "name": "11",
              "count": 2
          },
          {
              "name": "116",
              "count": 2
          },
          {
              "name": "504",
              "count": 2
          },
          {
              "name": "513",
              "count": 2
          },
          {
              "name": "137",
              "count": 1
          },
          {
              "name": "144",
              "count": 1
          },
          {
              "name": "151",
              "count": 1
          },
          {
              "name": "16",
              "count": 1
          },
          {
              "name": "184",
              "count": 1
          },
          {
              "name": "212",
              "count": 1
          },
          {
              "name": "228",
              "count": 1
          },
          {
              "name": "283",
              "count": 1
          },
          {
              "name": "298",
              "count": 1
          },
          {
              "name": "33",
              "count": 1
          },
          {
              "name": "353",
              "count": 1
          },
          {
              "name": "366",
              "count": 1
          },
          {
              "name": "368",
              "count": 1
          },
          {
              "name": "38",
              "count": 1
          },
          {
              "name": "408",
              "count": 1
          },
          {
              "name": "411",
              "count": 1
          },
          {
              "name": "46",
              "count": 1
          },
          {
              "name": "464",
              "count": 1
          },
          {
              "name": "481",
              "count": 1
          },
          {
              "name": "50",
              "count": 1
          },
          {
              "name": "508",
              "count": 1
          },
          {
              "name": "521",
              "count": 1
          },
          {
              "name": "544",
              "count": 1
          },
          {
              "name": "563",
              "count": 1
          },
          {
              "name": "565",
              "count": 1
          },
          {
              "name": "568",
              "count": 1
          },
          {
              "name": "68",
              "count": 1
          },
          {
              "name": "697",
              "count": 1
          },
          {
              "name": "75",
              "count": 1
          },
          {
              "name": "9",
              "count": 1
          },
          {
              "name": "94",
              "count": 1
          },
          {
              "name": "96",
              "count": 1
          },
          {
              "name": "4",
              "count": 3
          },
          {
              "name": "129",
              "count": 2
          },
          {
              "name": "449",
              "count": 2
          },
          {
              "name": "466",
              "count": 2
          },
          {
              "name": "8",
              "count": 2
          },
          {
              "name": "1",
              "count": 1
          },
          {
              "name": "121",
              "count": 1
          },
          {
              "name": "1272",
              "count": 1
          },
          {
              "name": "141",
              "count": 1
          },
          {
              "name": "193",
              "count": 1
          },
          {
              "name": "215",
              "count": 1
          },
          {
              "name": "229",
              "count": 1
          },
          {
              "name": "260",
              "count": 1
          },
          {
              "name": "285",
              "count": 1
          },
          {
              "name": "303",
              "count": 1
          },
          {
              "name": "316",
              "count": 1
          },
          {
              "name": "330",
              "count": 1
          },
          {
              "name": "345",
              "count": 1
          },
          {
              "name": "346",
              "count": 1
          },
          {
              "name": "351",
              "count": 1
          },
          {
              "name": "361",
              "count": 1
          },
          {
              "name": "379",
              "count": 1
          },
          {
              "name": "410",
              "count": 1
          },
          {
              "name": "415",
              "count": 1
          },
          {
              "name": "442",
              "count": 1
          },
          {
              "name": "463",
              "count": 1
          },
          {
              "name": "474",
              "count": 1
          },
          {
              "name": "479",
              "count": 1
          },
          {
              "name": "494",
              "count": 1
          },
          {
              "name": "516",
              "count": 1
          },
          {
              "name": "522",
              "count": 1
          },
          {
              "name": "523",
              "count": 1
          },
          {
              "name": "527",
              "count": 1
          },
          {
              "name": "528",
              "count": 1
          },
          {
              "name": "561",
              "count": 1
          },
          {
              "name": "564",
              "count": 1
          },
          {
              "name": "571",
              "count": 1
          },
          {
              "name": "590",
              "count": 1
          },
          {
              "name": "596",
              "count": 1
          },
          {
              "name": "610",
              "count": 1
          },
          {
              "name": "614",
              "count": 1
          },
          {
              "name": "669",
              "count": 1
          },
          {
              "name": "711",
              "count": 1
          },
          {
              "name": "725",
              "count": 1
          },
          {
              "name": "729",
              "count": 1
          },
          {
              "name": "760",
              "count": 1
          },
          {
              "name": "778",
              "count": 1
          },
          {
              "name": "85",
              "count": 1
          },
          {
              "name": "95",
              "count": 1
          }
      ],
      "availability_attribute": [
          {
              "name": "in_stock",
              "count": 115
          }
      ],
      "percent_off": [
          {
              "name": "0.0",
              "count": 91
          },
          {
              "name": "59.95",
              "count": 18
          },
          {
              "name": "59.93",
              "count": 2
          },
          {
              "name": "59.96",
              "count": 3
          },
          {
              "name": "62.45",
              "count": 1
          }
      ],
      "sale_y_n": [
          {
              "name": "No",
              "count": 112
          },
          {
              "name": "Yes",
              "count": 3
          }
      ],
      "reviews_count": [
          {
              "name": "0",
              "count": 115
          }
      ],
      "item_tag_2": [
          {
              "name": "brand_detail_tag_1",
              "count": 38
          },
          {
              "name": "brand_detail_tag_0",
              "count": 5
          }
      ],
      "material": [
          {
              "name": "Plastic",
              "count": 6
          },
          {
              "name": "Metal",
              "count": 4
          }
      ],
      "item_tag_3": [
          {
              "name": "web_exclusive",
              "count": 9
          }
      ]
  }
}

export default useFetch.response.docs
