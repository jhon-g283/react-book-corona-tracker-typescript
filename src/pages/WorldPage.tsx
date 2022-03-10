// 世界単位で国ごとの感染差数を表示するコンポーネント
import Header from "../components/Header"; 
import Title from "../components/Title";
import Card from "../components/Card";  

// 型情報を定義したファイルから型定義を取り込み
import {WorldPageType} from "../types"

/** 外部取り込みにしたので不要
 *interface SingleCountryDataType {
    Country :string,
    NewConfirmed:number,
    TotalConfirmed:number
  }
  // 
interface WorldPageType {
    allCountriesData:Array<SingleCountryDataType>
}
 */

  
const WorldPage = ({ allCountriesData}:WorldPageType) => {
    console.log("allCountriesData");
    // console.log(allCountriesData);
    return (
        <div className="world-page-container">
            <p>世界単位</p>
            <Header />
            <Title />
            <Card allCountriesData={allCountriesData} />
        </div>
    );
};

export default WorldPage;