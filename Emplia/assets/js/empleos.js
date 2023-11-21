jQuery(function($) {
    $.get("http://127.0.0.1:5000/empleos", function(data){
        data.forEach(function(empleo){
            $('#job-select').append(new Option(empleo, empleo));
        });
    });
});
