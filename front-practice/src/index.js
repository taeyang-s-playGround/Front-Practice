/* global $ */

// jQuery DOM Ready
$(function () {
  const $root = $('#root');
  if ($root.length === 0) return;

  $root.empty().append(`
    <div class="container">
      <div class="wrapper">
        <h1 class="title">안녕하세요</h1>
        <p class="desc">jQuery와 Pretendard로 구성한 페이지입니다.</p>
        <p class="desc">Container, Wrapper 구조를 사용했습니다.</p>
        <p class="desc">React 없이 jQuery만으로 동작합니다.</p>
      </div>
    </div>
  `);
});