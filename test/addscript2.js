
let objtable=[
{
id:"1",
priority:"aaa1",
type:"bbb1",
status:"ccc1",
updated:"ddd1",
description:"eee1",
},
{
    id:"a",
    priority:"aaa2",
    type:"bbb2",
    status:"ccc2",
    updated:"ddd2",
    description:"eee2",
    },
    {
        id:"3",
        priority:"aaa3",
        type:"bbb3",
        status:"ccc3",
        updated:"ddd3",
        description:"eee3",
        },
        {
            id:"4",
            priority:"aaa4",
            type:"bbb4",
            status:"ccc4",
            updated:"ddd4",
            description:"eee4",
            },
            {
                id:"5",
                priority:"aaa5",
                type:"bbb5",
                status:"ccc5",
                updated:"ddd5",
                description:"eee5",
                }
                         



]



let tableid = document.getElementById("tableid")
let main_headdivid = document.getElementById("main_headdivid")
let xbtn = document.getElementById("xbtn")
let sercharr=[]


const serchbtn = document.getElementById("serchbtn");

const littlemain = document.getElementById("littlemain");

let b;
let a; 

// Փնտրման ֆունկցիա







function searchfuid() {



    const serchid = document.getElementById("serchid");
    
        
    
    let b;
    let a; 
    for (let i = 0; i < objtable.length; i++){
    a= serchid.value.toUpperCase();
b= objtable[i].id.toUpperCase().indexOf(`${a}`)
if (b!==-1) {
    trclass[i].removeAttribute("class");
}else{trclass[i].setAttribute("class", "searchnone")}
}
    
}


function searchfupriority() {

    const serchpriority = document.getElementById("serchpriority");
    let b;
    let a; 
    for (let i = 0; i < objtable.length; i++){
    a= serchpriority.value.toUpperCase();
b= objtable[i].priority.toUpperCase().indexOf(`${a}`)
if (b!==-1) {
    trclass[i].removeAttribute("class");
}else{trclass[i].setAttribute("class", "searchnone")}
}
}
function searchfutype() {

    const serchtype = document.getElementById("serchtype");
    let b;
    let a; 
    for (let i = 0; i < objtable.length; i++){
    a= serchtype.value.toUpperCase();
b= objtable[i].type.toUpperCase().indexOf(`${a}`)
if (b!==-1) {
    trclass[i].removeAttribute("class");
}else{trclass[i].setAttribute("class", "searchnone")}
}
}

function searchfustatus() {

    const serchstatus = document.getElementById("serchstatus");
    let b;
    let a; 
    for (let i = 0; i < objtable.length; i++){
    a= serchstatus.value.toUpperCase();
b= objtable[i].status.toUpperCase().indexOf(`${a}`)
if (b!==-1) {
    trclass[i].removeAttribute("class");
}else{trclass[i].setAttribute("class", "searchnone")}
}
}
function searchfuupdated() {

    const serchupdate = document.getElementById("serchupdate");
    let b;
    let a; 
    for (let i = 0; i < objtable.length; i++){
    a= serchupdate.value.toUpperCase();
b= objtable[i].updated.toUpperCase().indexOf(`${a}`)
if (b!==-1) {
    trclass[i].removeAttribute("class");
}else{trclass[i].setAttribute("class", "searchnone")}
}
}
function searchfudescription() {

    const serchdescription = document.getElementById("serchdescription");
    let b;
    let a; 
    for (let i = 0; i < objtable.length; i++){
    a= serchdescription.value.toUpperCase();
b= objtable[i].description.toUpperCase().indexOf(`${a}`)
if (b!==-1) {
    trclass[i].removeAttribute("class");
}else{trclass[i].setAttribute("class", "searchnone")}
}
}




// ֆունկցիան վերացնում է փնտրման արդյունքը
// function bacgroundnone() {
//    for (let i = 0; i < x.length; i++) {
  
//     trclass[x[i]].style.backgroundColor = "white"; 
//     // xbtn.style.display="none"
//     // littlemain.style.marginLeft="76%"


//     // littlemain.style.marginLeft="75%"
//    }
    
// }
// xbtn.addEventListener("click", bacgroundnone);

// serchbtn.addEventListener("click", searchfu);




// addlist ֆունկցիան ավելացնում է տողերը
function addlist() {
    for (let i = 0; i < 5; i++) { 
        tableid.innerHTML+=`<tr id="trid${i+1}" class="trclass" >
        <td><input class="classinput" id="checkbox${i+1}" type="checkbox" onclick="delliteicone()"  ></td>
        <td><i class="fas fa-pen" style="font-size:20px"></i></td>
        <td>${objtable[i].id}</td>
        <td>${objtable[i].priority}</td>
        <td>${objtable[i].type}</td>
        <td>${objtable[i].status}</td>
        <td>${objtable[i].updated}</td>
        <td>${objtable[i].description}</td>
        </tr>`
        sercharr.push(`${i+1}`
        )
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


function osversion() {
    const selectionosid = document.getElementById("selectionosid");
    const selectionversion = document.getElementById("selectionversion");
if (selectionosid.value=="Windows") {
    selectionversion.innerHTML=` <option>Windows 7</option> <option>Windows 8</option> <option>Windows10</option> <option>Windows11</option>`
}
if (selectionosid.value=="macOS") {
    selectionversion.innerHTML=` <option>macOS 11 Big Sur
    </option> <option>Gentoo Linux</option> <option>Ubuntu Linux</option> <option>Linux Mint Desktop</option><option>RHEL Linux Distribution</option> <option>CentOS Linux Distribution</option> <option>Fedora Linux Distribution</option> <option>Kali Linux Distribution</option>`
}
if (selectionosid.value=="Linux") {
    selectionversion.innerHTML=` <option>Debian Linux</option> <option>Gentoo Linux</option> <option>Ubuntu Linux</option> <option>Linux Mint Desktop</option><option>RHEL Linux Distribution</option> <option>CentOS Linux Distribution</option> <option>Fedora Linux Distribution</option> <option>Kali Linux Distribution</option>`
}
}
osversion()