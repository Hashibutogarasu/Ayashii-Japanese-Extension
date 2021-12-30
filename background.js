browser.contextMenus.create({
    id: "generatecjp",
    title: "选択レだ亍キヌ卜カら怪レい日本语を生成",
    contexts: ["all"],
});
browser.contextMenus.create({
    id: "closesidebarcjp",
    title: "怪レいサ亻ド八\"ーを闭じゑ",
    contexts: ["all"],
});

browser.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "generatecjp") {
        
        browser.sidebarAction.open()

        var translatedtext = generate(info.selectionText);
        var outputtext = document.getElementById("outputtext");
        outputtext.innerText = translatedtext;
    }
    else if(info.menuItemId === "closesidebarcjp"){
        browser.sidebarAction.close()
    }
});
