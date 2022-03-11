// 世界単位での国ごとの感染者数を表示させるコンポーネント
// 国数だけループで項目を増やしていく

//外部から型をインポート
import {CardType} from "../types"
/** 
 * 
 * 
 *interface SingleCountryDataType {
  Country :string,
  NewConfirmed:number,
  TotalConfirmed:number
}

// 
interface CardType {
  allCountriesData:Array<SingleCountryDataType>
}
 * 
*/



const Card = ({ allCountriesData }:CardType) => {
   console.log(allCountriesData);
    return (
        <div className="card-container">
            {allCountriesData.map((singleData, index) =>
              <div key={index} className="card">
                <div>
                    <h2>{singleData.Country}</h2>                   
                    <p>新規感染者: <span>{singleData.NewConfirmed.toLocaleString()}</span></p>      
                    <p>感染者総数: <span>{singleData.TotalConfirmed.toLocaleString()}</span></p> 
                </div>   
              </div>
            )} 
        </div>
    );
};

export default Card;


