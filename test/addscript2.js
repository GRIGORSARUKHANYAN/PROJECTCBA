
let tableid = document.getElementById("tableid")
let main_headdivid = document.getElementById("main_headdivid")
let xbtn = document.getElementById("xbtn")
let sercharr=[]
let a 
let x=[]
const serchbtn = document.getElementById("serchbtn");
const serchinput = document.getElementById("serchinput");

// Փնտրման ֆունկցիա
function searchfu() {
    for (let i = 0; i < classinput.length; i++){
    a= serchinput.value
// console.log(a);

b= sercharr[i].indexOf(`${a}`)
if (b!==-1) {
    trclass[i].style.backgroundColor = "#EFEFEF";
    
    xbtn.style.display="block"
    x.push(i)
}

}
}
// ֆունկցիան վերացնում է փնտրման արդյունքը
function bacgroundnone() {
   for (let i = 0; i < x.length; i++) {
  
    trclass[x[i]].style.backgroundColor = "white"; 
    xbtn.style.display="none"
   }
    
}
xbtn.addEventListener("click", bacgroundnone);

serchbtn.addEventListener("click", searchfu);




// addlist ֆունկցիան ավելացնում է տողերը
function addlist() {
    for (let i = 0; i < 44; i++) { 
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
        return
    } else {
        dellicone.style.display = "none";
        
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
}
    }
}
dellicone.addEventListener("click", rem);

