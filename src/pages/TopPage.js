// 国単位で内容を表示するページのコンポーネント

import Header from "../components/Header"; 
import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";

// countriesJson:国の一覧のjsonファイル, setCountry：国をセットするためのuseState(関数), countryData：国別の感染者数, loading:load状況

const TopPage = ({ countriesJson, setCountry, countryData, loading }) => {
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