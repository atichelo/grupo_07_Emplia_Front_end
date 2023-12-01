jQuery(function($) {
    $.get("http://localhost:5000/bdempleos", function(data){
        data.forEach(function(empleo){
            $('#job-select').append(new Option(empleo, empleo));
        });
    });
});
