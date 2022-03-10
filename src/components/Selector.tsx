// セレクターのコンポーネント
// Jsonから取り込んだリストの数だけ選択できるセレクターを作成

// 型情報を定義したファイルから型定義を取り込み
import {SelectorType} from "../types"

// 外部取り込みにしたので不要
// propsの形を宣言
// countriesJson:国の一覧のjsonファイル, setCountry：国をセットするためのuseState(関数)
// type SelectorType = {
//     setCountry:React.Dispatch<React.SetStateAction<string>>,
//     countriesJson:{
//         Country:string,
//         Slug:string
//     }[]
// }

const Selector = ({ setCountry, countriesJson }:SelectorType) => {

    console.log("setCountry");
    
    return (
        <div className="selector-container">
            <select onChange={(e) => {
                setCountry(e.target.value)

                console.log("selecterのChangeイベント:" + e.target.value + "を引数で渡したuseSatate（関数）にセット");

                }}>  
                {countriesJson.map((country, index) => 
                   <option key={index} value={country.Slug}>{country.Country}</option>
                )}      
            </select> 
        </div>
    );
};

export default Selector;