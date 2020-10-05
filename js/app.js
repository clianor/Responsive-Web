(function () {
  // 라이트 박스
  $(".lightbox").lightGallery();

  // 이미지 슬라이더
  $(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          autoplay: false,
        },
      },
    ],
  });

  // sns 공유하기
  $(".facebook").click(function (e) {
    e.preventDefault();
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(document.URL) +
        "&t=" +
        encodeURIComponent(document.title),
      "facebooksharedialog",
      "menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600"
    );
  });

  $(".twitter").click(function (e) {
    e.preventDefault();
    window.open(
      "https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20" +
        encodeURIComponent(document.URL) +
        "%20-%20" +
        encodeURIComponent(document.title),
      "twittersharedialog",
      "menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600"
    );
  });
})();
