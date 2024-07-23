let LS = (arr,x) => {
    let idx = -1;
    arr.forEach((elem,index) => {
        if(elem == x) idx = index;
    })

    return idx;
}

let BS = () => {
    // the code for binary search
}

// module.exports = {
//     linear : LS,
//     binary : BS
// }

export default LS;

export {
    BS
}