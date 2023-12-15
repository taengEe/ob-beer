const header = document.querySelector('header');
        const hover_logo = new Image();
        const logo = document.querySelector('.logo');

        AOS.init();
        new fullpage('#full-page', {
            licenseKey: '',
            navigation: true,
            navigationTooltips: ['Home', 'Brand', 'ESG', 'NEWS'],
            scrollingSpeed: 1000,
            
        });
        hover_logo.src = './imgs/nav/ob-logo-hover.png';
        $('.nav-link').on('mouseover', function(){
            $('.nav-category').slideDown(300);
            $('.logo').attr('src', './imgs/nav/ob-logo-hover.png');
            $('.nav-link').css('color', '#333');
            $('header').css('border-bottom', 'none');
            setTimeout(function() {
                $('.nav-list').css('overflow', 'visible');
            }, 200);
        })
        $('header').on('mouseleave', function(){
            $('.nav-category').slideUp(300);
            $('.logo').attr('src', './imgs/nav/ob-logo-none-hover.png');
            $('.nav-link').css('color', '#fff');
            $('header').css('border-bottom', '1px solid rgba(255,255,255,.5)');
            $('.nav-list').css('overflow', 'hidden');
            $('.nav-depth li').removeClass('selected');
        })
        $('.nav-depth li').on('mouseover', function(){
            $('.nav-depth li').removeClass('selected');
            $(this).addClass('selected');
        })
        $('#news-prev-btn').css('overflow', 'visible');
        $('#news-next-btn').css('overflow', 'visible');
        $('.news-slide').on('mouseover', function(){
            $('.news-slide').removeClass('selected-news');
            $(this).addClass('selected-news');
        })
        $('.news-slide').on('mouseleave', function(){
            $('.news-slide').removeClass('selected-news');
            
        })