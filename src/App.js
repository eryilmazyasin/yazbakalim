import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/search";
import Badges from "./components/badges";
import ProgressBarComponent from "./components/progressBar";
import Toast from "react-bootstrap/Toast";

const App = () => {
  const [input, setInput] = useState("");
  let [time, setTime] = useState(0);
  let [randomArray, setRandomArray] = useState([]);
  let [correctItem, setCorrectItem] = useState(0);
  let [InCorrectItem, setInCorrectItem] = useState(0);
  const [fullTime, setFullTime] = useState(35);
  const [badge, setBadge] = useState([
    {
      colorName: "kırmızı",
      backgroundColor: "#1044ff",
      color: "yellow",
      correct: ["mavi","blue"],
    },
    {
      colorName: "mavi",
      backgroundColor: "#fb0c0c",
      color: "white",
      correct: ["kırmızı","kirmizi","red"],
    },
    {
      colorName: "yeşil",
      backgroundColor: "#fff700",
      color: "black",
      correct: ["sarı","yellow","sari"],
    },
    {
      colorName: "gri",
      backgroundColor: "#000000",
      color: "yellow",
      correct: ["siyah","black"],
    },
    {
      colorName: "siyah",
      backgroundColor: "#f5b2be",
      color: "purple",
      correct: ["pembe","pink"],
    },
    {
      colorName: "turuncu",
      backgroundColor: "#fff700",
      color: "gray",
      correct: ["sarı","yellow","sari"],
    },
    {
      colorName: "lacivert",
      backgroundColor: "#000000",
      color: "white",
      correct: ["siyah","black"],
    },
    {
      colorName: "mor",
      backgroundColor: "#27da27",
      color: "purple",
      correct: ["yeşil","yesil","green"],
    },
    {
      colorName: "lacivert",
      backgroundColor: "#adacac",
      color: "white",
      correct: ["gri","gray"],
    },
    {
      colorName: "sarı",
      backgroundColor: "#ffab12",
      color: "white",
      correct: ["turuncu","orange"],
    },
    {
      colorName: "yeşil",
      backgroundColor: "#800000",
      color: "green",
      correct: ["bordo","burgundy"],
    },
    {
      colorName: "siyah",
      backgroundColor: "#ffffff",
      color: "green",
      correct: ["beyaz","white"],
    },
    {
      colorName: "mavi",
      backgroundColor: "#00ffff",
      color: "black",
      correct: ['turkuaz','turquoise'],
    },
    {
      colorName: "kahve",
      backgroundColor: "#a52a2a",
      color: "green",
      correct: ["kahverengi","brown"],
    },
    {
      colorName: "beyaz",
      backgroundColor: "#00008b",
      color: "white",
      correct: ['lacivert', 'dark blue'],
    },
    {
      colorName: "sarı",
      backgroundColor: "#27da27",
      color: "yellow",
      correct: ["yeşil","yesil","green"],
    },
    {
      colorName: "sarı",
      backgroundColor: "#00ffff",
      color: "green",
      correct: ['turkuaz','turquoise'],
    },
    {
      colorName: "koyu",
      backgroundColor: "#a52a2a",
      color: "white",
      correct: ["kahverengi","brown"],
    },
    {
      colorName: "bordo",
      backgroundColor: "#00008b",
      color: "orange",
      correct: ['lacivert', 'dark blue'],
    },
    {
      colorName: "sarı",
      backgroundColor: "#27da27",
      color: "yellow",
      correct: ["yeşil","yesil","green"],
    },
    {
      colorName: "turkuaz",
      backgroundColor: "#800000",
      color: "green",
      correct: ["bordo","burgundy"],
    },
    {
      colorName: "sarı",
      backgroundColor: "#ffffff",
      color: "yellow",
      correct: ['beyaz','white'],
    },
    {
      colorName: "pembe",
      backgroundColor: "#00ffff",
      color: "pink",
      correct: ['turkuaz','turquoise'],
    },
    {
      colorName: "siyah",
      backgroundColor: "#a52a2a",
      color: "black",
      correct: ['kahverengi','brown'],
    },
    {
      colorName: "beyaz",
      backgroundColor: "#00008b",
      color: "yellow",
      correct: ['lacivert', 'dark blue'],
    },
  ]);

  const inputHandle = (e) => {
    setInput(e.target.value);
    if (randomArray.length > 0) {
      interval();
    }
  };

  useEffect(() => {
    let newRandomArray = badge
      .sort(() => Math.random() - Math.random())
      .slice(0, 4);
    setRandomArray((randomArray = newRandomArray));
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    setInput("");
    if (randomArray[0].correct.includes(input.toLowerCase())) {
      randomArray.splice(0, 1);
      setRandomArray(randomArray);
      setCorrectItem((correctItem += 1));
    } else {
      randomArray.splice(0, 1);
      setRandomArray(randomArray);
      setInCorrectItem((InCorrectItem += 1));
    }
  };

  const interval = () => {
    setInterval(() => {
      setTime((time += 1));
    }, 1000);
    return () => clearInterval(interval);
  };

  return (
    <div className="container">
      {randomArray.length <= 0 || time > fullTime ? (
        <div className="summary">
          <Toast>
            <Toast.Header>
              <strong className="mr-auto">Sonuç</strong>
              <small>{time > fullTime ? "Süren Doldu!" : ""}</small>
            </Toast.Header>
            <Toast.Body>
              <span className="font-bold badge p-2 mr-1 mb-1 shadow badge-success d-block">
                Toplam Doğru Sayısı: {correctItem}
              </span>
              <span className="font-bold badge p-2 mr-1 mb-1 shadow badge-danger d-block">
                Toplam Yanlış Sayısı: {InCorrectItem}
              </span>
              <button
                className="btn btn-light mt-4 w-100"
                onClick={() => window.location.reload()}
              >
                Tekrar Dene
              </button>
            </Toast.Body>
          </Toast>
        </div>
      ) : (
        <div className="row d-flex flex-column mt-4 mb-4">
          <ProgressBarComponent
            time={time}
            randomArray={randomArray.length}
            fullTime={fullTime}
          ></ProgressBarComponent>
          <Search
            title="Ne yapacağını çok iyi biliyorsun"
            inputHandle={inputHandle}
            formSubmit={formSubmit}
            value={input}
            time={time}
            fullTime={fullTime}
          />
        </div>
      )}

      <div className="row mt-2">
        <Badges badges={randomArray} />
      </div>
    </div>
  );
};

export default App;
