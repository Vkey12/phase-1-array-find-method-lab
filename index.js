// code your solution here

const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
];
  
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
  
    if (win) {
      return win.year;
    } else {
      return undefined;
    }
}

const winYear = superbowlWin(record);
if (winYear) {
    console.log(`The Denver Broncos won the Superbowl in ${winYear}.`);
} else {
    console.log("The Denver Broncos have never won the Superbowl.");
}