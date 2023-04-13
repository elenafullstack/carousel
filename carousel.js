var selectedIndex = 0
var allimages = document.querySelectorAll(".image");
var maxindex = allimages.length-1;
var after = selectedIndex+1 > maxindex ? 0 : selectedIndex+1;
var before = selectedIndex-1 < 0 ? maxindex : selectedIndex-1;

window.onload = function() {
    allimages[selectedIndex].classList.add("mainImg");
    allimages[after].classList.add("afterImg");
    allimages[before].classList.add("beforeImg");

    for ( var i = 0 ; i <= maxindex ; i++ ) {
        if( i!=selectedIndex && i!=before && i!=after) {
            allimages[i].classList.add('hideImg');
        }
    }

}


function selectNext() { 
    selectedIndex = selectedIndex+1 > maxindex ? 0 : selectedIndex+1;
    console.log(selectedIndex)
    changeSelected();

}

function selectPrevious() {
    selectedIndex = selectedIndex-1 >= 0 ? selectedIndex-1 : maxindex;
    changeSelected();

}


function changeSelected() {


    after = selectedIndex+1 > maxindex ? 0 : selectedIndex+1;
    before = selectedIndex-1 < 0 ? maxindex : selectedIndex-1;

    for ( var i = 0 ; i <= maxindex ; i++ ) {

        allimages[i].classList.remove('hideImg');
        allimages[i].classList.remove('selectedImg');
        allimages[i].classList.remove('afterImg');
        allimages[i].classList.remove('beforeImg');
        if( i!=selectedIndex && i!=before && i!=after) {
            allimages[i].classList.add('hideImg');
        }
    }

    allimages[selectedIndex].classList.add('mainImg');
    allimages[after].classList.add('afterImg');
    allimages[before].classList.add('beforeImg');


}