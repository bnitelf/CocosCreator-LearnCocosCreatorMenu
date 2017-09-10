cc.Class({
    extends: cc.Component,
    
    properties: {

    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
    },
    
    onClickButton: function(event, customEventData) {
        cc.log("onClickButton call");
        cc.log("customEventData: ", customEventData);
        
        var label = this.getComponent(cc.Label);
        
        cc.log("label.string: ", label.string);
        label.string = "CustomEventData = " + customEventData;
        cc.log("label.string: ", label.string);
    }
});
