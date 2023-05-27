if (window.helpxTools && window.helpxTools.analytics) {
    window.helpxTools.analytics.onReady(function() {
        var subNavMenuLabels = document.querySelectorAll("a.Subnav-menu-label");
        var subNavSubMenuLinks = document.querySelectorAll("a.Subnav-submenu-link");
        var subNavMenuButtons = document.querySelectorAll("a.Subnav-menu-button");
        if (document.querySelector(".Subnav-menu")) {
            document.querySelector(".Subnav-menu").addEventListener("click", function(e) {
                e.stopImmediatePropagation();
                var linkPosition = 0;
                var linkUrl = "";
                var targetClass = e.target.getAttribute("class");
                if (targetClass === "Subnav-menu-label") {
                    for (var l = 0; l < subNavMenuLabels.length; l++) {
                        if (e.target.innerText.trim() === subNavMenuLabels[l].title) {
                            linkPosition = l + 1;
                            linkUrl = subNavMenuLabels[l].href
                        }
                    }
                }
                if (targetClass === "Subnav-submenu-title" || targetClass === "Subnav-submenu-item" || targetClass === "Subnav-submenu-link") {
                    var subLinkPosition = 0;
                    for (var i = 0; i < subNavMenuLabels.length; i++) {
                        if (subNavMenuLabels[i].getAttribute("aria-expanded") === "true") {
                            linkPosition = i + 1
                        }
                    }
                    for (var j = 0; j < subNavSubMenuLinks.length; j++) {
                        if (e.target.innerText.trim() === subNavSubMenuLinks[j].innerText.trim()) {
                            subLinkPosition = j + 1;
                            linkUrl = subNavSubMenuLinks[j].href
                        }
                    }
                    linkPosition = linkPosition + "." + subLinkPosition
                }
                digitalData._set("digitalData.primaryEvent.eventInfo.eventName", "Helpx:" + e.target.innerText.trim());
                digitalData._set("digitalData.primaryEvent.eventInfo.eventAction", "subNavClick");
                digitalData._set("digitalData.linkTracking.linkInfo.sectionHeading", "menu");
                digitalData._set("digitalData.linkTracking.linkInfo.linkPosition", linkPosition);
                digitalData._set("digitalData.linkTracking.linkInfo.linkUrl", linkUrl);
                digitalData._set("digitalData.linkTracking.linkInfo.linkAction", "newPage");
                digitalData._set("digitalData.linkTracking.linkInfo.placeHolder", "header");
                if (typeof _satellite === "undefined")
                    return;
                _satellite.track("event", {
                    digitalData: digitalData._snapshot()
                })
            })
        }
        if (document.querySelector(".Subnav-menu-buttons")) {
            document.querySelector(".Subnav-menu-buttons").addEventListener("click", function(e) {
                e.stopImmediatePropagation();
                var linkPosition = "";
                var linkUrl = "";
                for (var k = 0; k < subNavMenuButtons.length; k++) {
                    if (e.target.innerText.trim() === subNavMenuButtons[k].title) {
                        linkPosition = subNavMenuLabels.length + k + 1;
                        linkUrl = subNavMenuButtons[k].href
                    }
                }
                digitalData._set("digitalData.primaryEvent.eventInfo.eventName", "Helpx:" + e.target.innerText);
                digitalData._set("digitalData.primaryEvent.eventInfo.eventAction", "subNavClick");
                digitalData._set("digitalData.linkTracking.linkInfo.sectionHeading", "menu");
                digitalData._set("digitalData.linkTracking.linkInfo.linkPosition", linkPosition);
                digitalData._set("digitalData.linkTracking.linkInfo.linkUrl", linkUrl);
                digitalData._set("digitalData.linkTracking.linkInfo.linkAction", "newPage");
                digitalData._set("digitalData.linkTracking.linkInfo.placeHolder", "header");
                if (typeof _satellite === "undefined")
                    return;
                _satellite.track("event", {
                    digitalData: digitalData._snapshot()
                })
            })
        }
    })
}