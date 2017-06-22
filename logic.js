let inputTotal;
let count = 0;
let barProgress;
let partialPer = 0 + "%";
let isWorking = false;
let control = false;


showPlaceholder();
setTotal();
displayReset();
add();
subs();

function showPlaceholder() {
  $("input").focus(function() {
      $(this).attr("placeholder", "")
  }).blur(function() {
      $(this).attr("placeholder", "Max Capactiy")
  })
}

function displayReset() {
  $("#okBtn").on("click", function() {
    if (isWorking === false && control === true) {
      $("input[type='number']").css("display", "none");
      $(this).text("RESET");
    } else {
      $("input[type='number']").css("display", "block");
      $(this).text("OK");
      reset();
      control = false;
    }
    isWorking = !isWorking;
  });
}

function setTotal() {
  $("#okBtn").on("click", function() {
    inputTotal = Number($("input[type='number']").val())
    if (inputTotal > 0) {
      $("#total").text(inputTotal)
      control = true;
    }
    $("input[type='number']").val("")
  })
}

function reset() {
  count = 0;
  barProgress = "0%";
  partialPer = "";
  inputTotal = "__";
  $("#total").text(inputTotal);
  $("#partial").text("__");
  $("#infoPer").text("");
  $("#barProgress").css("width", barProgress);
}

function add() {
    $("#sum").on("click", function() {
      if (count < inputTotal) {
        count ++;
        $("#partial").text(count);
        calcBar();
      }
    })
}

function subs() {
  $("#subs").on("click", function() {
    if(count > 0) {
      count--;
      $("#partial").text(count);
      calcBar();
    }
  })
}

function calcBar() {
  partialPer = (100 * count) / inputTotal
  barProgress = String(partialPer) + "%";
  barProgressPrint(barProgress);
  printPercent();
  return partialPer
}

function printPercent() {
  let printPer = String(partialPer.toFixed(0)) + "%"
  if (partialPer > 0) {
    $("#infoPer").text(printPer);
  } else {
    $("#infoPer").text("0%")
  }
}

function barProgressPrint(unit) {
  $("#barProgress").css("width", unit)
}
