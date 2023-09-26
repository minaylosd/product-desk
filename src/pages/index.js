import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Grid } from "@/components/Grid";
import { useEffect, useState } from "react";
import Script from "next/script";
import "./globals.css";
import "./keyframes.css";

function AspectRatioTracker() {
  const [aspectRatio, setAspectRatio] = useState(null);

  useEffect(() => {
    function calculateAspectRatio() {
      return window.innerWidth / window.innerHeight;
    }

    function handleResize() {
      setAspectRatio(calculateAspectRatio());
    }

    if (typeof window !== "undefined") {
      setAspectRatio(calculateAspectRatio());
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return aspectRatio;
}

export default function Home() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    window.setData = function (data) {
      console.log(data);
      if (data !== undefined) {
        setProductData(data.data);
      }
    };
  }, []);

  const aspectRatio = AspectRatioTracker();

  let flexLayout;

  if (aspectRatio > 4) {
    // Extremely wide screens (e.g., 48:9 or wider)
    flexLayout = "0 0 4.16%";
  } else if (aspectRatio > 2) {
    // Wide screens (e.g., 32:9 or wider)
    flexLayout = "0 0 8.33%";
  } else if (aspectRatio > 1.5) {
    // Screens with aspect ratio between 16:9 and 32:9
    flexLayout = "0 0 16.66%";
  } else {
    // Screens with aspect ratio less than 16:9
    flexLayout = "0 0 33.33%";
  }

  return (
    <>
      <Script id="manifest" type="application/json">
        {`
     
     {
      "options": [],

      "playback_data": 
{
"id": "x3",
"additionally": [
{
  "img": {
    "src": ""
  }
}
],
"groups": [
{
  "group": "Светлое фильтрованное",
  "products": [
    {
      "name": "*Жигулевское Стандарт  1969 Драфт сф (Пт)",
      "alcohol": 4.5,
      "density": 12,
      "city": "с. Новая Усмань",
      "group": "Светлое фильтрованное",
      "price": 106,
      "priceByCard": 777,
      "additionally": [
        {
          "img": {
            "src": "http://portal.visiobox.ru/docs/projects/meln/img/beer1.png"
          }
        }
      ],
      "discount": [
        
      ]
    },
    {
      "name": "*Клостербрау",
      "alcohol": 4,
      "density": 12,
      "city": "г. Лысково",
      "group": "Светлое фильтрованное",
      "price": 148,
      "priceByCard": 120,
      "additionally": [
        {
          "img": {
            "src": "http://portal.visiobox.ru/docs/projects/meln/img/beer2.png"
          }
        }
      ],
      "discount": [
        "Суперакция"
      ]
    },
    {
      "name": "*Жбанчек Янтарное сф (Пт)",
      "alcohol": 4.5,
      "density": 12,
      "city": "с. Новая Усмань",
      "group": "Светлое фильтрованное",
      "price": 169,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": ""
          }
        }
      ],
      "discount": [
        "1+1=3"
      ]
    }
  ]
},
{
  "group": "Светлое нефильтрованное",
  "products": [
    {
      "name": "*Жигулевское Стандарт 1969 сн (Пт)",
      "alcohol": 4.5,
      "density": 12,
      "city": "с. Новая Усмань",
      "group": "Светлое нефильтрованное",
      "price": 108,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": {
              "$playback-data-resource": "http://portal.visiobox.ru/docs/projects/meln/img/beer1.png"
            }
          }
        }
      ],
      "discount": [
        
      ]
    },
    {
      "name": "*Три быка Крафт (Пт)",
      "alcohol": 4.6,
      "density": 12,
      "city": "с. Новая Усмань",
      "group": "Светлое нефильтрованное",
      "price": 145,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": {
              "$playback-data-resource": "http://portal.visiobox.ru/docs/projects/meln/img/beer1.png"
            }
          }
        }
      ],
      "discount": [
        
      ]
    },
    {
      "name": "Три быка Драфт",
      "alcohol": 4.6,
      "density": 12,
      "city": "с. Новая Усмань",
      "group": "Светлое нефильтрованное",
      "price": 145,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": {
              "$playback-data-resource": "http://portal.visiobox.ru/docs/projects/meln/img/beer1.png"
            }
          }
        }
      ],
      "discount": [
        
      ]
    },
    {
      "name": "*Сомовское св.",
      "alcohol": 4.7,
      "density": 12,
      "city": "г. Воронеж",
      "group": "Светлое нефильтрованное",
      "price": 112,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": ""
          }
        }
      ],
      "discount": [
        
      ]
    },
    {
      "name": "*Хальтен сн (Пт)",
      "alcohol": 4.5,
      "density": 12,
      "city": "с. Новая Усмань",
      "group": "Светлое нефильтрованное",
      "price": 119,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": ""
          }
        }
      ],
      "discount": [
        
      ]
    },
    {
      "name": "Мистер Сом светлое нефильтрованное",
      "alcohol": 4.5,
      "density": 12,
      "city": "с. Новая Усмань",
      "group": "Светлое нефильтрованное",
      "price": 117,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": ""
          }
        }
      ],
      "discount": [
        
      ]
    },
    {
      "name": "пиво Три быка Летнее светлое нефильтр.",
      "alcohol": 4.6,
      "density": 12,
      "city": "с. Новая Усмань",
      "group": "Светлое нефильтрованное",
      "price": 134,
      "priceByCard": 109,
      "additionally": [
        {
          "img": {
            "src": {
              "$playback-data-resource": "http://portal.visiobox.ru/docs/projects/meln/img/beer2.png"
            }
          }
        }
      ],
      "discount": [
        
      ]
    },
    {
      "name": "*Жбанчек Янтарное сн (Пт)",
      "alcohol": 4.5,
      "density": 12,
      "city": "с. Новая Усмань",
      "group": "Светлое нефильтрованное",
      "price": 169,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": ""
          }
        }
      ],
      "discount": [
        "1+1=3"
      ]
    },
    {
      "name": "*Чешское сн (Пт)",
      "alcohol": 4.5,
      "density": 12,
      "city": "с. Новая Усмань",
      "group": "Светлое нефильтрованное",
      "price": 113,
      "priceByCard": 99,
      "additionally": [
        {
          "img": {
            "src": ""
          }
        }
      ],
      "discount": [
        
      ]
    }
  ]
},
{
  "group": "Пшеничное",
  "products": [
    {
      "name": "*Жбанчек белое пш сн (Пт)",
      "alcohol": 4.7,
      "density": 12,
      "city": "с. Новая Усмань",
      "group": "Пшеничное",
      "price": 169,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": ""
          }
        }
      ],
      "discount": [
        "1+1=3"
      ]
    },
    {
      "name": "*Жбанчек белое Драфт сн (Пт)",
      "alcohol": 4.6,
      "density": 12,
      "city": "г. Лысково",
      "group": "Пшеничное",
      "price": 135,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": ""
          }
        }
      ],
      "discount": [
        
      ]
    },
    {
      "name": "Люнес Блонди",
      "alcohol": 5,
      "density": 13,
      "city": "г. Лысково",
      "group": "Пшеничное",
      "price": 126,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": ""
          }
        }
      ],
      "discount": [
        
      ]
    }
  ]
},
{
  "group": "Напитки",
  "products": [
    {
      "name": "*Лимонад Дюшес",
      "alcohol": 0,
      "density": 0,
      "city": "г. Воронеж",
      "group": "Напитки",
      "price": 61,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": ""
          }
        }
      ],
      "discount": [
        
      ]
    },
    {
      "name": "*нап. Мохито",
      "alcohol": 4.9,
      "density": 0,
      "city": "г. Злынка",
      "group": "Напитки",
      "price": 131,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": "http://portal.visiobox.ru/docs/projects/meln/img/beer3.png"
          }
        }
      ],
      "discount": [
        
      ]
    },
    {
      "name": "*Квас Криница",
      "alcohol": 0,
      "density": 0,
      "city": "г. Воронеж",
      "group": "Напитки",
      "price": 65,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": ""
          }
        }
      ],
      "discount": [
        
      ]
    }
  ]
},
{
  "group": "Темное/Полутемное",
  "products": [
    {
      "name": "*Бавария темное",
      "alcohol": 4.6,
      "density": 12,
      "city": "г. Лысково",
      "group": "Темное/Полутемное",
      "price": 141,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": ""
          }
        }
      ],
      "discount": [
        
      ]
    }
  ]
},
{
  "group": "Светлое",
  "products": [
    {
      "name": "*Аннинское сф",
      "alcohol": 0,
      "density": 0,
      "city": "",
      "group": "Светлое",
      "price": 94,
      "priceByCard": 0,
      "additionally": [
        {
          "img": {
            "src": ""
          }
        }
      ],
      "discount": [
        
      ]
    }
  ]
}
]
}
  }
     `}
      </Script>
      <div className="header__div">
        {aspectRatio > 4 && (
          <>
            <Header />
          </>
        )}
        {aspectRatio > 3 && (
          <>
            <Header />
          </>
        )}
        {aspectRatio > 1.5 && (
          <>
            <Header />
          </>
        )}
      </div>
      {productData.length > 1 && (
        <Grid flexLayout={flexLayout} productData={productData}></Grid>
      )}

      <div className="footer__div">
        {aspectRatio > 4 && (
          <>
            <Footer />
          </>
        )}
        {aspectRatio > 3 && (
          <>
            <Footer />
          </>
        )}
        {aspectRatio > 1.5 && (
          <>
            <Footer />
          </>
        )}
      </div>
      <Script
        id="application-debug"
        src="https://testing.visiobox.cloud/utils/application-debug.js"
        data-access-token="YGc7uf5Agi5LRc6yaE8dcQIuZh0HCX7g"
      ></Script>
    </>
  );
}
