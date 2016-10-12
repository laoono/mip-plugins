/**
 * @author: laoono
 * @date:  2016-09-01
 * @time: 15:35
 * @file: mip-fh-extra.js
 * @contact: laoono.com
 * @description: #
 */

define('mip-fh-extra', ['require', 'customElement', 'zepto'], function (require) {

    var $ = require('zepto');

    var customElem = require('customElement').create();
    // 初始化UC加载广告判断
    var ucInit = function (ele) {
        var navigator = window.navigator;
        var uaStr = navigator.userAgent.toLowerCase();
        var isUc = uaStr.indexOf('ucbrowser') > -1;
        var $ele = $(ele);
        var script = '';

        // 加载第三方广告代码
        if (isUc) {
            script = ['<script src="http://new.yokaunion.com/s.php?id=1039"><\/script>', '</script>'];
            document.writeln(script.join(''));
        }
        // 加载百度网盟代码
        else {
            var json = {
                at: '3',
                hn: '1',
                wn: '2',
                imgRatio: '1.7',
                scale: '20.6',
                pat: '6',
                tn: 'template_inlay_all_mobile_lu_native',
                rss1: '#FFFFFF',
                adp: '1',
                ptt: '0',
                titFF: '%E5%BE%AE%E8%BD%AF%E9%9B%85%E9%BB%91',
                titFS: '14',
                rss2: '#000000',
                titSU: '0',
                ptbg: '70',
                ptp: '0'
            };
            script = ['<mip-ad type="ad-baidu" cproid="u2613690">', '<script type="application/json">'];
            script.push(JSON.stringify(json));
            script.push(['</script>', '</mip-ad>'].join(''));
            $ele.append(script.join(''));
        }
    };

    // build 方法，元素插入到文档时执行，仅会执行一次
    customElem.prototype.build = function () {
        // this.element 可取到当前实例对应的 dom 元素
        var ele = this.element;
        ucInit(ele);
    };

    return customElem;
});

require(['mip-fh-extra'], function (plugindemo) {
    // 注册mip-fh-extra组件
    MIP.registerMipElement('mip-fh-extra', plugindemo);
});
