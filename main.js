let n;
var picnum;
初始化()
setInterval(()=>{
    if (n > picnum){
        n=1
    }else{
        makeLeave(getImage(n))
            .one('transitionend',(e)=>{
                makeEnter($(e.currentTarget))
            })
        console.log(n)
        if (n === picnum){
            $('.imags>img:nth-child(1)').addClass('current').removeClass('enter')
        }else{
            makeCurrent(getImage(n+1))
        }      
        n++         
    }  
},3000)




function getImage(n){
    return $(`.imags>img:nth-child(${n})`)
}

function 初始化() {
    n = 1;
    $(`.imags>img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter').removeClass('current')
    picnum = document.getElementById('imags').querySelectorAll('img').length;
    console.log(picnum)
}

function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node) {
    $node.removeClass('enter current').addClass('leave')
    return $node
}
function makeEnter($node) {
    $node.removeClass('leave current').addClass('enter')
}