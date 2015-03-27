$(document).ready(function(){
    var punteroGrafico = document.getElementById("punterografico"), //Puntero div que se movera con los controles
    i,
    intervalo,
    alturaCheck,
    anchuraCheck,
    totalMorfadas = 0,
    morfed = false; 
    
    // Hovers especificos para cada posición
    $(".arriba").hover(function(){        
        $(".arriba").css("background-position-x", "85px");
    },
    function(){        
        $(".arriba").css("background-position-x", "0");
    });
    $(".abajo").hover(function(){        
        $(".abajo").css("background-position-x", "85px");
    },
    function(){        
        $(".abajo").css("background-position-x", "0");
    });
    $(".derecha").hover(function(){        
        $(".derecha").css("background-position-x", "85px");
    },
    function(){        
        $(".derecha").css("background-position-x", "0");
    });
    $(".izquierda").hover(function(){        
        $(".izquierda").css("background-position-x", "85px");
    },
    function(){        
        $(".izquierda").css("background-position-x", "0");
    });
    // Eventos asignados para el click en cada tecla
    $(".arriba").mousedown(function(){
        // Intervalo necesario para el normal movimiento del div
        intervalo = setInterval(function(){
            if($(punteroGrafico).css("top") !== "0px"){
                // Parseo temp anterior, sumo un pixel y vuelvo a actualizar la propiedad top
                temp = $(punteroGrafico).css("top");
                temp = temp.replace("px","");
                temp = parseInt(temp);
                temp--;
                temp = temp.toString();
                $(punteroGrafico).css("top",temp+"px");
            }
            // Comprobar si alguna de las 10 frutitas fue comida por el puntero
            
            // Tomo la distancia del top y le sumo la altura del cuadrado
            alturaCheck = $(punteroGrafico).css("top");
            alturaCheck = alturaCheck.replace("px","");
            alturaCheck = parseInt(alturaCheck);
            altura = alturaCheck; // esta var llevara solo la dist del top, sin suma
            alturaCheck = alturaCheck + 50;
            
            
            // Tomo la distancia left y le sumo la anchura del cuadrado
            anchuraCheck = $(punteroGrafico).css("left");
            anchuraCheck = anchuraCheck.replace("px","");
            anchuraCheck = parseInt(anchuraCheck);
            anchura = anchuraCheck; // esta var llevara solo la dist del left, sin suma
            anchuraCheck = anchuraCheck + 50;
            
            // Comprobaremos la altura y anchura de todas las frutitas para ver si matchean con el puntero y son "morfadas" por dicho puntero
            for(i=0;i<10;i++){
                if (altura < frutitas[i].topDist && $(".frutita"+i).css("display") != "none"){
                    if (alturaCheck > frutitas[i].topDist){
                        if (anchura < frutitas[i].leftDist){
                            if (anchuraCheck > frutitas[i].leftDist){
                                $(".frutita"+i).fadeOut(0);
                                totalMorfadas++;
                                $(".morfadas").text(totalMorfadas);
                            }
                        }
                    }
                }
            }
        }, 10);
    }).mouseup(function(){
        clearInterval(intervalo);
    }).mouseleave(function(){
        clearInterval(intervalo);
    });
    $(".abajo").mousedown(function(){
        intervalo = setInterval(function(){
            if($(punteroGrafico).css("top") !== "398px"){
                temp = $(punteroGrafico).css("top");
                temp = temp.replace("px","");
                temp = parseInt(temp);
                temp++;
                temp = temp.toString();
                $(punteroGrafico).css("top",temp+"px");
            }
            // Comprobar si alguna de las 10 frutitas fue comida por el puntero
            
            // Tomo la distancia del top y le sumo la altura del cuadrado
            alturaCheck = $(punteroGrafico).css("top");
            alturaCheck = alturaCheck.replace("px","");
            alturaCheck = parseInt(alturaCheck);
            altura = alturaCheck; // esta var llevara solo la dist del top, sin suma
            alturaCheck = alturaCheck + 50;
            
            
            // Tomo la distancia left y le sumo la anchura del cuadrado
            anchuraCheck = $(punteroGrafico).css("left");
            anchuraCheck = anchuraCheck.replace("px","");
            anchuraCheck = parseInt(anchuraCheck);
            anchura = anchuraCheck; // esta var llevara solo la dist del left, sin suma
            anchuraCheck = anchuraCheck + 50;
            
            // Comprobaremos la altura y anchura de todas las frutitas para ver si matchean con el puntero y son "morfadas" por dicho puntero
            for(i=0;i<10;i++){
                if (altura < frutitas[i].topDist && $(".frutita"+i).css("display") != "none"){
                    if (alturaCheck > frutitas[i].topDist){
                        if (anchura < frutitas[i].leftDist){
                            if (anchuraCheck > frutitas[i].leftDist){
                                $(".frutita"+i).fadeOut(0);
                                totalMorfadas++;
                                $(".morfadas").text(totalMorfadas);
                            }
                        }
                    }
                }
            }
        }, 10);
    }).mouseup(function(){
        clearInterval(intervalo);
    }).mouseleave(function(){
        clearInterval(intervalo);
    });
    $(".izquierda").mousedown(function(){
        intervalo = setInterval(function(){
            if($(punteroGrafico).css("left") !== "0px"){
                temp = $(punteroGrafico).css("left");
                temp = temp.replace("px","");
                temp = parseInt(temp);
                temp--;
                temp = temp.toString();
                $(punteroGrafico).css("left",temp+"px");
            }
            // Comprobar si alguna de las 10 frutitas fue comida por el puntero
            
            // Tomo la distancia del top y le sumo la altura del cuadrado
            alturaCheck = $(punteroGrafico).css("top");
            alturaCheck = alturaCheck.replace("px","");
            alturaCheck = parseInt(alturaCheck);
            altura = alturaCheck; // esta var llevara solo la dist del top, sin suma
            alturaCheck = alturaCheck + 50;
            
            
            // Tomo la distancia left y le sumo la anchura del cuadrado
            anchuraCheck = $(punteroGrafico).css("left");
            anchuraCheck = anchuraCheck.replace("px","");
            anchuraCheck = parseInt(anchuraCheck);
            anchura = anchuraCheck; // esta var llevara solo la dist del left, sin suma
            anchuraCheck = anchuraCheck + 50;
            
            // Comprobaremos la altura y anchura de todas las frutitas para ver si matchean con el puntero y son "morfadas" por dicho puntero
            for(i=0;i<10;i++){
                if (altura < frutitas[i].topDist && $(".frutita"+i).css("display") != "none"){
                    if (alturaCheck > frutitas[i].topDist){
                        if (anchura < frutitas[i].leftDist){
                            if (anchuraCheck > frutitas[i].leftDist){
                                $(".frutita"+i).fadeOut(0);
                                totalMorfadas++;
                                $(".morfadas").text(totalMorfadas);
                            }
                        }
                    }
                }
            }
        }, 10);
    }).mouseup(function(){
        clearInterval(intervalo);
    }).mouseleave(function(){
        clearInterval(intervalo);
    });
    $(".derecha").mousedown(function(){
        intervalo = setInterval(function(){
            if($(punteroGrafico).css("left") !== "848px"){
                temp = $(punteroGrafico).css("left");
                temp = temp.replace("px","");
                temp = parseInt(temp);
                temp++;
                temp = temp.toString();
                $(punteroGrafico).css("left",temp+"px");
            }
            // Comprobar si alguna de las 10 frutitas fue comida por el puntero
            
            // Tomo la distancia del top y le sumo la altura del cuadrado
            alturaCheck = $(punteroGrafico).css("top");
            alturaCheck = alturaCheck.replace("px","");
            alturaCheck = parseInt(alturaCheck);
            altura = alturaCheck; // esta var llevara solo la dist del top, sin suma
            alturaCheck = alturaCheck + 50;
            
            
            // Tomo la distancia left y le sumo la anchura del cuadrado
            anchuraCheck = $(punteroGrafico).css("left");
            anchuraCheck = anchuraCheck.replace("px","");
            anchuraCheck = parseInt(anchuraCheck);
            anchura = anchuraCheck; // esta var llevara solo la dist del left, sin suma
            anchuraCheck = anchuraCheck + 50;
            
            // Comprobaremos la altura y anchura de todas las frutitas para ver si matchean con el puntero y son "morfadas" por dicho puntero
            for(i=0;i<10;i++){
                if (altura < frutitas[i].topDist && $(".frutita"+i).css("display") != "none"){
                    if (alturaCheck > frutitas[i].topDist){
                        if (anchura < frutitas[i].leftDist){
                            if (anchuraCheck > frutitas[i].leftDist){
                                $(".frutita"+i).fadeOut(0);
                                totalMorfadas++;
                                $(".morfadas").text(totalMorfadas);
                            }
                        }
                    }
                }
            }
        }, 10);
    }).mouseup(function(){
        clearInterval(intervalo);
    }).mouseleave(function(){
        clearInterval(intervalo);
    });
    
    // Timer informativo
    
    function sumaSegundo(){
        segundero = $('.timerseg').text();
        segundero = parseInt(segundero);
        segundero++;
        if(totalMorfadas < 10){ // Si todavia no se morfaron todas, el reloj funcionara
            if(segundero < 60){ // Mientras se puedan sumar segundos, se suman
                $('.timerseg').text(segundero);
            } else { // Caso contrario agregamos un minuto
                segundero = 0;
                $('.timerseg').text(segundero);
                sumaMinuto();
            }
        }
    }
    function sumaMinuto(){
        minutero = $('.timermin').text();
        minutero = parseInt(minutero);
        minutero++;
        $('.timermin').text(minutero);
    }
    // Ejecucion del timer
    setInterval(sumaSegundo, 1000);
    
    // Inicializo array que contendra todas las frutitas
    var frutitas = [];
    
    function addFrutita(i,randTop,randLeft){
        this.id = i;
        this.topDist = randTop;
        this.leftDist = randLeft;
    };
    
    // Generacion de frutitas en el campo    
    for(i=0;i<10;i++){
        var randTop = Math.floor((Math.random() * 420) - 1), //Distancia top relative en el css, numero al azar
        randLeft = Math.floor((Math.random() * 790) + 90), // Distancia del top left relative en el css, al azar tambien
        spRandTop, // dist top para pasaje de var en int
        spRandLeft; // dist top para pasaje de var en int
        spRandTop = randTop;
        spRandLeft = randLeft;
        randTop = randTop.toString();
        randTop = randTop+"px";
        randLeft = randLeft.toString();
        randLeft = randLeft+"px";
        $(".frutita"+i).css("top",randTop);
        $(".frutita"+i).css("left",randLeft);
        var frutiTemp = new addFrutita(i,spRandTop,spRandLeft);
        frutitas.push(frutiTemp);
    }
    
});
