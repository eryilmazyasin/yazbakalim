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
      correct: "mavi",
    },
    {
      colorName: "mavi",
      backgroundColor: "#fb0c0c",
      color: "white",
      correct: "kırmızı",
    },
    {
      colorName: "yeşil",
      backgroundColor: "#fff700",
      color: "black",
      correct: "sarı",
    },
    {
      colorName: "gri",
      backgroundColor: "#000000",
      color: "yellow",
      correct: "siyah",
    },
    {
      colorName: "siyah",
      backgroundColor: "#f5b2be",
      color: "purple",
      correct: "pembe",
    },
    {
      colorName: "turuncu",
      backgroundColor: "#fff700",
      color: "gray",
      correct: "sarı",
    },
    {
      colorName: "lacivert",
      backgroundColor: "#000000",
      color: "white",
      correct: "siyah",
    },
    {
      colorName: "mor",
      backgroundColor: "#27da27",
      color: "purple",
      correct: "yeşil",
    },
    {
      colorName: "lacivert",
      backgroundColor: "#adacac",
      color: "white",
      correct: "gri",
    },
    {
      colorName: "sarı",
      backgroundColor: "#ffab12",
      color: "white",
      correct: "turuncu",
    },
    {
      colorName: "yeşil",
      backgroundColor: "#800000",
      color: "green",
      correct: "bordo",
    },
    {
      colorName: "siyah",
      backgroundColor: "#ffffff",
      color: "green",
      correct: "beyaz",
    },
    {
      colorName: "mavi",
      backgroundColor: "#00ffff",
      color: "black",
      correct: "turkuaz",
    },
    {
      colorName: "kahve",
      backgroundColor: "#a52a2a",
      color: "green",
      correct: "kahverengi",
    },
    {
      colorName: "beyaz",
      backgroundColor: "#00008b",
      color: "white",
      correct: "lacivert",
    },
    {
      colorName: "sarı",
      backgroundColor: "#27da27",
      color: "yellow",
      correct: "yeşil",
    },
    {
      colorName: "sarı",
      backgroundColor: "#00ffff",
      color: "green",
      correct: "turkuaz",
    },
    {
      colorName: "koyu",
      backgroundColor: "#a52a2a",
      color: "white",
      correct: "kahverengi",
    },
    {
      colorName: "bordo",
      backgroundColor: "#00008b",
      color: "orange",
      correct: "lacivert",
    },
    {
      colorName: "sarı",
      backgroundColor: "#27da27",
      color: "yellow",
      correct: "yeşil",
    },
    {
      colorName: "turkuaz",
      backgroundColor: "#800000",
      color: "green",
      correct: "bordo",
    },
    {
      colorName: "sarı",
      backgroundColor: "#ffffff",
      color: "yellow",
      correct: "beyaz",
    },
    {
      colorName: "pembe",
      backgroundColor: "#00ffff",
      color: "pink",
      correct: "turkuaz",
    },
    {
      colorName: "siyah",
      backgroundColor: "#a52a2a",
      color: "black",
      correct: "kahverengi",
    },
    {
      colorName: "beyaz",
      backgroundColor: "#00008b",
      color: "yellow",
      correct: "lacivert",
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
      .slice(0, );
    setRandomArray((randomArray = newRandomArray));
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    setInput("");
    if (randomArray[0].correct === input) {
      console.log("evet");
      console.log(randomArray);
      randomArray.splice(0, 1);
      setRandomArray(randomArray);
      console.log(randomArray);
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
            title="Ne yapacağını çok iyi biliyorsun (:"
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
