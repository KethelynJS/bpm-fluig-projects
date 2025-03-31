function beforeProcessing(form){
    var currentActivity = getValue("WKNumState");
    var nextActivity = getValue("WKNextState");

    log.info("beforeProcessing - currentActivity: " + currentActivity + ", nextActivity: " + nextActivity);

    if (currentActivity == 5 && nextActivity == 4) {
        log.info("Setting taskReturned to true");
        hAPI.setCardValue("taskReturned", "true");
    } else {
        log.info("Setting taskReturned to false");
        hAPI.setCardValue("taskReturned", "false");
    }
}

function beforeProcessing2(form){
    var currentActivity = getValue("WKNumState");
    var nextActivity = getValue("WKNextState");

    log.info("beforeProcessing - currentActivity: " + currentActivity + ", nextActivity: " + nextActivity);

    if (currentActivity == 15 && nextActivity == 12) {
        log.info("Setting taskReturned to true");
        hAPI.setCardValue("taskReturned", "true");
    } else {
        log.info("Setting taskReturned to false");
        hAPI.setCardValue("taskReturned", "false");
    }
}