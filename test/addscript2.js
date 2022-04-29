
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
    },
    {
    id:"a",
    priority:"aaaaaa2",
    type:"bbbbbb2",
    status:"cccccc2",
    updated:"dddddd2",
    description:"eeeeee2",
    result:"ffffff2",
    },
    {
    id:"3",
    priority:"aaaaaa3",
    type:"bbbbbb3",
    status:"cccccc3",
    updated:"ddddddd3",
    description:"eeeeee3",
    result:"fffffff3",
    },
    {
    id:"4",
    priority:"aaaaaaaa4",
    type:"bbbbbb4",
    status:"cccccc4",
    updated:"dddddd4",
    description:"eeeeee4",
    result:"fffffff4",
    },
    {
    id:"5",
    priority:"aaaaaa5",
    type:"bbbbbb5",
    status:"cccccc5",
    updated:"ddddddd5",
    description:"eeeeee5",
    result:"fffffff5",
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
            trclass[i].removeAttribute("class");
        }else
            {trclass[i].setAttribute("class", "searchnone")}

        }
}

// addlist ֆունկցիան ավելացնում է տողերը
function addlist() {
let tableid = document.getElementById("tableid")
    for (let i = 0; i < 5; i++)
    { 
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
    let mainaddid = document.getElementById("main-add-id")
    let mainactivid = document.getElementById("main-activ-id")
    mainaddid.style.display="block"
    mainactivid.style.display="none"
    navadd.setAttribute("class", "activenavclass");
    navactiv.setAttribute("class", "pasivnavclass");
}


function activ1() {
    let mainaddid = document.getElementById("main-add-id")
    let mainactivid = document.getElementById("main-activ-id")
    mainaddid.style.display="none"
    mainactivid.style.display="block"
    navactiv.setAttribute("class", "activenavclass");
    navadd.setAttribute("class", "pasivnavclass");
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