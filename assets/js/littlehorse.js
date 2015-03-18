/* wechat share */
var wechatShare = function (layer) {
  'user strict';

  if (!layer) return;

  var isWechatBrowser = /micromessenger/i.test(navigator.userAgent);

  var show = function () {
    if (isWechatBrowser) {
      layer.style.display = 'block';
    }
  };

  var hide = function () {
    if (isWechatBrowser) {
      layer.style.display = 'none';
    }
  };

  var mute = function (event) {
    event.preventDefault();
    event.stopPropagation();
  };

  layer.addEventListener('touchstart', mute);
  layer.addEventListener('touchmove', mute);
  layer.addEventListener('touchend', hide);
  layer.addEventListener('click', hide);

  return {
    isWechatBrowser: isWechatBrowser,
    show: show,
    hide: hide,
  };
};

var fn = function () {
  var $buttons = $('section.share > a'),
  $button = $('section.share .fa-wechat').parent().hide(),
  $layer = $('section.share div#wechat-share-layer'),
  wshare = wechatShare($layer[0]);

  if (wshare && wshare.isWechatBrowser) {
    $buttons.toggle();
  }

  if (wshare && $button[0]) {
    $button.on('click', function (event) {
      wshare.show();
      event.preventDefault();
    });
  }
}

$(function () {
  fn();
});
