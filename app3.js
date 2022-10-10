let member = sessionStorage.getItem("result")
let checkdraw = sessionStorage.getItem("checkDraw")
let group = sessionStorage.getItem("group")



//メンバー名取得
let memberName = []
let createName = () =>{
    let currentbox = ""
    for(let i of member){
        if(i != ","){
            currentbox += i
        } else{
            memberName.push(currentbox)
            currentbox = ""
        }
    }
    memberName.push(currentbox)
    memberName.reverse()
}
createName()


//グループ名取得
let groupName = []
let groupList = {
    0:"TWICE",
    1:"IVE",
    2:"Kep1er",
    3:"aespa",
    4:"BLACKPINK",
    5:"fomis_9",
    6:"STAYC",
    7:"WJSN",
    8:"ITZY"
}
for(let i of group){
    if (i in groupList){
        groupName.push(groupList[i])
    }
}
groupName.reverse()


//引き分け取得
let checkDraw = []
for(let i of checkdraw){
    if(i == "a"){
        checkDraw.push(false)
    } else if(i=="b"){
        checkDraw.push(true)
    }
}
checkDraw.reverse()

console.log(memberName)
console.log(checkDraw)
console.log(groupName)
















let box = document.getElementById("box")

let check = false
let currentNumeber = 1



let createOdd = (number) =>{

    let member = document.createElement("div");
    member.className = "member color"


    let rank = document.createElement("div");
    rank.className = "rank"
    if (check==false){
        currentNumeber = number+1
        rank.innerHTML = currentNumeber
    } else{
        rank.innerHTML = currentNumeber
    }

    let Name = document.createElement("div");
    Name.className = "name"
    Name.innerHTML = memberName[number]

    let group = document.createElement("div");
    group.className = "group"
    group.innerHTML = groupName[number]


    member.appendChild(rank);
    member.appendChild(Name);
    member.appendChild(group);

    box.appendChild(member);
}


let createeven = (number) =>{

    let member = document.createElement("div");
    member.className = "member"


    let rank = document.createElement("div");
    rank.className = "rank"
    if (check==false){
        currentNumeber = number+1
        rank.innerHTML = currentNumeber
    } else{
        rank.innerHTML = currentNumeber
    }

    let Name = document.createElement("div");
    Name.className = "name"
    Name.innerHTML = memberName[number]

    let group = document.createElement("div");
    group.className = "group"
    group.innerHTML = groupName[number]



    member.appendChild(rank);
    member.appendChild(Name);
    member.appendChild(group);

    box.appendChild(member);
}





for (let i = 0; i<memberName.length ;i++){

     //引き分けのチェック
     if(checkDraw[i] == true){
        check = true
    } else{
        check = false
    }
    console.log(check)

    
    if(i%2 !== 0){
        createOdd(i)
    } else{
        createeven(i)
    }


}


