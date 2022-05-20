
let objtable=
[
    {
    id:"1",
    priority:"AAAAAA1",
    type:"bbbbbb1",
    status:"cccccc1",
    updated:"dddddd1",
    description:"eeeeee1",
    result:"fffffff1",
    name:"ggggggGG1"
    },
    {
    id:"a",
    priority:"aaaaaa2",
    type:"bbbbbb2",
    status:"cccccc2",
    updated:"dddddd2",
    description:"eeeeee2",
    result:"ffffff2",
    name:"ggggggGG2"
    },
    {
    id:"3",
    priority:"aaaaaa3",
    type:"bbbbbb3",
    status:"cccccc3",
    updated:"ddddddd3",
    description:"eeeeee3",
    result:"fffffff3",
    name:"ggggggGG3"
},
    {
    id:"4",
    priority:"aaaaaaaa4",
    type:"bbbbbb4",
    status:"cccccc4",
    updated:"dddddd4",
    description:"eeeeee4",
    result:"fffffff4",
    name:"ggggggGG4"
    },
    {
    id:"5",
    priority:"aaaaaa5",
    type:"bbbbbb5",
    status:"cccccc5",
    updated:"ddddddd5",
    description:"eeeeee5",
    result:"fffffff5",
    name:"ggggggGG5"
    }
                         

]




// Փնտրման ֆունկցիա
function myserch() {
    const serchid = document.getElementById("serchid");
    const serchpriority = document.getElementById("serchpriority");
    const serchtype = document.getElementById("serchtype");
    const serchstatus = document.getElementById("serchstatus");
    const serchupdate = document.getElementById("serchupdate");
    const serchdescription = document.getElementById("serchdescription");
    const serchresult = document.getElementById("serchresult");
    for (let i = 0; i < objtable.length; i++){
        if (objtable[i].id.toUpperCase().indexOf(`${serchid.value.toUpperCase()}`)!==-1 &&
            objtable[i].priority.toUpperCase().indexOf(`${serchpriority.value.toUpperCase()}`)!==-1 &&
            objtable[i].type.toUpperCase().indexOf(`${serchtype.value.toUpperCase()}`)!==-1 &&  
            objtable[i].status.toUpperCase().indexOf(`${serchstatus.value.toUpperCase()}`)!==-1 &&  
            objtable[i].updated.toUpperCase().indexOf(`${serchupdate.value.toUpperCase()}`)!==-1 &&  
            objtable[i].description.toUpperCase().indexOf(`${serchdescription.value.toUpperCase()}`)!==-1 &&
            objtable[i].result.toUpperCase().indexOf(`${serchresult.value.toUpperCase()}`)!==-1 

            ) {
                optionclass[i].removeAttribute("class");
        }else
            {optionclass[i].setAttribute("class", "searchnone")}

        }
}
let optionclass = document.querySelectorAll(`.optionclass`)
// addlist ֆունկցիան ավելացնում է տողերը
function addlist() {
let tableid = document.getElementById("tableid")
let selectprojectname= document.getElementById("selectprojectname")
    for (let i = 0; i < 5; i++)
    { 
        selectprojectname.innerHTML+=`
        <option class="optionclass">${objtable[i].name}</option>
        `



        tableid.innerHTML+=`<tr id="trid${i+1}" class="trclass" >
        <td><input class="classinput" id="checkbox${i+1}" type="checkbox" onclick="delliteicone()"  ></td>
        <td><i class="fas fa-pen" style="font-size:20px"></i></td>
        <td>${objtable[i].id}</td>
        <td>${objtable[i].priority}</td>
        <td>${objtable[i].type}</td>
        <td>${objtable[i].status}</td>
        <td>${objtable[i].updated}</td>
        <td>${objtable[i].description}</td>
        <td>${objtable[i].result}</td>
        </tr>`
        
    }
}


addlist()
// աղբամանի կոճակը ըստ չեկբոկսի ակտիվի


function delliteicone() {
    const classinput = document.querySelectorAll("input.classinput");
    const dellicone = document.getElementById("dellicone");
    for (let i = 0; i < classinput.length; i++) {
        if (classinput[i].checked == true)
        {
        
            dellicone.style.display = "block";

            return
        }
        else 
        {
            dellicone.style.display = "none";

            
        }
    }

}

// ջնջելու ֆունկցիան
let trclass  = document.querySelectorAll(`.trclass`)
function rem() {
    const classinput = document.querySelectorAll("input.classinput");
    const dellicone = document.getElementById("dellicone");
    for (let i = 0; i < classinput.length; i++)
    {
        if (classinput[i].checked == true){

            trclass[i].remove()
            dellicone.style.display = "none";

        }   
    }
}
dellicone.addEventListener("click", rem);






// էջերի փոփոխություն 
let navactiv = document.getElementById("navactiv")
navactiv.addEventListener("click", activ1);
let navadd = document.getElementById("navadd")
navadd.addEventListener("click",  activ2);


function activ2() {
    selectionproject.value="Project"
    let viweallprojecttableid =document.getElementById("viwe-all-project-id")
        viweallprojecttableid.style.display="none"
    let mainaddid = document.getElementById("main-add-id")
    let mainactivid = document.getElementById("main-activ-id")
    mainaddid.style.display="block"
    mainactivid.style.display="none"
    navadd.setAttribute("class", "activenavclass");
    navactiv.setAttribute("class", "pasivnavclass");
    let editprojectid =document.getElementById("edit-project-id")
    editprojectid.style.display="none"
    let creatprojectid =document.getElementById("creat-project-id")
        creatprojectid.style.display="none"
}


function activ1() {
    selectionproject.value="Project"
    let viweallprojecttableid =document.getElementById("viwe-all-project-id")
        viweallprojecttableid.style.display="none"
    let mainaddid = document.getElementById("main-add-id")
    let mainactivid = document.getElementById("main-activ-id")
    mainaddid.style.display="none"
    mainactivid.style.display="block"
    navactiv.setAttribute("class", "activenavclass");
    navadd.setAttribute("class", "pasivnavclass");
    let editprojectid =document.getElementById("edit-project-id")
    editprojectid.style.display="none"
    let creatprojectid =document.getElementById("creat-project-id")
        creatprojectid.style.display="none"
} 

activ1()



//  add test case էջում ՕՊերացիոն համակարգերի ընտրելու ֆունկցիան
function osversion() {
     const selectionosid = document.getElementById("selectionosid");
     const selectionversion = document.getElementById("selectionversion");
    if (selectionosid.value=="Windows") {
        selectionversion.innerHTML=` <option>Windows 7</option> <option>Windows 8</option> <option>Windows10</option> <option>Windows11</option>`
    }else
    if (selectionosid.value=="macOS")
    {
        selectionversion.innerHTML=` <option>macOS 12</option> <option>macOS 11</option> <option>macOS 10.15</option> <option>macOS 10.14</option>
        <option>macOS 10.13</option> <option>macOS 10.12</option> `
    }
    else
    if (selectionosid.value=="Android") 
    {
        selectionversion.innerHTML=` <option>Android 12L</option> <option>Android 12</option> <option>Android 11</option> <option>Android 10</option>
        <option>Android Pie</option> <option>Android Oreo</option> <option>Android Nougat</option> <option>Android Marshmallow</option> 
        <option>Android Lollipop</option> <option>Android KitKat</option> `
    }
    else
    if (selectionosid.value=="Linux") 
    {
        selectionversion.innerHTML=` <option>Debian Linux</option> <option>Gentoo Linux</option> <option>Ubuntu Linux</option> 
        <option>Linux Mint Desktop</option><option>RHEL Linux Distribution</option> <option>CentOS Linux Distribution</option> 
        <option>Fedora Linux Distribution</option> <option>Kali Linux Distribution</option>`
    }
}
osversion()




// View all project ---ավելացնել տողեր  

function viewadd() {
    for (let i = 0; i < 3; i++) {
    let viweallprojecttableid =document.getElementById("viwe-all-project-table-id")
     viweallprojecttableid.innerHTML+=` <tr>
     <td style="border: none;"><span  class="fa fa-star"></span></td>
     <td style="border: none;">GZNKH</td>
     <td style="border: none;">GZNKH</td>
     <td style="border: none;"> Company-maneged softweare</td>
     <td style="border: none;">Narine Harutyunyan</td>
     <td style="border: none;" ><i class="fas fa-pen " onclick="editproject()"  style="font-size:20px"></i></td>
   </tr>`
}
}
viewadd()




function projectactive() {
    let selectionproject =document.getElementById("selectionproject")
    if (selectionproject.value=="Project") {     
       activ1()
    }
        

    
    if (selectionproject.value=="View all project") {  
        viweallproject()
              
    }
    if (selectionproject.value=="Create project") {    
        let mainaddid = document.getElementById("main-add-id")
        let mainactivid = document.getElementById("main-activ-id")
        mainaddid.style.display="none"
        mainactivid.style.display="none"
        navadd.setAttribute("class","pasivnavclass");
        navactiv.setAttribute("class","pasivnavclass");
        let viweallprojecttableid =document.getElementById("viwe-all-project-id")
        viweallprojecttableid.style.display="none"
        let editprojectid =document.getElementById("edit-project-id")
        editprojectid.style.display="none"
        let creatprojectid =document.getElementById("creat-project-id")
        creatprojectid.style.display="block"
        

    }

}
function viweallproject(){let mainaddid = document.getElementById("main-add-id")
let mainactivid = document.getElementById("main-activ-id")
mainaddid.style.display="none"
mainactivid.style.display="none"
navadd.setAttribute("class","pasivnavclass");
navactiv.setAttribute("class","pasivnavclass");
let viweallprojecttableid =document.getElementById("viwe-all-project-id")
viweallprojecttableid.style.display="block"
let editprojectid =document.getElementById("edit-project-id")
editprojectid.style.display="none"
let creatprojectid =document.getElementById("creat-project-id")
creatprojectid.style.display="none"}




function editproject(){

    let mainaddid = document.getElementById("main-add-id")
    let mainactivid = document.getElementById("main-activ-id")
    mainaddid.style.display="none"
    mainactivid.style.display="none"
    navadd.setAttribute("class","pasivnavclass");
    navactiv.setAttribute("class","pasivnavclass");
    let viweallprojecttableid =document.getElementById("viwe-all-project-id")
    viweallprojecttableid.style.display="none"
    let editprojectid =document.getElementById("edit-project-id")
    editprojectid.style.display="block"
    let creatprojectid =document.getElementById("creat-project-id")
    creatprojectid.style.display="none"
}
















// visual studia comunication 