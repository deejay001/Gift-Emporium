(function($) {
    "use strict";

    /*--------------------------
    2. Newsletter Popup
    ---------------------------*/
    setTimeout(function() {
        $('.popup-wrapper-area').css({
            "opacity": "1",
            "visibility": "visible"
        });
        $('.popup-off').on('click', function() {
            $(".popup-wrapper-area").fadeOut(500);
        })
    }, 1000);


    /*====== sidebarSearch ======*/
    function sidebarSearch() {
        var searchTrigger = $('.search-active'),
            endTriggersearch = $('.search-close'),
            container = $('.main-search-active');
        searchTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('search-visible');
        });
        endTriggersearch.on('click', function() {
            container.removeClass('search-visible');
        });
    };
    sidebarSearch();


    /*====== sidebarCart ======*/
    function miniCart() {
        var navbarTrigger = $('.cart-active'),
            endTrigger = $('.cart-close'),
            container = $('.sidebar-cart-active'),
            wrapper2 = $('.main-wrapper');
        
        wrapper2.prepend('<div class="body-overlay"></div>');
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper2.addClass('overlay-active');
        });
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper2.removeClass('overlay-active');
        });
        $('.body-overlay').on('click', function() {
            container.removeClass('inside');
            wrapper2.removeClass('overlay-active');
        });
    };
    miniCart();
    
    /*====== headerLogin ======*/
    function headerLogin() {
        var navbarTrigger = $('.login-button-active'),
            endTrigger = $('.login-close'),
            container = $('.login-wrap-active'),
            wrapper = $('.main-wrapper-3');
        wrapper.prepend('<div class="body-overlay-3"></div>');
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper.addClass('overlay-active-3');
        });
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active-3');
        });
        $('.body-overlay-3').on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active-3');
        });
    };
    headerLogin();
    
    
    /* Category slider active */
    $('.category-slider-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 3,
        margin: 80,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
                margin: 30,
            },
            768: {
                items: 2,
                margin: 30,
            },
            992: {
                items: 3,
                margin: 30
            },
            1200: {
                items: 3
            }
        }
    })

    /* Category slider active 2 */
    $('.category-slider-active-2').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 3,
        margin: 70,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
                margin: 30,
            },
            768: {
                items: 2,
                margin: 30
            },
            992: {
                items: 3,
                margin: 30
            },
            1200: {
                items: 3
            }
        }
    })
    
    
    /* Banner slider active */
    $('.banner-slider-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 2,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
                margin: 20,
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    })
    
    
    /* product slider active */
    $('.product-slider-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 3,
        margin: 70,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
                margin: 30,
            },
            768: {
                items: 2
            },
            992: {
                items: 3,
                margin: 30
            },
            1200: {
                items: 3
            }
        }
    })
    /* product slider active 2 */
    $('.product-slider-active-2').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
    
    /* quickview slider active */
    $('.quickview-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class=" ti-arrow-left"></i>', '<i class=" ti-arrow-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1,
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    /* related post active */
    $('.related-post-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1,
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
    
    /* shop classic slider active */
    $('.shop-classic-slider').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1,
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    /* related slider active */
    $('.related-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 4,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
    
    /* Testimonial active */
    $('.testimonial-active , .testimonial-active-2').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1,
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    /* popular collection active */
    $('.popular-collection-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 3,
        margin: 80,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
                margin: 30
            },
            768: {
                items: 2,
                margin: 50
            },
            992: {
                items: 3,
                margin: 30
            },
            1366: {
                items: 3,
                margin: 80
            }
        }
    })


    /*--
        featured slider active
    -----------------------------------*/
    $('.featured-slider-active').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        fade: false,
        arrows: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    /*--
        collection slider active
    -----------------------------------*/
    $('.collection-slider-active').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        fade: false,
        arrows: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    // instafeed active
    var activeId = $("#instafeed"),
        myTemplate = '<div class="instagram-item"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a><div class="instagram-hvr-content"><span class="totalcomments"><i class="fa fa-comment"></i>{{comments}}</span><span class="tottallikes"><i class="fa fa-heart"></i>{{likes}}</span></div></div>';

    if (activeId.length) {
        var userID = activeId.attr('data-userid'),
            accessTokenID = activeId.attr('data-accesstoken'),

            userFeed = new Instafeed({
                get: 'user',
                userId: userID,
                accessToken: accessTokenID,
                resolution: 'standard_resolution',
                template: myTemplate,
                sortBy: 'least-recent',
                limit: 4,
                links: false
            });
        userFeed.run();
    }

    /*--------------------------
        Instagram
    ---------------------------- */
    if ($('#Instafeed2').length) {
        var feed = new Instafeed({
            get: 'user',
            userId: 6665768655,
            accessToken: '6665768655.1677ed0.313e6c96807c45d8900b4f680650dee5',
            target: 'Instafeed2',
            resolution: 'thumbnail',
            limit: 5,
            template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>',
        });
        feed.run();
    }

    /*--------------------------
        Instagram
    ---------------------------- */
    if ($('#Instafeed3').length) {
        var feed = new Instafeed({
            get: 'user',
            userId: 6665768655,
            accessToken: '6665768655.1677ed0.313e6c96807c45d8900b4f680650dee5',
            target: 'Instafeed3',
            resolution: 'thumbnail',
            limit: 8,
            template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a><div class="instagram-plus"><a href="{{link}}" target="_new"><img src="assets/images/icon-img/e-add.png" alt="icon"></a></div></li>',
        });
        feed.run();
    }



    /* view demo active */
    var moreDemo = $('.view-demo-btn-active');
    moreDemo.on('click', function(e) {
        e.preventDefault();
        $('.view-demo-area').toggleClass('demo-visible');
    })


    /*====== mobile off canvas active ======*/
    function headermobileAside() {
        var navbarTrigger = $('.mobile-aside-button'),
            endTrigger = $('.mobile-aside-close'),
            container = $('.mobile-off-canvas-active'),
            wrapper = $('.main-wrapper-2');
        wrapper.prepend('<div class="body-overlay-2"></div>');
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper.addClass('overlay-active-2');
        });
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active-2');
        });
        $('.body-overlay-2').on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active-2');
        });
    };
    headermobileAside();


    /*---------------------
        mobile-menu
    --------------------- */
    var $offCanvasNav = $('.mobile-menu , .sidebar-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });


    /*--- language currency active ----*/
    $('.mobile-language-active').on('click', function(e) {
        e.preventDefault();
        $('.lang-dropdown-active').slideToggle(900);
    });
    $('.mobile-currency-active').on('click', function(e) {
        e.preventDefault();
        $('.curr-dropdown-active').slideToggle(900);
    });
    $('.mobile-account-active').on('click', function(e) {
        e.preventDefault();
        $('.account-dropdown-active').slideToggle(900);
    });


    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    
    /*====== quickinfo active ======*/
    function quickInfo() {
        var searchTrigger = $('.quickinfo-button-active , .clickalbe-menu4-active'),
            endTriggersearch = $('.quickinfo-close , .menu4-close'),
            container = $('.quickinfo-wrapper-active , .clickalbe-menu4-wrapper-active');
        searchTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('quickinfo-visible , .menu4-visible');
        });
        endTriggersearch.on('click', function() {
            container.removeClass('quickinfo-visible , .menu4-visible');
        });

    };
    quickInfo();
    
    
    /*--
        main product slider active
    -----------------------------------*/
    $('.main-product-slider-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: false,
        prevArrow: '<span class="pro-slider-icon pro-slider-prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon pro-slider-next"><i class="fa fa-angle-right"></i></span>',
        responsive: [{
                breakpoint: 767,
                settings: {

                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--
        pro details silder2 active
    -----------------------------------*/
    $('.pro-details-silder2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        fade: false,
        prevArrow: '<span class="pro-dec-icon2 pro-dec-prev2"><i class="fa fa-caret-left"></i></span>',
        nextArrow: '<span class="pro-dec-icon2 pro-dec-next2"><i class="fa fa-caret-right"></i></span>',
        responsive: [{
                breakpoint: 767,
                settings: {
                    autoplay: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    autoplay: false,
                    slidesToShow: 1,
                }
            }
        ]
    });


    // paraxify active
    var parallaxActive = '.parallax-active',
        myParaxify;
    if (parallaxActive.length) {
        myParaxify = paraxify(parallaxActive, {
            speed: 1,
            boost: 1,
        });
    }

    /*--------------------------
        ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class=" ti-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    /*====== clickableMainmenu active ======*/
    function clickableMainmenu() {
        var searchTrigger = $('.clickable-mainmenu-button'),
            endTriggersearch = $('.mainmenu-close'),
            container = $('.clickable-mainmenu-active');

        searchTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('mainmenu-visible');
        });

        endTriggersearch.on('click', function() {
            container.removeClass('mainmenu-visible');
        });

    };
    clickableMainmenu();


    var $clickableMainMenu = $('.clickable-mainmenu-wrap'),
        $clickableSubMenu = $clickableMainMenu.find('.sub-menu'),
        $clickableSubMenu2 = $clickableMainMenu.find('.sub-menu-2');

    /*Add Toggle Button in Off Canvas Sub Menu*/
    $clickableSubMenu.siblings('a').append('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
    $clickableSubMenu2.siblings('a').append('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');

    /*Close Off Canvas Sub Menu*/
    $clickableSubMenu.find('.sub-menu').slideUp();
    $clickableSubMenu2.slideUp();

    /*Category Sub Menu Toggle*/
    $clickableMainMenu.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ($this.parent('li').hasClass('has-sub-menu') || ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active').children('ul').slideUp().siblings('a').find('.menu-expand i').removeClass('fa-angle-up').addClass('fa-angle-down');
                $this.parent('li').siblings('li').removeClass('active').find('ul:visible').slideUp().siblings('a').find('.menu-expand i').removeClass('fa-angle-up').addClass('fa-angle-down');
            } else {
                $this.parent('li').addClass('active').children('ul').slideDown().siblings('a').find('.menu-expand i').removeClass('fa-angle-down').addClass('fa-angle-up');
                $this.parent('li').siblings('li').removeClass('active').find('ul:visible').slideUp().siblings('a').find('.menu-expand i').removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        }
    });


    /*---------------------
        Countdown
      --------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown day"> <span>%-D </span><p>Days</p></span> <span class="cdown hour"> <span> %-H</span> <p>Hours</p></span> <span class="cdown minutes"><span>%M</span> <p>Mins</p></span class="cdown second"> <span> <span>%S</span> <p>Secs</p></span>'));
        });
    });


    /*---------------------
        Video popup
    --------------------- */
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });

    /*--
    Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*------------------------
        Home 6 menu active
    ------------------------------ */
    function clickMenu() {
        var trigger = $('.menu-active-5'),
            container = $('.menu-active-5'),
            container2 = $('.clickalbe-menu5-active');
        trigger.on('click', function(e) {
            e.preventDefault();
            container.toggleClass('open');
            container2.toggleClass('open');
        })
    }
    clickMenu();

    // Home 7 menu active
    function clickMenu2() {
        var trigger = $('.menu-active-6'),
            container = $('.menu-active-6'),
            container2 = $('.clickalbe-menu6-active');
        trigger.on('click', function(e) {
            e.preventDefault();
            container.toggleClass('open');
            container2.toggleClass('open');
            $('body').toggleClass('body-menu-overlay');
        })
    }
    clickMenu2();
    $('body').on('click', function(e) {
        var $target = e.target;

        // Mobile Menu Close
        if (!$($target).is('.header-sidebar-wrap-all, .clickalbe-menu6-active') && !$($target).parents().is('.header-sidebar-wrap-all, .clickalbe-menu6-active')) {
            $('.menu-active-6').removeClass('open');
            $('.clickalbe-menu6-active').removeClass('open');
            $('body').removeClass('body-menu-overlay');
        }
    });
    
    /*-----------------------
        Shop filter active 
    ------------------------- */
    $('.shop-filter-active , .filter-close').on('click', function(e) {
        e.preventDefault();
        $('.product-filter-wrapper').slideToggle();
    })
    
    var shopFiltericon = $('.shop-filter-active , .filter-close');
    shopFiltericon.on('click', function() {
        $('.shop-filter-active').toggleClass('active');
    })
    
    
    /*---------------------
        Price slider
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function() {
        sliderrange.slider({
            range: true,
            min: 16,
            max: 400,
            values: [0, 300],
            slide: function(event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });


    // isotope active
    $('.grid').imagesLoaded(function() {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });
    
    // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom();
    
    /*--
    quick view Slick Carousel
    -----------------------------------*/
    $('.pro-dec-big-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: false,
        asNavFor: '.product-dec-slider',
    });

    /*--
        product details slider active
    -----------------------------------*/
    $('.product-dec-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        focusOnSelect: true,
        fade: false,
        prevArrow: '<span class="pro-dec-icon pro-dec-prev"><i class="fa fa-angle-up"></i></span>',
        nextArrow: '<span class="pro-dec-icon pro-dec-next"><i class="fa fa-angle-down"></i></span>',
        responsive: [{
                breakpoint: 767,
                settings: {

                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: true,
                    slidesToShow: 2,
                }
            }
        ]
    });
    
    /*---------------------
        Sidebar sticky active
    --------------------- */
    $('.sidebar-active').stickySidebar({
        topSpacing: 80,
        bottomSpacing: 30,
        minWidth: 991,
    });
    /*--------------------------
        Sidebar sticky active 2
    ------------------------------- */
    $('.sidebar-active2').stickySidebar({
        topSpacing: 150,
        bottomSpacing: 0,
        minWidth: 991,
    });

    /*--- showlogin toggle function ----*/
    $('.checkout-click').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info').slideToggle(1000);
    });
    
    /* Tilt active */
    $('.tilt-active').tilt({
        maxTilt: 10,
        perspective: 1000,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        speed: 1200,
        glare: true,
        maxGlare: 0.4,
        scale: 1
    });
    
    /*---------------------
        select active
    --------------------- */
    $('.select-active').select2();




})(jQuery);