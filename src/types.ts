// 型情報をまとめて外部取り込みにできる。
//App.tsxの型情報
export type countryDataType={
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
  export interface AllCountryDataTypeArray extends Array<SingleCountryDataType>{}

  // 共有用
  type CountriesJsonType={
    Country:string,
    Slug:string
}

// TopPage.jsの型情報
// propsに関しても型の設定が必要になる。
export type TopPageType ={
  // countriesJson:国の一覧のjsonファイル, setCountry：国をセットするためのuseState(関数), countryData：国別の感染者数, loading:load状況
  // countriesJson:{
  //     Country:string,
  //     Slug:string
  // }[], 
  countriesJson:CountriesJsonType,
  // 呼び出し元のコンポーネントから型の情報を調べてコピペできる
  setCountry:React.Dispatch<React.SetStateAction<string>>, 
  countryData:countryDataType,
  // 同ファイル内に同じ型があるので宣言済みのものは共有することができる。
  // countryData:{
  //     date: string,            
  //     newConfirmed: number,     
  //     totalConfirmed:number,   
  //     newRecovered:number,    
  //     totalRecovered: number,  
  // }, 
  loading:boolean
}

//Selector.tsxの型情報
// propsの形を宣言
// countriesJson:国の一覧のjsonファイル, setCountry：国をセットするためのuseState(関数)
export type SelectorType = {
  setCountry:React.Dispatch<React.SetStateAction<string>>,
  // countriesJson:{
  //     Country:string,
  //     Slug:string
  // }[]
  countriesJson:CountriesJsonType
}

// Results.tsxの型情報
// propsの形宣言
// countryData：国単位の感染者数, loading：ロード中かどうか
export type ResultsType = {
  // countryData:{
  //     date: string,            
  //     newConfirmed: number,     
  //     totalConfirmed:number,   
  //     newRecovered:number,    
  //     totalRecovered: number,  
  // },
  countryData:countryDataType,
  loading:boolean
}

// WorldPage.tsxの型情報

interface SingleCountryDataType {
  Country :string,
  NewConfirmed:number,
  TotalConfirmed:number
}

// 
export interface WorldPageType {
  allCountriesData:Array<SingleCountryDataType>
}

// の型情報

