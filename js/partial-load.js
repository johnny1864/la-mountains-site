$('#mountain-1').click(function(e) {
    e.preventDefault();
    
    $('.climb-bg').load('index.html .climb-bg .container');
    $('.climb-bg').addClass('mountain-1').removeClass('mountain-2');
    $('#mountain-1').addClass('active');
    $('#mountain-2').removeClass('active');
});

$('#mountain-2').click(function(e) {
    e.preventDefault();
    $('.climb-bg').load('mountain2.html .container');
    $('.climb-bg').addClass('mountain-2').removeClass('mountain-1');
    $('#mountain-2').addClass('active');
    $('#mountain-1').removeClass('active');
});