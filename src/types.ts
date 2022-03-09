//

type countryDataType={
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