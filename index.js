
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
] 

const superbowlWin = (array) => {
    const result = array.find( element => element.result === 'W')
    if(result){
        return result.year
    }
}