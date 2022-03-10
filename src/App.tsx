import { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import countriesJson from "./countries.json";//リスト用のJson
import TopPage from "./pages/TopPage"; 
import WorldPage from "./pages/WorldPage";
import './App.css';

// 型情報を定義したファイルから型定義を取り込み
import {countryDataType,AllCountryDataTypeArray} from "./types"

/**　外部取り込みにしたので不要
 * type countryDataType={
  date: string,            
    newConfirmed: number,     
    totalConfirmed:number,   
    newRecovered:number,    
    totalRecovered: number  
}

// typeではなくinterfaceを使用して型を定義することも可能
interface SingleCountryDataType {
  Country :string,
  NewConfirmed:number,
  TotalConfirmed:number
}

// オブジェクト型の配列なのでextendでSingleCountryDataTypeの配列にする。
interface AllCountryDataTypeArray extends Array<SingleCountryDataType>{}
 */


function App() {
  // UseState類でStateは管理
  // const [loading, setLoading] = useState(false);//ロード状況・・・UseStateに関してはtypeScriptにするときに<型>をつけてあげる
  const [loading, setLoading] = useState<boolean>(false);//ロード状況

  //選択している国名、初期値は日本
  // コンポーネントに引数で渡していって末端のセレクターの変更イベントで動かす
  const [country, setCountry] = useState<string>("japan");

  // 国別の感染者数などの数値
  // 受信時（fetch）に毎回動かす
  //上側で指定したオブジェクトを型とする：countryDataType
  const [countryData, setCountryData] = useState<countryDataType>({
    date: "",            
    newConfirmed: 0,     
    totalConfirmed: 0,   
    newRecovered: 0,    
    totalRecovered: 0  
  });
  
  // 世界の感染者数（サマリー）
  //usestateでは型はUseStateの後、初期値は括弧内で指定
  const [allCountriesData, setAllCountriesData] = useState<AllCountryDataTypeArray>([{
    Country:"",
    NewConfirmed:0,
    TotalConfirmed:0
    
  }]);

  useEffect(() => {
    const getCountryData = () => {
      console.log("useEffect : country");
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

  // 世界の感染者数を国別で取得
  useEffect(() => {  
      fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(data => setAllCountriesData(data.Countries))
      .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。")); 
  }, []); 
  return (
    // ReactRouter
    // BrowserRouterとSwitchでページ生成に使用するコンポーネントを挟んで
    // Routeで分岐させる部分を挟む　中のpathにパスを記載する。
    <BrowserRouter>   
      <Switch>        
          <Route exact path="/">   
           {/*国ごとの状況  */}
           <p>国ごと</p>
              <TopPage 
              countriesJson={countriesJson}//Jsonを渡す
               setCountry={setCountry}//useStateを渡している？
                countryData={countryData} //国別の感染者数
                loading={loading} //load状況
                />
          </Route>  
          {/* 世界の状況のタブ */}
          <Route exact path="/world"> 
              <p>World</p> 
              <WorldPage 
              allCountriesData={allCountriesData} //全体の感染者数データ
              
              
              />            
          </Route>      
      </Switch>       
  </BrowserRouter>   
  );
}

export default App;
