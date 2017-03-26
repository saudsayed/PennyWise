/* Write here your custom javascript codes */
$(document).ready(function() {

var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
	"theme": "chalk",
    "legend": {
    	"align": "center",
		"useGraphSettings": true,
    },
    "dataProvider": [{
        "category": "Food",
        "expense": 2.5,
        "budget": 2.5,
    }, {
        "category": "Fashion",
        "expense": 2.6,
        "budget": 2.7,
    }, {
        "category": "Furniture",
        "expense": 2.8,
        "budget": 2.9,
    }],
    "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Expense",
        "type": "column",
		"color": "#000000",
        "valueField": "expense"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Budget",
        "type": "column",
		"color": "#000000",
        "valueField": "budget"
    }],
    "categoryField": "category",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left"
    },
    "export": {
    	"enabled": false
     }

});
setTimeout(function(){
	$("a[title='JavaScript charts']").hide();
},1500);

var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
body = document.body;

showLeft.onclick = function() {
classie.toggle( this, 'active' );
classie.toggle( menuLeft, 'cbp-spmenu-open' );
disableOther( 'showLeft' );
};

function disableOther( button ) {
if( button !== 'showLeft' || button !== 'showRight' ) {
classie.toggle( showLeft, 'disabled' );
}}

var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
body = document.body;

showRight.onclick = function() {
classie.toggle( this, 'active' );
classie.toggle( menuRight, 'cbp-spmenu-open' );
disableOther( 'showRight' );
};

});