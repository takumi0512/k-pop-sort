
let leftbox = document.getElementById("leftbox");
let leftname = document.getElementById("leftname");
let leftgroup = document.getElementById("leftgroup");
let leftimage = document.getElementById("leftimage");

let rightbox = document.getElementById("rightbox");
let rightname =document.getElementById("rightname");
let rightgroup = document.getElementById("rightgroup");
let rightimage = document.getElementById("rightimage");

let draw = document.getElementById("draw");
let number = document.getElementById("number");

let memberbox = document.getElementById("memberbox");



let memberlist = [/*twice*/"ツウィ","モモ","ナヨン","ジョンヨン","サナ","ジヒョ","ミナ","ダヒョン","チェヨン",/*IVE*/"ガウル","アン_ユジン","レイ","ウォニョン","リズ","イソ",/*kep1er*/"チェ_ユジン","シャオティン","マシロ","チェヒョン","キム_ダヨン","ヒカル","バヒエ","ヨンウン","イェソ",/*aespa*/"カリナ","ジゼル","ウィンター","ニンニン",/*blackpink*/"ジス","ジェニー","ロゼ","リサ",/*formis9*/"セロム","ハヨン","ジウォン","ジソン","ソヨン","チェヨン","ナギョン","ジホン",/*stayc*/"スミン","シウン","アイサ","セウン","ユン","ジェイ",/*wjsn*/"ソラ","ソニ","ボナ","エクシ","スビン","ルダ","ダウォン","ウンソ","ソンソ","ミギ","ヨルム","イム_ダヨン","ヨンジョン",/*itzy*/"イェジ","リア","リュジン","チェリョン","ユナ"]
let imagelist = {/*twice*/
                ツウィ:"./imagemember/twice/twice ツウィ.jpeg",
                モモ:"./imagemember/twice/twiceモモ 2.jpeg",
                ナヨン:"./imagemember/twice/twice ナヨン 2.jpeg",
                ジョンヨン:"./imagemember/twice/ジョンヨン.jpeg",
                サナ:"./imagemember/twice/twice サナ.jpeg",
                ジヒョ:"./imagemember/twice/twice ジヒョ 2.jpeg",
                ミナ:"./imagemember/twice/twiceミナ.jpeg",
                ダヒョン:"./imagemember/twice/twice ダヒョン.jpeg",
                チェヨン:"./imagemember/twice/twiceチェヨン 2.jpeg",
                /*IVE*/
                ガウル:"./imagemember/ive/iveガウル.jpeg",
                アン_ユジン:"./imagemember/ive/iveユジン 2.jpeg",
                レイ:"./imagemember/ive/iveレイ 2.jpeg",
                ウォニョン:"./imagemember/ive/iveヲニョン.jpeg",
                リズ:"./imagemember/ive/ive リズ 2.jpeg",
                イソ:"./imagemember/ive/iveイソ.jpeg",
                /*kep1er*/
                チェ_ユジン:"./imagemember/kep1er/kep ユジン 2.jpeg",
                シャオティン:"./imagemember/kep1er/kep シャオティン 2.jpeg",
                マシロ:"./imagemember/kep1er/mashiro.jpeg",
                チェヒョン:"./imagemember/kep1er/kep チェヒョン 2.jpeg",
                キム_ダヨン:"./imagemember/kep1er/kep ダヨン.jpeg",
                ヒカル:"./imagemember/kep1er/kep ヒカル 2.jpeg",
                バヒエ:"./imagemember/kep1er/kep ヒュニン 2.jpeg",
                ヨンウン:"./imagemember/kep1er/kep ヨンウン 2.jpeg",
                イェソ:"./imagemember/kep1er/kep イェソ 2.jpeg",
                /*aespa*/
                カリナ:"./imagemember/aespa/aespaカリナ 2.jpeg",
                ジゼル:"./imagemember/aespa/aespaジゼル.jpeg",
                ウィンター:"./imagemember/aespa/ウィンタ.jpeg",
                ニンニン:"./imagemember/aespa/aespaニンニン 2.jpeg",
                /*blackpink*/
                ジス:"./imagemember/blackpink/ジス.jpeg",
                ジェニー:"./imagemember/blackpink/blackpinkジェニー 2.jpeg",
                ロゼ:"./imagemember/blackpink/blackpinkロゼ.jpeg",
                リサ:"./imagemember/blackpink/blackpinkリサ.jpeg",
                /*formis9*/
                セロム:"./imagemember/fromis9/セロム 2.jpeg",
                ハヨン:"./imagemember/fromis9/ハヨン 2.jpeg",
                ジウォン:"./imagemember/fromis9/ジオン 2.jpeg",
                ジソン:"./imagemember/fromis9/ジソン 2.jpeg",
                ソヨン:"./imagemember/fromis9/ソヨン 2.jpeg",
                チェヨン:"./imagemember/fromis9/チェヨン.jpeg",
                ナギョン:"./imagemember/fromis9/ナギョン.jpeg",
                ジホン:"./imagemember/fromis9/ジホン 2.jpeg",
                /*stayc*/
                スミン:"./imagemember/stayc/スミン 2.jpeg",
                シウン:"./imagemember/stayc/シウン.jpeg",
                アイサ:"./imagemember/stayc/アイサ 2.jpeg",
                セウン:"./imagemember/stayc/STAYCセウン.jpeg",
                ユン:"./imagemember/stayc/ユン 2.jpeg",
                ジェイ:"./imagemember/stayc/ジェイ 2.jpeg",
                /*wjsn*/
                ソラ:"./imagemember/wjsn/wjsnソラ 2.jpeg",
                ソニ:"./imagemember/wjsn/ソニ 2.jpeg",
                ボナ:"./imagemember/wjsn/ボナ 2.jpeg",
                エクシ:"./imagemember/wjsn/エクシ 2.jpeg",
                スビン:"./imagemember/wjsn/スビン 2.jpeg",
                ルダ:"./imagemember/wjsn/流だ 2.jpeg",
                ダウォン:"./imagemember/wjsn/だをん 2.jpeg",
                ウンソ:"./imagemember/wjsn/ウンソ 2.jpeg",
                ソンソ:"./imagemember/wjsn/ソンソ 2.jpeg",
                ミギ:"./imagemember/wjsn/ミギ 2.jpeg",
                ヨルム:"./imagemember/wjsn/ヨルム.jpeg",
                イム_ダヨン:"./imagemember/wjsn/ダヨン.jpeg",
                ヨンジョン:"./imagemember/wjsn/ヨンジョン 2.jpeg",
                /*itzy*/
                イェジ:"./imagemember/itzy/イエジ 2.jpeg",
                リア:"./imagemember/itzy/リア.jpeg",
                リュジン:"./imagemember/itzy/リュジン 2.jpeg",
                チェリョン:"./imagemember/itzy/チェリョン 2.jpeg",
                ユナ:"./imagemember/itzy/ユナ 2.jpeg"
            }


let sortArrName = []
let sortArrGroup = {}
let sortArrNumber = sessionStorage.getItem('arr');
















/*sortlist 作成*/



let sortlisthelper = (start,end,group) =>{
    for(let i = start ; i<= end ; i++){
        sortArrName.push(memberlist[i])
        sortArrGroup[memberlist[i]] = group
    }
}

let sortlist = (arr) =>{
    if(arr.indexOf(0) !== -1){
        sortlisthelper(0,8,"TWICE")
    };
    if(arr.indexOf(1) !== -1){
        sortlisthelper(9,14,"IVE")
    };
    if(arr.indexOf(2) !== -1){
        sortlisthelper(15,23,"Kep1er")
    };
    if(arr.indexOf(3) !== -1){
        sortlisthelper(24,27,"aespa")
    };
    if(arr.indexOf(4) !== -1){
        sortlisthelper(28,31,"BLACKPINK")
    };
    if(arr.indexOf(5) !== -1){
        sortlisthelper(32,39,"fromis_9")
    };
    if(arr.indexOf(6) !== -1){
        sortlisthelper(40,45,"STAYC")
    };
    if(arr.indexOf(7) !== -1){
        sortlisthelper(46,58,"WJSN")
    };
    if(arr.indexOf(8) !== -1){
        sortlisthelper(59,63,"ITZY")
    };
}


//html1から選択データを読み込む
sortlist(sortArrNumber)


//完成した配列をシャッフルする
const shuffle = (arr) =>{
    for(let i = arr.length-1; i>=0 ;i--){
        let n = Math.floor(Math.random() * (i+1));
        [arr[i],arr[n]] = [arr[n],arr[i]];
    }
    return arr
}

shuffle(sortArrName);

console.log(sortArrName);
console.log(sortArrGroup);























/*sort*/



let sortList = sortArrName
//let sortList = ["賀喜","久保","大園","白石","西野","橋本","生駒","生田","弓木"]
console.log(sortList);


//配列を分解する、ソートした結果が出る分だけ空の配列を作る
let temporaryArrBox = {};

if(sortList.length%2==0){
    //ソートする要素が偶数の場合の空の配列作成
    for(let i = 1; i<sortList.length; i++){
            temporaryArrBox[i] = []
    }
} else{
    //ソートする要素が奇数の場合の空の配列作成、最下段の端数の分一個多い
    for(let i = 1; i<=sortList.length; i++){
        temporaryArrBox[i] = []
    }
    //最下段の端数の配列には予め要素を一つだけ入れておく
    temporaryArrBox[1] = [sortList[0]]
}



//空の配列の使用状況を確認するための配列
let checkArr = []
if(sortList.length%2 == 0){
    //偶数の場合
    for(let i = 1; i<sortList.length; i++){
        checkArr.push(i)
    }
} else{
    //奇数の場合
    for(let i = 1; i<=sortList.length; i++){
        checkArr.push(i)
    }
}


//引き分けのチェックをする配列を全要素分作る
let checkDraw = {}

for (let i of sortList){
        checkDraw[i] = false
    }




console.log(temporaryArrBox);
console.log(checkArr);
console.log(checkDraw);







//初期の表示
let leftArr = []
let rightArr = []

if(sortList.length%2==0){
    leftArr = [sortList[0]]
    rightArr = [sortList[1]]
} else{
    leftArr = [sortList[1]]
    rightArr = [sortList[2]]
}


let li = 0;
let ri = 0;
let localResult = []
let globalResult = []
let countNumber = 1//ソート回数の表示

leftname.innerHTML = leftArr[li]
leftgroup.innerHTML = sortArrGroup[leftArr[li]]
leftimage.src = imagelist[leftArr[li]]
rightname.innerHTML = rightArr[ri]
rightgroup.innerHTML = sortArrGroup[rightArr[ri]]
rightimage.src = imagelist[rightArr[ri]]





//右がクリックされた場合

rightbox.addEventListener("click",() =>{
    //結果のboxに移動

    while(li<leftArr.length){
        localResult.push(leftArr[li]);
        console.log(checkDraw[leftArr[li]]);

        if(checkDraw[leftArr[li]] == true){
            //現在の要素の後ろに引き分けの要素があるかを調べる
            li++
        } else{
            break
        }
    }
    
    
    countNumber++
    number.innerHTML = "No."+countNumber

    //ソートを呼ぶ
    rightBoxSort(localResult);
},false);


//右クリックのソート

function rightBoxSort(currentSortResult){

    //右クリックが最後まで処理された
    if(li+1 == leftArr.length){
        //rightarrをresultに追加して終了
        for (let i = ri; i<rightArr.length ;i++){
            currentSortResult.push(rightArr[i]);
        };
    
        console.log(currentSortResult);
        console.log("一つのboxのソート終了");
        //ここで新たな関数を呼んでソートを続けたい
        return resetArr(currentSortResult);

    }else{
         //最後まで処理されていない場合は左の人を変更
        li++;
        leftname.innerHTML = leftArr[li];
        leftgroup.innerHTML = sortArrGroup[leftArr[li]];
        leftimage.src = imagelist[leftArr[li]];
    }
}




//左がクリックされた時

leftbox.addEventListener("click",() =>{
    //結果のBOXに移動
    while(li<leftArr.length){
        localResult.push(rightArr[ri]);
        console.log(checkDraw[rightArr[ri]]);

        if(checkDraw[rightArr[ri]] == true){
            ri++
        } else{
            break
        }
    }
    
    countNumber++
    number.innerHTML = "No."+countNumber;

    //ソートを呼ぶ
    leftBoxSort(localResult);
},false);


//左クリックのソート

function leftBoxSort(currentSortResult){

    if(ri+1 == rightArr.length){
        for (let i = li; i<leftArr.length ;i++){
            currentSortResult.push(leftArr[i]);
        };

        console.log(currentSortResult);
        console.log("一つのboxのソート終了");
        return resetArr(currentSortResult);

        }else{
            ri++;
            rightname.innerHTML = rightArr[ri];
            rightgroup.innerHTML = sortArrGroup[rightArr[ri]];
            rightimage.src = imagelist[rightArr[ri]];
    }
}





//引き分けがクリックされた場合

draw.addEventListener("click",()=>{


    //左右どちらも結果のBOXに移動
    
    //左の要素が引き分けじゃないかをチェック
    while(li<leftArr.length){
        localResult.push(leftArr[li]);
        console.log(checkDraw[leftArr[li]]);

        if(checkDraw[leftArr[li]] == true){
            //現在の要素の後ろに引き分けの要素があるかを調べる
            li++
        } else{
            break
        }
    }

    //右の要素の引き分けをチェック

    while(ri<rightArr.length){
        localResult.push(rightArr[ri]);
        console.log(checkDraw[rightArr[ri]]);

        if(checkDraw[rightArr[ri]] == true){
            ri++
        } else{
            break
        }
    }
    
    //左の要素をtrueに変更する
    checkDraw[leftArr[li]] = true

    countNumber++
    number.innerHTML = "No."+countNumber;

    //ソートを呼ぶ
    drawBoxSort(localResult);
})


//引き分けのソート

let drawBoxSort = (currentSortResult) =>{

    if(li+1 == leftArr.length && ri+1 == rightArr.length){
        //左右どちらも配列の最後だった場合
        console.log(currentSortResult);
        console.log("一つのboxのソート終了");

        //次の関数を呼んでソートを続行
        return resetArr(currentSortResult);


    } else if(li+1 == leftArr.length){
        //左だけ配列の最後だった場合
        //rightarrをresultに追加して終了
        for (let i = ri+1; i<rightArr.length ;i++){
            currentSortResult.push(rightArr[i]);
        };
    
        console.log(currentSortResult);
        console.log("一つのboxのソート終了");
        //ここで新たな関数を呼んでソートを続けたい
        return resetArr(currentSortResult);


    } else if(ri+1 == rightArr.length){
        //右だけ配列の最後だった場合
        for (let i = li+1; i<leftArr.length ;i++){
            currentSortResult.push(leftArr[i]);
        };

        console.log(currentSortResult);
        console.log("一つのboxのソート終了");

        return resetArr(currentSortResult);


    } else {
        //左右どちらも続く場合
        ri++;
        li++;
        rightname.innerHTML = rightArr[ri];
        rightgroup.innerHTML = sortArrGroup[rightArr[ri]];
        rightimage.src = imagelist[rightArr[ri]];
        leftname.innerHTML = leftArr[li];
        leftgroup.innerHTML = sortArrGroup[leftArr[li]];
        leftimage.src = imagelist[leftArr[li]];
    }
} 








let count = 0 //何個目の空の配列に対してのソートか

//今回のソートをリセットし次のソートに備える
const resetArr = (result) =>{
    //この関数が呼び出された回数を記録
    count++
    console.log("リセット関数の呼び出し"+count);

    //resultを移してlocalresultを次のソートに備え空にする
    temporary = result;
    localResult = [];

    //次のソートのためのleftArr,rightArr作成し書き換える
    newArrProdeuce(count,temporary)
    console.log(leftArr);
    console.log(rightArr);

    //表示を書き換える
    li = 0
    ri = 0
    leftname.innerHTML = leftArr[li]
    leftgroup.innerHTML = sortArrGroup[leftArr[li]]
    leftimage.src = imagelist[leftArr[li]]
    rightname.innerHTML = rightArr[ri]
    rightgroup.innerHTML = sortArrGroup[rightArr[ri]]
    rightimage.src = imagelist[rightArr[ri]]

    console.log(checkDraw)
}

let contemporaryArr = {}





//次のソートのための配列を返す関数
const newArrProdeuce = (parameter1,parameter2) =>{

    //大元の配列の要素数の偶奇で処理の関数が異なる

   if(sortList.length%2 == 0){
    even(parameter1,parameter2)
   } else{
    odd(parameter1,parameter2)
   }

}



let countArr = 0 

//大元の配列の要素数が偶数個だった場合の処理
const even = (countUp,currentResult) =>{

    //今のソートの結果を最初に作った空の配列の指定箇所に格納
    temporaryArrBox[countUp] = currentResult
    console.log(temporaryArrBox);


    //次のソートに向けて左右の配列を返す
    if(countUp == sortList.length-1){
        //全ソート終了　ページ遷移
        globalResult = temporaryArrBox[countUp]

        transition()
        
    } else if(countUp<sortList.length/2){
        //配列の要素が一つの一番最初のソートたち最下段

        //次のソートの左右を指定
        leftArr = [sortList[2*countUp]]
        rightArr = [sortList[2*countUp+1]]

    } else{
        //二段目以上

        //次のソートのために表示する配列を指定
        leftArr = temporaryArrBox[checkArr[countArr]]
        rightArr = temporaryArrBox[checkArr[countArr+1]]

        //ここまで辿りついた回数をカウント
        countArr += 2
    }
}


//大元の配列の要素数が奇数個だった場合の処理
const odd = (countUp,currentResult) =>{

    //今のソートの結果を最初に作った空の配列の指定箇所に格納
    temporaryArrBox[countUp+1] = currentResult;
    console.log(temporaryArrBox);


    //次のソートに向けて左右の配列を返す
    if(countUp == sortList.length-1){
        //全ソート終了　ページ遷移
        globalResult = temporaryArrBox[countUp+1]

        transition()

    } else if(countUp<sortList.length/2-1){
        //配列の要素が一つの一番最初のソートたち最下段

        //次のソートの左右を指定
        leftArr = [sortList[2*countUp+1]]
        rightArr = [sortList[2*countUp+2]]

    } else{
        //二段目以上

        //次のソートのために表示する配列を指定
        leftArr = temporaryArrBox[checkArr[countArr]]
        rightArr = temporaryArrBox[checkArr[countArr+1]]

        //ここまで辿りついた回数をカウント
        countArr += 2
       
    }

}










//ページ遷移

let groupList = {
    TWICE: "0",
    IVE: "1",
    Kep1er:"2",
    aespa: "3",
    BLACKPINK: "4",
    fromis_9:"5",
    STAYC:"6",
    WJSN:"7",
    ITZY:"8"
}

let transition =() =>{

    //html3に送るデータ

    sessionStorage.setItem("result",globalResult)
    console.log(globalResult);

    draw = []
    for (let i of globalResult){
        if(checkDraw[i] == false){
            draw.push("a")
        } else{
            draw.push("b")
        }
    }
    sessionStorage.setItem("checkDraw",draw)
    console.log(draw);

    group = []
    for(let i of globalResult){
        group.push(groupList[sortArrGroup[i]])
    }
    sessionStorage.setItem("group",group)
    console.log(group);

    location.href = "./index3.html"
}



















//hover時のcss変更


let hover = (rightleft,reverse) =>{
    rightleft.addEventListener("mouseover",()=>{
        reverse.style.backgroundColor = "#999"
        reverse.style.filter = "brightness(30%)grayscale(50%)"
        reverse.style.opacity = "0.7"
        reverse.style.transition = "0.1s"
        draw.style.backgroundColor = "#999"
        draw.style.filter = "brightness(30%)grayscale(50%)"
        draw.style.opacity = "0.7"
        draw.style.transition = "0.1s"
    })
    rightleft.addEventListener("mouseleave",()=>{
        reverse.style.backgroundColor = "#fff"
        reverse.style.filter = "none"
        reverse.style.opacity = "1"
        reverse.style.transition = "0.1s"
        draw.style.backgroundColor = "#fff"
        draw.style.filter = "none"
        draw.style.opacity = "1"
        draw.style.transition = "0.1s"
    })
}

let drawhover = () =>{
    draw.addEventListener("mouseover",()=>{
        memberbox.style.backgroundColor = "#999"
        memberbox.style.filter = "brightness(30%)grayscale(50%)"
        memberbox.style.opacity = "0.7"
        memberbox.style.transition = "0.1s"
    })
    draw.addEventListener("mouseleave",()=>{
        memberbox.style.backgroundColor = "#fff"
        memberbox.style.filter = "none"
        memberbox.style.opacity = "1"
        memberbox.style.transition = "0.1s"
    })
    
}

//スマホの時はhoverしない

if(window.matchMedia('(min-width: 768px)').matches){
    hover(leftbox,rightbox);
    hover(rightbox,leftbox);
    drawhover();
}






//クリック時のcss変更
let click = (box) => {
    box.addEventListener("mousedown",()=>{
        box.style.backgroundColor = "#ed86b3"
        box.style.transition = "0.1s"
    })
    box.addEventListener("mouseup",()=>{
        box.style.backgroundColor = "#fff"
        box.style.transition = "0.1s"
    })
}
click(rightbox);
click(leftbox);
click(draw);

let touch = (box) =>{
    box.addEventListener("touchstart",()=>{
        box.style.backgroundColor = "#ed86b3"
        box.style.transition = "0.1s"
    },{passive: true})
    box.addEventListener("touchend",()=>{
        box.style.backgroundColor = "#fff"
        box.style.transition = "0.1s"
    },{passive: true})
}
touch(rightbox);
touch(leftbox);
touch(draw);


