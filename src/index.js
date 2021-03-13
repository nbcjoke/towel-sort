
// You should implement your task here.

module.exports = function towelSort (matrix) {
matrix.reduce(function(prev, item, index) {
if(index % 2 === 0) {
item = item.sort((a, b) => a > b ? 1: -1);
} else {
item = item.sort((a, b) => a > b ? -1: 1);
}
return prev.concat(...item);
}, [])
}
