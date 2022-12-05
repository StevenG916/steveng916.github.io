function make_bigger()
{
alert("Hello, world!");
document.getElementById("text_area").style.fontSize="2em";
}

function FancyShmancy()
{
	alert("styles added to the text area");
	text_area.style.fontWeight="bold";
    text_area.style.color="blue";
    text_area.style.textDecoration="underline"
}

function BoringBetty()
{
    alert("styles removed from the text area");
	text_area.style.fontWeight="normal";
    text_area.style.color="black";
    text_area.style.textDecoration="none"
    
}

function makeMoo(){
    text_area.style.textTransform="uppercase"
    let str=text_area.value.split(".");
    let str2=str.join("-Moo");
    text_area.value=str2;
}
