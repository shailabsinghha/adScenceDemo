function() {
    var aa = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        };