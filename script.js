let p_m=false
let p_m1=false
let dot=false
let percentage=false
function handleClear() {
    document.getElementById('display1').textContent=null;
    dot=false
    p_m=false
    p_m1=false
    percentage=false
}
function calc() {
    disp=document.getElementById('display1').textContent
    percentage=false
    if (disp.length>0) {
        try {
            disp=eval(disp.replace('x','*').replace('%','*0.01').replace('÷','/'))
            if (disp.toString().indexOf('.')!==-1) {
                document.getElementById('display1').textContent=disp.toFixed(6)
                dot=true
                return
            }
            document.getElementById('display1').textContent=disp
        } catch (error) {
            document.getElementById('display2').textContent='Expression error'
        }
    }
}
function back() {
    disp=document.getElementById('display1').textContent
    if (disp.slice(disp.length-1)==='(') {
        p_m=false
        dot=true
    }
    if (disp.slice(disp.length-1)==='.') {
        dot=false
    }
    document.getElementById('display1').textContent=disp.slice(0,disp.length-1)
    try {
        eval(disp.replace('%','*0.01'))
    } catch (error) {
        document.getElementById('display2').textContent=null
    }
}
function numToDisplay(params) {
    if (p_m) {
        document.getElementById('display1').textContent+=params+')'
        p_m=false
        return
    }
    document.getElementById('display1').textContent+=params
}
function opToDisplay(params) {
    dot=false
    dispc=document.getElementById('display1').textContent!==''?true:false
    document.getElementById('display1').textContent+=params
    disp=document.getElementById('display1').textContent
    disp1=disp.slice(disp.length-2,disp.length)
    if ((disp1==='+-' || disp1==='x-' || disp1==='÷-'|| disp1==='--'|| disp1==='-+'|| disp1==='-÷'|| disp1==='+÷'|| disp1==='-x'|| disp1==='+x'|| disp1==='++'|| disp1==='xx'|| disp1==='x+'|| disp1==='x÷'|| disp1==='÷÷'|| disp1==='÷+'|| disp1==='÷x')&&dispc&&disp1!==disp&&!p_m) {
        document.getElementById('display1').textContent=disp.slice(0,disp.length-2)+params
        return
    }
    if (disp==='+' || disp==='x' || disp==='÷'|| disp==='-') {
        document.getElementById('display1').textContent=''
        return
    }
    if (p_m) {
        document.getElementById('display1').textContent=disp.slice(0,disp.length-1)
        return
    }
}
function plus_minus() {
    dot=false
    disp=document.getElementById('display1').textContent
    if (disp==='') {
        document.getElementById('display1').textContent='-'
        return
    }
    if (disp==='-') {
        document.getElementById('display1').textContent=''
        return
    }
    disp1=disp.slice(disp.length-1)
    if ((disp1==='+'||disp1==='÷'||disp1==='x'||disp1==='-')&&!p_m) {
        document.getElementById('display1').textContent+='(-'
        p_m=true
        return
    }
    disp1=disp.slice(disp.length-2,disp.length)
    if (disp1==='(-') {
        document.getElementById('display1').textContent=disp.slice(0,disp.length-2)
        p_m=false
        return
    }
    if (!p_m1) {
        document.getElementById('display1').textContent=disp.slice(0,disp.length-1)+'(-'+disp.slice(disp.length-1)+')'
        p_m1=true
        return
    }
    if (p_m1) {
        document.getElementById('display1').textContent=disp.slice(0,disp.length-4)+disp.slice(disp.length-2,disp.length-1)
        p_m1=false
        return
    }
}
function dotToDisplay(params) {
    disp=document.getElementById('display1').textContent
    if ((disp===''||disp==='+' || disp==='x' || disp==='÷'|| disp==='-')&&!dot) {
        document.getElementById('display1').textContent+='0.'
        dot=true
        return
    }
    if (!dot) {
        document.getElementById('display1').textContent+=params
        dot=true
        return
    }
    if (dot) {
        document.getElementById('display1').textContent=disp.slice(0,disp.length-1)
        dot=false
        return
    }
    
}
function percentageToDisplay(params) {
    disp=document.getElementById('display1').textContent
    if (disp==='') {
        document.getElementById('dispaly1').textContent=''
        return
    }
    if (percentage) {
        document.getElementById('display1').textContent=disp.slice(0,disp.length-1)
        percentage=false
        return
    }
    document.getElementById('display1').textContent+='%'
    percentage=true
}