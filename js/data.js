const d = new Date();
const yearGet = d.getFullYear();
year.innerText= yearGet;

function dataShow(className,name,img) {
    for(let l=0;l<className.length;l++)
    {className[l].style.display="table-row";}
    userImg.src=img;
    userName.innerText=name;
}

function dataHide(hclassName) {
    for(let l=0;l<hclassName.length;l++)
    {hclassName[l].style.display="none";}
}

getData.addEventListener("click",()=>{
var userInputName = document.querySelector('#user-input-name').value;

if (userInputName=="null")
{
    dataShow(domnull,"User Name",img[0]);
    dataHide(dip);
    dataHide(sujoy);
    dataHide(swargo);
    dataHide(apurba);
    dataHide(rahul);
    dataHide(shuvo);
    dataHide(arup);
}
else if (userInputName=="dip")
{
    dataShow(dip,"Dip",img[1]);
    dataHide(domnull);
    dataHide(sujoy);
    dataHide(swargo);
    dataHide(apurba);
    dataHide(rahul);
    dataHide(shuvo);
    dataHide(arup);
}
else if (userInputName=="sujoy")
{
    dataShow(sujoy,"Sujoy",img[2]);
    dataHide(domnull);
    dataHide(dip);
    dataHide(swargo);
    dataHide(apurba);
    dataHide(rahul);
    dataHide(shuvo);
    dataHide(arup);
}
else if (userInputName=="swargo")
{
    dataShow(swargo,"Swargo",img[3]);
    dataHide(domnull);
    dataHide(dip);
    dataHide(sujoy);
    dataHide(apurba);
    dataHide(rahul);
    dataHide(shuvo);
    dataHide(arup);
}
else if (userInputName=="apurba")
{
    dataShow(apurba,"Apurba",img[4]);
    dataHide(domnull);
    dataHide(dip);
    dataHide(sujoy);
    dataHide(swargo);
    dataHide(rahul);
    dataHide(shuvo);
    dataHide(arup);
}
else if (userInputName=="rahul")
{
    dataShow(rahul,"Rahul",img[5]);
    dataHide(domnull);
    dataHide(dip);
    dataHide(sujoy);
    dataHide(swargo);
    dataHide(apurba);
    dataHide(shuvo);
    dataHide(arup);
}
else if (userInputName=="shuvo")
{
    dataShow(shuvo,"Shuvo",img[6]);
    dataHide(domnull);
    dataHide(dip);
    dataHide(sujoy);
    dataHide(swargo);
    dataHide(apurba);
    dataHide(rahul);
    dataHide(arup);
}
else if (userInputName=="arup")
{
    dataShow(arup,"Arup",img[7]);
    dataHide(domnull);
    dataHide(dip);
    dataHide(sujoy);
    dataHide(swargo);
    dataHide(apurba);
    dataHide(rahul);
    dataHide(shuvo);
}


});