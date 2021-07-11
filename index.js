let cards=[
    {
        image:"https://png.pngtree.com/png-vector/20201226/ourmid/pngtree-sitting-british-shorthair-cat-png-image_2642250.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://png.pngtree.com/png-vector/20201226/ourmid/pngtree-sitting-british-shorthair-cat-png-image_2642250.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value:2,
        status:"closed"
    },
    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/c8/41/9b/c8419bc328f95517200446ab7a6fe035.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/c8/41/9b/c8419bc328f95517200446ab7a6fe035.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://wallpaperaccess.com/full/55565.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://wallpaperaccess.com/full/55565.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/hulk/images/6/60/Avengers_hulk_assemble.jpg/revision/latest/scale-to-width-down/250?cb=20180221170632",
        value:5,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/hulk/images/6/60/Avengers_hulk_assemble.jpg/revision/latest/scale-to-width-down/250?cb=20180221170632",
        value:5,
        status:"closed"
    },  
]

let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}
let cardsCopy = cards;

function displayCards(data) {
    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        <div class="card" style="background-image:url('${card.image}')">
        <div class=" overlay ${card.status}" onClick="openCard(${index})">
        </div>
        </div>
        `;
    });
    document.getElementById('cards').innerHTML=cardsString;

}
displayCards(cards);

let cardCount =1;
let val1=null,val2=null;
let score=0;
function openCard(index) {
cards[index].status="opened";
if(cardCount === 1){
    val1=cards[index].value;
    cardCount++;
}else if(cardCount === 2){
    val2=cards[index].value;

    if(val1 === val2){
        score++;
        document.getElementById('score').innerText=score;

        val1=null;
        val2=null;
        cardCount=1;

    }else{
alert("Game Over");
location.reload();
    }
}
displayCards(cards);
}