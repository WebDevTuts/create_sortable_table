$(document).ready(function() {

  $.tablesorter.addParser({

    id: 'getDateAttr',
    is: function(sort) { return false; },
    format: function(sort, table, cell, cellIndex) { return $(cell).attr('data-date'); },
    type: 'text'

  });

  $('table#courses').tablesorter({

    sortList: [[ 2,0 ]],   // sort based on [[ column (zero base), 0:ascending 1:descending ]]
    cssAsc: 'sorted asc',  // css class injection
    cssDesc: 'sorted desc', // css class injection
    headers: { 3 : { sorter: 'getDateAttr' } }

  });

});
