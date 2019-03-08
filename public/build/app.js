$(function(){
	//$('li:first-child').addClass('textoVerde');
	//$('li:last-child').addClass('textoRojo');


    /*var nuevaimagen = $('#imagen-nueva-input').val();
        console.log(nuevaimagen);
        $('img')
            .attr('src',nuevaimagen)
            .removeClass('rounded-circle')    //Borrar la clase inicial de la imagen
            .addClass('img-thumbnail');       //Añadir una nueva clase a la imagen*/

	/*var nuevaimagen = $('#imagen-nueva2-input').val();
        console.log(nuevaimagen);
        $('img')
            .attr('src',nuevaimagen)
            .addClass('rounded-circle img-thumbnail')*/  

	$('.col-sm-5')
		.find("p")
		//.text("salu2 xd");        
        .html("<u>salu2</u> xd");

    $('ul li') 
    	.eq(1).addClass('amarillo').end()
    	.eq(2).addClass('azul').end()
    	.eq(3).addClass('naranja').end()
    	.eq(4).addClass('verde').end();

    $('#bot1').on("click",function(){
    	console.log("Click!");
    });

    /*$('.img100').on("mouseenter",function(){
    	$('.img100').attr("src","images/nophoto.jpg")
    })*/

    var nuevaimagen = $('#imagen-nueva-input').val();
        console.log(nuevaimagen);
        $('.img100').on('mouseenter',function(){
        $(this)	
            .attr('src',nuevaimagen);
    }); 

    var nuevaimagen2 = $('#imagen2-nueva-input').val();
        console.log(nuevaimagen);
        $('.img100').on('mouseleave',function(){
        $(this)	
            .attr('src',nuevaimagen2);
    }); 



    /*$('.img100').on("mouseleave",function(){
    	console.log("mouse leave")
    })*/

    $("#linkUdemy").on('click',function(event){
    	event.preventDefault();
    	console.log("click on link");
    	var link=$(this).attr("href");
    	console.log(link); 
    	window.location=link;
    });

    (function(){
    	var dds=$('dd');
    	dds.hide();
    	dds.eq(0).show();
    	$('dt').on('mouseenter',function(){
    		dds.slideUp(200);
    		$(this)
    			.next()
    			.slideDown(200);
    	});
    })();

    (function(){
    	var contador=0;
    	
    	$("body").on("click","h3",function(){
    		contador ++;
    		var h3Dinamico="<h3 id='h3-"+contador+"'>Dinamico: " +contador+"</h3>";
    		//$("body").prepend(h3Dinamico);
    		$(".container").append(h3Dinamico);
    		$("#h3-2").bind("click",function(){
    			console.log("funcion dinamica")
    		});

    	});
    })();


    (function(){

	var contador = 0;


	$("button").on("click",function(){

		contador ++;

		var base = $("#cmbBase").val();


		var linea = "";

		linea += '<tr>';
		linea += 	'<td>'+ base +'</td>';
		linea += 	'<td>x</td>';
		linea += 	'<td>'+ contador +'</td>';
		linea += 	'<td>=</td>';
		linea += 	'<td>'+ ( contador * base ) +'</td>';
		linea += '</tr>';

		$("table").append( linea );


	});


		// Funcion que detecta el cambio de la base
		$("#cmbBase").on("change",function(){

			$("tr").not(":eq(0)").remove();
			contador = 0;

		});


	})();

});


