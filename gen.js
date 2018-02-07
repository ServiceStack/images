//Usage: node gen.js > static.js

const fs = require("fs");

var tpl = `(function(){
    var root = this;

    var IMGS = [IMGS];
    var baseUrl = "https://servicestack.github.io/images/";
    var daysCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    function dayOfYear(d) {
        return daysCount[d.getMonth()] + d.getDate();
    };
    function hourOfYear(d) {
        return dayOfYear(d) * 24 + d.getHours();
    }
    function hashCode(s){
        if (!s)
            return 0;
        if (typeof s != 'string')
            s = s.toString();
        var hash = 0;
        for (var i = 0; i < s.length; i++) {
            var c = s.charCodeAt(i);
            hash = ((hash<<5)-hash)+c;
            hash = hash & hash;
        }
        return Math.abs(hash);
    }
    function get(i) {
        return baseUrl + "hero/" + IMGS[i % IMGS.length];
    }
    var heroes = {
        baseUrl: baseUrl,
        images: IMGS,
        get: get,
        random: function() {
            return get(Math.floor(Math.random() * IMGS.length));
        },
        daily: function(d, modifier) {
            return get(dayOfYear(d || new Date()) + (modifier || 0));
        },
        hourly: function(d, modifier) {
            return get(hourOfYear(d || new Date()) + (modifier || 0));
        },
        static: function(str, modifier) {
            return get(hashCode(str) + (modifier || 0));
        }
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = heroes;
        }
        exports = heroes;
    } else {
        root.heroes = heroes;
    }
})();`

var IMGS = "[";

const items = fs.readdirSync("hero");

for (var i=0; i<items.length; i++) {
    if (items[i].endsWith(".js"))
        continue;

    if (i > 0)
    IMGS += ',\n';

    IMGS += `"${items[i]}"`;
}

IMGS += "]";

var js = tpl.replace("[IMGS]", IMGS);

fs.writeFileSync("heroes.js", js);
