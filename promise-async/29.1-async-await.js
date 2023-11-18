const getIDs = () =>
new Promise((resolve, reject) => {
setTimeout(() => {
resolve([532, 543, 753, 1, 5]);
}, 1500);
});

getIDs().then((arr) => console.log(arr))