var app = {
    // Application Constructor
    state: 0,
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        var p = this;
        document.getElementById("torch").addEventListener("click", function() {
            window.plugins.flashlight.toggle();
            // Changes the state of the button
            // Doesn't work as intended though . due to 'this'
            var change = function() {
                if (p.state === 1) {
                    p.state = 0;
                    $("#torch").removeClass("red darken-1");
                    return "Switch On";
                } else {
                    p.state = 1;
                    $("#torch").addClass("red darken-1");
                    return "Switch Off";
                }
            };
            document.getElementById("torch").innerHTML = change();
        });
        document.addEventListener("backbutton", function() {
            // pass exitApp as callbacks to the switchOff method
            var exit = function() {
                navigator.app.exitApp();
            }
            window.plugins.flashlight.switchOff(exit, exit);
        }, false);
    },

    receivedEvent: function(id) {
        console.log(id);
    }
};

app.initialize();
