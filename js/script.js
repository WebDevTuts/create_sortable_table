$(document).ready(function() {

  $('table#courses').tablesorter({

    sortList: [[ 2,0 ]],   // sort based on [[ column (zero base), 0:ascending 1:descending ]]
    cssAsc: 'sorted asc',  // css class injection
    cssDesc: 'sorted desc' // css class injection

  });

});
