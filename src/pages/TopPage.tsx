// 国単位で内容を表示するページのコンポーネント

import Header from "../components/Header"; 
import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";

// 型情報を定義したファイルから型定義を取り込み
import {TopPageType} from "../types"

/** 
// propsに関しても型の設定が必要になる。
type TopPageType ={
    // countriesJson:国の一覧のjsonファイル, setCountry：国をセットするためのuseState(関数), countryData：国別の感染者数, loading:load状況
    countriesJson:{
        Country:string,
        Slug:string
    }[], 
    // 呼び出し元のコンポーネントから型の情報を調べてコピペできる
    setCountry:React.Dispatch<React.SetStateAction<string>>, 
    countryData:{
        date: string,            
        newConfirmed: number,     
        totalConfirmed:number,   
        newRecovered:number,    
        totalRecovered: number,  
    }, 
    loading:boolean
} 
 * 
*/

// countriesJson:国の一覧のjsonファイル, setCountry：国をセットするためのuseState(関数), countryData：国別の感染者数, loading:load状況
// typescriptにするときはpropsも型の情報を詳細に書き出して、宣言した型を指定してあげる。
const TopPage = ({ countriesJson, setCountry, countryData, loading }:TopPageType) => {
    return (
        <div className="top-page-container">
            <div>
                <p>国別単位</p>
                <Header />
                <Title />
                <Selector 
                countriesJson={countriesJson} 
                setCountry={setCountry} />

                <Results 
                countryData={countryData}//国別の感染者数
                 loading={loading} //ロード状況
                 /> 
            </div>
        </div>
    );
};

export default TopPage;