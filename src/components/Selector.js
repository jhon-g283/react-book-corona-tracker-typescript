// セレクターのコンポーネント
// Jsonから取り込んだリストの数だけ選択できるセレクターを作成

const Selector = ({ setCountry, countriesJson }) => {

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