# SIDE MENU

자바스트립트 플러그인 입니다.
LESS 환경에서 구동됩니다.
마음껏 활용하세요.

![사이드메뉴](http://www.herop.me/images/sidemenu.jpg)

### Options

- `selector` 사이드 메뉴의 선택자
- `showBtnSelector` 사이드 메뉴 활성화 버튼 활성자
- 'shadowSelector' 사이드 메뉴 활성화 배경

```js
 var sideMenu = new SideMenu({
        selector: '.side_menu',
        showBtnSelector: '.side_menu_btn',
        shadowSelector:'.side_shadow'
    });
```

### HTML

```html
<div class="hell">H!~</div>
```

### CSS

```css
.ele {
    width: 100px;
    postion: releative;
    background: url("img/image.jpg");
}
```