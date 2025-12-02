function numChk(elem) {
  var patt = /[^\d]/g;
  if (patt.test(elem.value)) {
    alert("숫자만 입력가능합니다");
    elem.value = "";
    elem.focus();
  }
}

function emailChange(val, id) {
  var eid = id || "email2";

  if ($.trim(val)) {
    $("#" + eid).val(val);
  } else {
    $("#" + eid).val("");
  }
}

function formatComma(num) {
  num = num + "";
  while (/(^[+-]?\d+)(\d{3})/.test(num)) {
    num = num.replace(/(^[+-]?\d+)(\d{3})/, "$1" + "," + "$2");
  }
  return num;
}

function postWinOpen(zip, addr, addr2) {
  var zip = zip || "zip";
  var addr = addr || "addr";

  new daum.Postcode({
    oncomplete: function (data) {
      var fullAddr = ""; // 최종 주소 변수
      var extraAddr = ""; // 조합형 주소 변수

      if (data.userSelectedType === "R") {
        // 사용자가 도로명 주소를 선택했을 경우
        fullAddr = data.roadAddress;
      } else {
        fullAddr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
      if (data.userSelectedType === "R") {
        //법정동명이 있을 경우 추가한다.
        if (data.bname !== "") {
          extraAddr += data.bname;
        }
        // 건물명이 있을 경우 추가한다.
        if (data.buildingName !== "") {
          extraAddr +=
            extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
        fullAddr += extraAddr !== "" ? " (" + extraAddr + ")" : "";
      }

      $("#" + zip).val(data.zonecode);
      $("#" + addr).val(fullAddr);
      if (addr2) {
        $("#" + addr2).focus();
      }
    },
  }).open();
}

function alertMsg(msg) {
  $.get("/process/translate_json.php", { msg: msg }, function (data) {
    alert(data);
  });
}

function translateMsg(msg) {
  return $.get("/process/translate_json.php", { msg: msg });
}
