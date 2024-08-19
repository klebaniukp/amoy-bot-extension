// Empty, but needed for background process


// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
//       if (request.greeting == "hello")
//         sendResponse({farewell: "goodbye"});
//     }
// );

// console.log("co jest kurwa")

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    console.log("Received %o from %o, frame", msg, sender.tab, sender.frameId);
    sendResponse("Gotcha!");
});