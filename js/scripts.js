$('.owl-carousel').owlCarousel({
    items: 3,
    itemcustom: false,
    loop: true,
    margin: 8,
    nav: true,
    responsive: {
        300: {
            items: 1
        },
        795: {
            items: 1
        },
        796: {
            items: 3
        },
        1920: {
            items: 3
        },
        2560: {
            items: 3
        }
    }
})

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})

var scrolled;
window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 54) {
        $(".navigation").css({ "background-color": "#000" })
    }
    if (54 > scrolled) {
        $(".navigation").css({ "background-color": "rgba(0, 0, 0, 0.7)" })
    }

}

function getFileName() {

    var file = document.getElementById('uploaded-file').value;

    file = file.replace(/\\/g, "/").split("/").pop();

    document.getElementById("file-name").innerHTML = 'Имя файла: ' + file;

}

$(document).ready(function () {

    $('.nav-trigger').click(function () {
        $('.nav').toggleClass('open');
        $(this).toggleClass('open');
        return false;
    });

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
        $('.sidebar').removeClass('sidebar-active');
        $('.main').removeClass('main-active');
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top - 0;
        $('body, html').animate({ scrollTop: bl_top }, 700);
        return false;
    });


    $('#career-file').change(function () {
        if (this.files[0]) {// если выбрали файл
            $('.load-resumefile').text(this.files[0].name).css('display', 'block');
            $('.send-resume').css('display', 'block');
            $('.load-resume').css('display', 'none');
        }
    });
});

/*tabs */

let tab = function () {
    let tabNav = document.querySelectorAll('.vacansy__nav-item'),
        tabContent = document.querySelectorAll('.vacansy__item'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('current');
        });
        this.classList.add('current');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('current') : item.classList.remove('current');
        })
    }

};

tab();

/*open/close vacancy wrapper on mobil */

var tabMenu = document.querySelectorAll('.vacansy__nav-item'),
    tabWrap = document.querySelector('.vacansy__wrapper'),
    tabClose = document.querySelectorAll('.vacansy__close'),
    root = document.documentElement;



if (window.matchMedia("screen and (min-width: 1px) and (max-width:780px)").matches) {
    tabMenu.forEach(function (i) {
        i.onclick = function () {
            tabWrap.classList.add('shown');
            root.classList.add('overflow');
        };
    });
    tabClose.forEach(function (i) {
        i.onclick = function () {
            tabWrap.classList.remove('shown');
            root.classList.remove('overflow');
        }
    });
}



jQuery(window).resize(function () {
    tabWrap.classList.remove('shown');
    root.classList.remove('overflow');
    if (window.matchMedia("screen and (min-width: 1px) and (max-width:780px)").matches) {
        tabMenu.forEach(function (i) {
            i.onclick = function () {
                tabWrap.classList.add('shown');
                root.classList.add('overflow');
            };
        });
        tabClose.forEach(function (i) {
            i.onclick = function () {
                tabWrap.classList.remove('shown');
                root.classList.remove('overflow');
            }
        });
    }
});

$("form").validate();

$(document).ready(function () {
    /* menu */
    $('.menu-trigger').click(function () {
        $('.sidebar').toggleClass('sidebar-active');
        $('.main').toggleClass('main-active');
    });
    if (window.innerWidth <= 1200) {
        $('.sidebar').removeClass('sidebar-active');
        $('.main').removeClass('main-active');
    }
});



$("#vacansy-form--mob").validate({
    submitHandler: function (form) {
        $(document).ready(function () {
            $(".button--send").click(function () {
                $(".modal").toggleClass('modal__open');
            });
        });

        $(document).ready(function () {
            $(".btn--modal").click(function () {
                $(".modal").removeClass('modal__open');
            });
        });
        $(form).submit();
    }
});


$("#vacansy-form").validate({
    submitHandler: function (form) {
        $(document).ready(function () {
            $(".button--send").click(function () {
                $(".modal").toggleClass('modal__open');
            });
        });

        $(document).ready(function () {
            $(".btn--modal").click(function () {
                $(".modal").removeClass('modal__open');
            });
        });
        $(form).submit();
    }
});

$(document).ready(function(e) {
    $('.customPrevBtn,.customNextBtn').click(function(){
      $('.customPrevBtn,.customNextBtn').removeClass('active--buttonSlider');
      $(this).addClass('active--buttonSlider');
      return false;
    })
  });




