function SideMenu(options) {
    this.init(options);
    this.initEvent();
}

SideMenu.prototype = {
    
    //구조정의
    init: function (opt) {
        this.$sideMenu = $(opt.selector);
        this.$showBtn = $(opt.showBtnSelector);
        this.$hideBtn = this.$sideMenu.find('.close_btn');
        this.$list = this.$sideMenu.find('.main_menu > li > a');
        this.$dimming = $(opt.shadowSelector);
        this.duration = 500;
    },
    
    // 초기 함수들 모음
    initEvent : function () {
        this.clickHandler();
    },
    
    showMenu: function () {
        this.$sideMenu.stop().animate( {
            left: 0
        }, this.duration);
        this.$dimming.stop().fadeIn(this.duration);
    },
    
    hideMenu: function () {
        this.$sideMenu.stop().animate( {
            left: -500
        }, this.duration);
        this.$dimming.stop().fadeOut(this.duration);
    },
    
    // 메뉴들이 열리고 닫히는 기능
    toggleList: function ($this) {
        $('.sub_menu').not($this.siblings('.sub_menu')).stop(false, true).slideUp(500);
        $this.siblings('.sub_menu').stop(false, true).slideDown(500);
    },
    
    clickHandler: function () {

        var _this = this;

        this.$showBtn.on('click', function () {
            _this.showMenu();
        });
        this.$hideBtn.on('click', function () {
            _this.hideMenu();
        });
        this.$list.on('click', function () {
            _this.toggleList($(this));
        });
    }
}