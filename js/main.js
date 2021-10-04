// let numb = Number(prompt("dit un chiffre"))
// console.log(isNaN(numb));
// switch (isNaN(numb)) {
//     case true:
//         console.log('ceci pas nombre');
//         break;

//     default:
//         switch(numb % 2 == 0){
//             case true:
//                 console.log("pair");
//                 break;
//             case false:
//                 console.log("impair");
//                 break;
//             default:
//                 console.log(('mauvais'));
//                 break;
//         }
//         break;
// }

//2
let numb = prompt("dit un chiffre entre un et 12").toLowerCase
switch (isNaN(numb)) {
    case true:
        console.log('ceci pas nombre');
        break;
    default:
        switch (numb){
            case 1:
                console.log("janvier");
                break;
            case 2:
                console.log("fevrier");
                break;
            case 3:
                console.log("mars");
            default:
                console.log(('mauvais'));
                break;
        }
        break;
}