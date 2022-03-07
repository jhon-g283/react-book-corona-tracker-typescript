// 世界単位で国ごとの感染差数を表示するコンポーネント
import Header from "../components/Header"; 
import Title from "../components/Title";
import Card from "../components/Card";  

const WorldPage = ({ allCountriesData }) => {
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