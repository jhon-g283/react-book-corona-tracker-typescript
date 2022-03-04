import { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import countriesJson from "./countries.json";//リスト用のJson
import TopPage from "./pages/TopPage"; 
import WorldPage from "./pages/WorldPage";
import './App.css';

function App() {
  // UseState類でStateは管理
  const [loading, setLoading] = useState(false);//ロード状況

  //選択している国名、初期値は日本
  // コンポーネントに引数で渡していって末端のセレクターの変更イベントで動かす
  const [country, setCountry] = useState("japan");

  // 国別の感染者数などの数値
  // 受信時（fetch）に毎回動かす
  const [countryData, setCountryData] = useState({
    date: "",            
    newConfirmed: "",     
    totalConfirmed: "",   
    newRecovered: "",    
    totalRecovered: "",  
  });
  const [allCountriesData, setAllCountriesData] = useState([]);

  useEffect(() => {
    const getCountryData = () => {
        setLoading(true); //ロード切り替え

        fetch(`https://api.covid19api.com/country/${country}`) 
        .then(res => res.json())
        .then(data => {
            // 受信した内容をuseSttateでセット
            
            console.log("受信");
            console.log(data);
            console.log("setCountryDataにセット　useSate起動");
            setCountryData({
              date: data[data.length -1].Date,             
              newConfirmed: data[data.length -1].Confirmed - data[data.length -2].Confirmed,      
              totalConfirmed: data[data.length -1].Confirmed,    
              newRecovered:  data[data.length -1].Recovered- data[data.length -2].Recovered,    
              totalRecovered: data[data.length -1].Recovered,    
          });

          setLoading(false); //ロード切り替え
        })
        .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));  
    }
    getCountryData();
  }, [country])

  useEffect(() => {  
      fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(data => setAllCountriesData(data.Countries))
      .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。")); 
  }, []); 
  return (
    <BrowserRouter>   
      <Switch>        
          <Route exact path="/">    
              <TopPage 
              countriesJson={countriesJson}//Jsonを渡す
               setCountry={setCountry}//useStateを渡している？
                countryData={countryData} //国別の感染者数
                loading={loading} //load状況
                />
          </Route>  
          
          <Route exact path="/world">  
              <WorldPage allCountriesData={allCountriesData} />            
          </Route>      
      </Switch>       
  </BrowserRouter>   
  );
}

export default App;
