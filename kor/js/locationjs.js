/* 서울 */
new daum.roughmap.Lander({
    "timestamp" : "1739429287839",
	"key" : "2n2de",
    "mapWidth": "",
    "mapHeight": "400"
}).render();

/* 대전 */
new daum.roughmap.Lander({
    "timestamp" : "1739429382966",
	"key" : "2n2dh",
    "mapWidth": "",
    "mapHeight": "400"
}).render();


var loca_title = ["서울본사", "대전사무소"];
var loca_addr = [
    "서울 강남구 테헤란로8길13, WD빌딩 9층 / 국기원사거리",
    "대전광역시 서구 둔산중로 78번길 26 민석타워, 3층 (둔산동 1395)"
];
var telNum = [
    "TEL : 02-6954-0478(회생파산), 02-6954-0378(송무)",
    "TEL : 042-721-0608(회생파산), 042-721-0606(송무)"
];
var faxNum = [
    "FAX : 02-6954-0878",
    "FAX : 042-721-0707"
];
var loca_href = [
    "https://kko.kakao.com/QqooRtdtAR", // 서울
    "https://kko.kakao.com/YhF7gMz-Nn"  // 대전
];


$(document).on("click", ".office_tabs .tabs li", function () {
    var index = $(this).index();
    var id = $(this).attr('id');

    // 지도 이미지 처리
    // if ($("#pos_" + id).length) {
    //     $(".map_img").hide();
    //     $("#pos_" + id).show();
    // }

    // 다음 지도 처리
    if ($(".glory_map_" + index).length) {
        $(".root_daum_roughmap").hide();
        $(".glory_map_" + index).show();
    }

    // 정보 업데이트
    $("#loca_title, #loca_addr, #telNum, #faxNum").hide();

    $("#loca_title").html(loca_title[index]);
    $("#loca_addr").html(loca_addr[index]);
    $("#telNum").html(telNum[index]);
    $("#faxNum").html(faxNum[index]);
    $("#go_map").attr("href", loca_href[index]);

    $("#loca_title, #loca_addr, #telNum, #faxNum").fadeIn();

    // 활성화된 탭 스타일 변경
    $(".office_tabs .tabs li").removeClass("on");
    $(this).addClass("on");
});
