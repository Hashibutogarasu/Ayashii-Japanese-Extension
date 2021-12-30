// sidebar.js
browser.windows.getCurrent({populate: true}).then((windowInfo) => {
    var myWindowId = windowInfo.id;
});