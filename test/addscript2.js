
let tableid = document.getElementById("tableid")
let main_headdivid = document.getElementById("main_headdivid")
let xbtn = document.getElementById("xbtn")
let sercharr=[]
let a 
let x=[]
const serchbtn = document.getElementById("serchbtn");
const serchinput = document.getElementById("serchinput");
const littlemain = document.getElementById("littlemain");
// Փնտրման ֆունկցիա
function searchfu() {
    bacgroundnone()
    
    for (let i = 0; i < classinput.length; i++){
    a= serchinput.value

b= sercharr[i].indexOf(`${a}`)
if (b!==-1) {
    // trclass[i].style.backgroundColor = "#EFEFEF";
    trclass[i].removeAttribute("class");
    // xbtn.style.display="table"
    // littlemain.style.left="-20px"
    // littlemain.style.marginLeft="74.5%"

    x.push(i)
}else{trclass[i].setAttribute("class", "searchnone")}


}
}
// ֆունկցիան վերացնում է փնտրման արդյունքը
function bacgroundnone() {
   for (let i = 0; i < x.length; i++) {
  
    trclass[x[i]].style.backgroundColor = "white"; 
    // xbtn.style.display="none"
    // littlemain.style.marginLeft="76%"


    // littlemain.style.marginLeft="75%"
   }
    
}
// xbtn.addEventListener("click", bacgroundnone);

// serchbtn.addEventListener("click", searchfu);




// addlist ֆունկցիան ավելացնում է տողերը
function addlist() {
    for (let i = 0; i < 100; i++) { 
        tableid.innerHTML+=`<tr id="trid${i+1}" class="trclass" >
        <td><input class="classinput" id="checkbox${i+1}" type="checkbox" onclick="delliteicone()"  ></td>
        <td><i class="fas fa-pen" style="font-size:20px"></i></td>
        <td>${i+1}</td>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        </tr>`
        sercharr.push(`${i+1}`)
    }
}


addlist()

// աղբամանի կոճակը ըստ չեկբոկսի ակտիվի
const classinput = document.querySelectorAll("input.classinput");
var dellicone = document.getElementById("dellicone");
function delliteicone() {
 for (let i = 0; i < classinput.length; i++) {
    if (classinput[i].checked == true){
       
        dellicone.style.display = "block";
        // littlemain.style.left="-25px"
        // littlemain.style.marginLeft="74.5%"
        return
    } else {
        dellicone.style.display = "none";
        // littlemain.style.left="2px"
        
    }
  }

}

// ջնջելու ֆունկցիան
let trclass  = document.querySelectorAll(`.trclass`)
function rem() {
    for (let i = 0; i < classinput.length; i++){
    if (classinput[i].checked == true){

trclass[i].remove()
dellicone.style.display = "none";
// littlemain.style.left="3px"
// littlemain.style.marginLeft="72.5%"
}
    }
}
dellicone.addEventListener("click", rem);






// porc  ejeri popoxutyun arandz abteyti
let navactiv = document.getElementById("navactiv")
navactiv.addEventListener("click", activ1);
let navadd = document.getElementById("navadd")
navadd.addEventListener("click",  activ2);



let mainaddid = document.getElementById("main-add-id")
let mainactivid = document.getElementById("main-activ-id")

function activ2() {
    mainaddid.style.display="block"
    mainactivid.style.display="none"
    // navactiv.style.backgroundColor="#FFFFFF"
    // navadd.style.backgroundColor="#0D6EFD"
    navadd.setAttribute("class", "activenavclass");
    navactiv.setAttribute("class", "pasivnavclass");
}


function activ1() {
    mainaddid.style.display="none"
    mainactivid.style.display="block"
    // navactiv.style.backgroundColor="#0D6EFD"
    // navadd.style.backgroundColor="#FFFFFF"

    navactiv.setAttribute("class", "activenavclass");
   navadd.setAttribute("class", "pasivnavclass");
} 

activ1()