load('api_gpio.js');
load('api_timer.js');

let led = 21;

GPIO.set_mode(led, GPIO.MODE_OUTPUT);
Timer.set(1000, true, function() {
print("Toggling LED");
let value = GPIO.toggle(led);
}, null); 