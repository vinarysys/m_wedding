// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {

     $('#lightgallery').lightGallery({
        selector: '.light-link',
        thumbnail: true,
        download: false,
    }); 

    //loadItemsInView();

    /*     preloading([
      "file:///C:/Users/shego/Desktop/m_wedding/weddinghall_sb_hj/src/images/section1.jpg",
        "file:///C:/Users/shego/Desktop/m_wedding/weddinghall_sb_hj/src/images/section2.jpg",
        "file:///C:/Users/shego/Desktop/m_wedding/weddinghall_sb_hj/src/images/section3.jpg",
        "file:///C:/Users/shego/Desktop/m_wedding/weddinghall_sb_hj/src/images/section4.jpg",
        "file:///C:/Users/shego/Desktop/m_wedding/weddinghall_sb_hj/src/images/section5.jpg",
        "file:///C:/Users/shego/Desktop/m_wedding/weddinghall_sb_hj/src/images/section6.jpg",
        "file:///C:/Users/shego/Desktop/m_wedding/weddinghall_sb_hj/src/images/section7.jpg",
        "file:///C:/Users/shego/Desktop/m_wedding/weddinghall_sb_hj/src/images/section8.jpg",
        "file:///C:/Users/shego/Desktop/m_wedding/weddinghall_sb_hj/src/images/section9.jpg",
        "https://vinarysys.github.io/m_wedding/src/images/section1.jpg",
        "https://vinarysys.github.io/m_wedding/src/images/section2.jpg",
        "https://vinarysys.github.io/m_wedding/src/images/section3.jpg",
        "https://vinarysys.github.io/m_wedding/src/images/section4.jpg",
        "https://vinarysys.github.io/m_wedding/src/images/section5.jpg",
        "https://vinarysys.github.io/m_wedding/src/images/section6.jpg",
        "https://vinarysys.github.io/m_wedding/src/images/section7.jpg",
        "https://vinarysys.github.io/m_wedding/src/images/section8.jpg",
        "https://vinarysys.github.io/m_wedding/src/images/section9.jpg",
    ]); */

    /* 상단바 없애기 */
	window.addEventListener("load", function() {
		setTimeout(scrollTo, 0, 0, 1);
	}, false);

    $('#parentsToggle').on('click', function () {
        let collapses = $('#parents-collapse'); 
        //collapse라는 자식을 찾아서 배열을 불러온다. 
        if(collapses.attr('class') === "collapse"){
            document.getElementById("toggleImg").style.transform = "rotate(180deg)";
        }else if(collapses.attr('class') === "collapse show"){
            document.getElementById("toggleImg").style.transform = "rotate(0deg)";
        }
    }); 

    $('#go-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });

    $("#shareSms").click(function (){
        const userAgent = navigator.userAgent.toLocaleLowerCase()
        if (userAgent.search('android') > -1) {
            location.href="sms:?body=승보 희정 결혼합니다. https://bit.ly/2THjQ9b"
        } else if (userAgent.search('iphone') > -1 || uagent.search('ipad') > -1) {
            location.href="sms:&body=승보 희정 결혼합니다. https://bit.ly/2THjQ9b"
        }
    })
      //<![CDATA[
      // // 사용할 앱의 JavaScript 키를 설정해 주세요.
      Kakao.init('76481e0ad142650d0f2d8ac18c01bb11');
      // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
      Kakao.Link.createDefaultButton({
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: $('meta[property="og:title"]').attr( 'content' ),
          description: $('meta[property="og:description"]').attr( 'content' ),
          imageUrl: $( 'meta[property="og:image"]' ).attr( 'content' ),
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href
          }
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              webUrl: window.location.href
            }
          }
        ]
      });
    //]]>
})
/* 
function preloading (imageArray) { 
    let n = imageArray.length; 
    for (let i = 0; i < n; i++) { 
        let img = new Image();
        img.src = imageArray[i]; 
    } 
} */


// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function (event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: target.offset().top
                },
                1000,
                function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                }
            );
        }
    }
});

let clipboard = new ClipboardJS('.clip_btn');
clipboard.on( 'success', function() {
    let tag = document.getElementById("alert-success")
    let alertNum = $("#alert-success").show();
    setTimeout(function (){
        alertNum.hide();
    },1500);
 } );

//  function isElementInViewport(el) {
//     if (!el)
//       return false;
//     var rect = el.getBoundingClientRect();
//     rect.top >=0
//     console.log(rect.top >= 0)
//     rect.left >= 0
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth);
//     return true;
//   }

//   function loadItemsInView() {
//     //Select elements by the row id.
//     $("#lightgallery [data-src]").each(function () {
//         var isVisible = isElementInViewport(this);
//         if (isVisible) {
//             if ($(this).attr("src") == undefined) {
//                 $(this).attr("src", $(this).data("src"));
//             }
//         }
//     });
//   }