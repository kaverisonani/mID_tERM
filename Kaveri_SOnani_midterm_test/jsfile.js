//Kaveri SOnani 300985891

$(document).ready(function(){

var randomImage = new Array();
var count = 0;
var money = 3500;
var img1,img2;

randomImage[0] = "images/blank.png";
randomImage[1] = "images/1.png";
randomImage[2] = "images/2.png";
randomImage[3] = "images/3.png";
randomImage[4] = "images/4.png";
randomImage[5] = "images/5.png";
randomImage[6] = "images/6.png";


	var list1 = $('#rolldice1>ul:first');
    var list2 = $('#rolldice1>ul:first');
    
    var firstItem1 = list1.find('li:first');
    var firstItem2 = list2.find('li:first');
    
    firstItem1.clone().appendTo(list1);
    firstItem2.clone().appendTo(list2);



$('#startBtn').click(function() //spin button click
    { 
var i;
var img1;
var img2;
for( i=1; i<7; i++)
{
    img1=Math.ceil(Math.random() * i);
    document.getElementById('viewbox1').innerHTML = ('<img src="' + randomImage[img1] + '" />');
    img2=Math.ceil(Math.random() * i);
    document.getElementById('viewbox2').innerHTML = ('<img src="' + randomImage[img2] + '" />');
}

document.getElementById('dice1').innerHTML =img1;
document.getElementById('dice2').innerHTML =img2;

});

  
 });