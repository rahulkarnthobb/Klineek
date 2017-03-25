var sinchClient ,callClient, call;
$(function () {
    sinchClient = new SinchClient({
        applicationKey: '01a4067e-4e9b-41e5-9657-254cdc104972',
        capabilities: { calling: true, video: true },
        supportActiveConnection: true,
        onLogMessage: function (message) {
            console.log(message.message);
        }
    });
});