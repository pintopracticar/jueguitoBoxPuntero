$(document).ready(function(){
    var punteroGrafico = document.getElementById("punterografico"); //Puntero div que se movera con los controles
    
    // Hovers especificos para cada posición
    $(".arriba").hover(function(){        
        $(".arriba").css("background-position-x", "85px")
    },
    function(){        
        $(".arriba").css("background-position-x", "0")
    });
    $(".abajo").hover(function(){        
        $(".abajo").css("background-position-x", "85px")
    },
    function(){        
        $(".abajo").css("background-position-x", "0")
    });
    $(".derecha").hover(function(){        
        $(".derecha").css("background-position-x", "85px")
    },
    function(){        
        $(".derecha").css("background-position-x", "0")
    });
    $(".izquierda").hover(function(){        
        $(".izquierda").css("background-position-x", "85px")
    },
    function(){        
        $(".izquierda").css("background-position-x", "0")
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
        }, 25);    
    }).mouseup(function(){
        clearInterval(intervalo);
    }).mouseleave(function(){
        clearInterval(intervalo);
    });
    $(".abajo").mousedown(function(){
        intervalo = setInterval(function(){
            if($(punteroGrafico).css("top") !== "400px"){
                temp = $(punteroGrafico).css("top");
                temp = temp.replace("px","");
                temp = parseInt(temp);
                temp++;
                temp = temp.toString();
                $(punteroGrafico).css("top",temp+"px");
            }
        }, 25);
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
        }, 25);
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
        }, 25);
    }).mouseup(function(){
        clearInterval(intervalo);
    }).mouseleave(function(){
        clearInterval(intervalo);
    });
    
    
});
