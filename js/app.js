$(document).ready(function() {
  $(".views").hide();
  setTimeout(function() {
    $(".first").fadeOut(2000, "swing", function() {
      $(".second").show();
      $(".allLogos").show();
      $(".allLogos").css({
        'display': 'flex',
      });
    });
  }, 2000);

  $(".button2").click(function() {
    console.log("click");
    $(".second").hide();
    $(".allLogos").hide();
    $(".third").show();
  });

  /* Asignar codigo de telefono por pais */
  $('select#country1').on('change', function () {
    $(".inputNum").removeAttr("disabled");
    var valor = $(this).val();
    $("#basic-addon1").html(valor);
  });

  /*Habilitar boton next */
  $(".inputNum").keypress(function() {
    var cantNum = $(this).val();
    var largeNum = cantNum.length + 1;
    if (largeNum == 10) {
      $("button#btn-next").removeAttr("disabled");
    } else {
      $("button#btn-next").attr("disabled", "disabled");

    }

  });

  /*Crear codigo*/
  $("button#btn-next").click(function() {
    console.log("clickNext")
    var code = "";
    var str = "123456789";
    for (var i = 0; i < 3; i++) {
      code += str.charAt(Math.floor(Math.random() * str.length))
    };
    $("div#codigo").append("<div class='panel panel-default'><div class='panel-heading'>Tu codigo Lab: </div><div class='panel-body'>LAB-" + code + "</div></div><button id='btn-ok' class='btn btn-group btn-lg'>Ok</button>")
  });

  /*Evento a boton ok */
  $(document).on("click", "#btn-ok", function() {
    $(".views").hide();
    $(".verifyView").show();
  });

  /*Habilitar btn next en verify*/

  $("#codigo-input").keypress(function() {
    var cantInput = $(this).val();
    var largeNum = cantInput.length + 1;
    if (largeNum == 3) {
      $("button#btn-next-verify").removeAttr("disabled");
    }
  });

  $("button#btn-next-verify").click(function() {
    $(".views").hide();
    $(".formuView").show();
  });

  $('#fancy-checkbox-danger-custom-icons').click(function() {
    if ($(this).is(':checked')) {
      $('#btn-check').removeAttr('disabled');
    } else {
      $('#btn-check').attr('disabled', 'disabled');
    }
  });

  $("button#btn-check").click(function() {
    $(".views").hide();
    $(".finalView").show();
  });

  /*Botones atras*/
  $("button.btn-back-uno").click(function() {
    $(".views").hide();
    $(".second").show();
    $(".allLogos").show();
  })

  $("button.btn-back-dos").click(function() {
    $(".views").hide();
    $(".third").show();
  })

  $("button.btn-back-tres").click(function() {
    $(".views").hide();
    $(".verifyView").show();
  })

});
