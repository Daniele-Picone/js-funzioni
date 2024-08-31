





let arrey_1 = [
 ['un', 'per', 'incatenarli.'],
 ['Anello', 'trovali,'],
 ['ghemirli', 'e'],
 ['gondor', 'mark']
]

let arrey_2 = [
    [['trovali,']],
    ['tu,', 'sciocchi'],
    ['tu,', 'sciocchi', ['padron', 'sauron']],
    ['nel', ['fuggite', 'gandalf']  ],
    [['domarli,', 'passare' ] , 'buio']
];
console.log(arrey_1);
console.log(arrey_2);



let primaParte = `${arrey_1[0][0]} ${arrey_1[1][0]} ${arrey_1[0][1]} ${arrey_2[4][0][0]} ` ;

let secondaParte =  `${ arrey_1 [0][0]} ${arrey_1[1][0]} ${arrey_1[0][1]} ${arrey_2[0][0][0]}`;

let terzaParte = `${ arrey_1[0][0]} ${arrey_1[1][0] } ${arrey_1[0][1]} ${arrey_1[2][0] } ${arrey_1[2][1]} ${arrey_2[3][0]} ${arrey_2[4][1]} ${arrey_1[0][2]}`



console.log(`${primaParte}${secondaParte}${terzaParte}`);







