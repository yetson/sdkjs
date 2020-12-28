/*
 * (c) Copyright Ascensio System SIA 2010-2019
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at 20A-12 Ernesta Birznieka-Upisha
 * street, Riga, Latvia, EU, LV-1050.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
 */

"use strict";
(/**
 * @param {Window} window
 * @param {undefined} undefined
 */
	function(window, undefined) {
		function openApp(protocol, params, onSuccess, onError, timeoutMs)
		{	
			function removeEventListenersInChromeCheck(eventHandler) {
				for(var key in window){
					if(/^on(blur|key|mouse|touch|wheel)/.test(key)) {
						window.removeEventListener(key.slice(2), eventHandler);
					}
				}
			}
			function eventHandlerInChromeCheck(event) {
				console.log(event.type);
				if (event.type === "blur") {
					clearTimeout(timeout);
					onSuccess();
					console.log("blur success");
					removeEventListenersInChromeCheck(eventHandlerInChromeCheck);
				} else {
					isCatchEvent = true;
					console.log("error", event.type);
					removeEventListenersInChromeCheck(eventHandlerInChromeCheck);
				}
			}
			function createIframe(target, uri) {
				var iframe = target.createElement("iframe"); 
				iframe.src = uri; 
				iframe.id = "hiddenIframe"; 
				iframe.style.display = "none"; 
				target.body.appendChild(iframe);
				return iframe;
			}
			function unsupportedCb() {
				console.log("Browser is not supported");
			}

			var uri = protocol + ':' + params;
			timeoutMs = timeoutMs || 1000;
			
			var isIeEdge = AscCommon.AscBrowser.isIeEdge;
			var isIE9 = AscCommon.AscBrowser.isIE9;
			var isIE10OnWindows7 = (AscCommon.AscBrowser.isIE10 && AscCommon.AscBrowser.windowsVersionCode == 6.1);
			var isIESince10 = (AscCommon.AscBrowser.isIE || AscCommon.AscBrowser.isIE10);
			var isMozillaBefore64 = (AscCommon.AscBrowser.isMozilla && AscCommon.AscBrowser.mozillaVersion < 64);
			var isMozillaSince64 = (AscCommon.AscBrowser.isMozilla && AscCommon.AscBrowser.mozillaVersion >= 64);
			var isChromeBefore85 = (AscCommon.AscBrowser.isChrome &&  AscCommon.AscBrowser.chromeVersion < 85);
			var isChromeSince85 = (AscCommon.AscBrowser.isChrome && AscCommon.AscBrowser.chromeVersion >= 85);
			var isWindowsBefore8 = (AscCommon.AscBrowser.windowsVersionCode < 6.2);
			var isWindowsSince8 = (AscCommon.AscBrowser.windowsVersionCode >= 6.2);

			var isBrowserSupported = false;
			var isCatchEvent = false;
			
			//ie on win < 8 - DID NOT CHECK (2 CASES) (!)
			if (isWindowsBefore8 && (isIE9 || isIeEdge || isIESince10)) {
				isBrowserSupported = true;
				//CASE 1
				var aElem = document.createElement("a"); 
				aElem.href = "#"; 
				aElem.id = "hiddenLink"; 
				aElem.style.display = "none"; 
				document.body.appendChild(aElem);
				var aLink = $('#hiddenLink')[0];
				aLink.href = uri;
				if (navigator.appName=="Microsoft Internet Explorer" && aLink.protocolLong=="Unknown Protocol") {
					onError();
				} else {
					onSuccess();
				}
				//CASE 2
				/*var myWindow = window.open('', '', 'width=0,height=0');
				myWindow.document.write("<iframe src='" + uri + "'></iframe>");
				setTimeout(function () {
					try {
						myWindow.location.href;
						myWindow.setTimeout("window.close()", timeoutMs);
						onSuccess();
					} catch (e) {
						myWindow.close();
						onError();
					}
				}, timeoutMs);*/
			}

			//ie10 in win7 - DID NOT CHECK (!)
			if (isIE10OnWindows7) {
				isBrowserSupported = true;
				var timeout = setTimeout(onError, timeoutMs);
				window.addEventListener("blur", function () {
					clearTimeout(timeout);
					onSuccess();
				});
				if (!iframe) {
					var iframe = createIframe(document, "about:blank");
				}
				try {
					iframe.contentWindow.location.href = uri;
				} catch (e) {
					onError();
					clearTimeout(timeout);
				}
			}

			//ie11 on win10 - WORK (!)
			//ms_edge < 19 - DID NOT CHECK
			//specific to Internet Explorer >= 10, and Microsoft Edge versions 18 and lower on win8 or win10 
			if ((isIESince10 /*|| ms_edge < 19*/) && (isWindowsSince8)) {
				isBrowserSupported = true;
				window.navigator.msLaunchUri(uri, onSuccess, onError);
			}

			//firefox63 on win10 - WORK (!)
			//presumably works on firefox < 64
			if (isMozillaBefore64) {
				isBrowserSupported = true;
				var iframe = document.createElement("iframe"); 
				iframe.src = "about:blank"; 
				iframe.id = "hiddenIframe"; 
				iframe.style.display = "none"; 
				document.body.appendChild(iframe); 
				try { 
					iframe.contentWindow.location.href = uri; 
					onSuccess(); 
				} catch (e) { 
					if (e.name == "NS_ERROR_UNKNOWN_PROTOCOL") { 
						onError(); 
					} else { 
						onSuccess(); 
					} 
				}	
			}

			//firefox72 and firefox84 on win10 - WORK (!)
			//presumably works on firefox >= 64 
			//https://github.com/ismailhabib/custom-protocol-detection/issues/37
			if (isMozillaSince64) {	
				isBrowserSupported = true;	
				if (!iframe) {
					var iframe = document.createElement("iframe"); 
					iframe.src = "about:blank"; 
					iframe.id = "hiddenIframe"; 
					iframe.style.display = "none"; 
					document.body.appendChild(iframe);
				}
				try {
					iframe.contentWindow.location.href = uri;
					setTimeout(function () {
						try {
							if (iframe.contentWindow.location.protocol === "about:") {
								onSuccess();
							} else {
								onError();
							}
						} catch (e) {
							if (e.name === "NS_ERROR_UNKNOWN_PROTOCOL" || e.name === "NS_ERROR_FAILURE" || e.name === "SecurityError") {
								onError();
							}
						}
					}, timeoutMs);
				} catch (e) {
					if (e.name === "NS_ERROR_UNKNOWN_PROTOCOL" || e.name === "NS_ERROR_FAILURE" || e.name === "SecurityError") {
						onError();
					}
				}
			}			

			//chrome84 on win10 - WORK (!)
			//presumably works on chrome < 85
			if (isChromeBefore85) {
				isBrowserSupported = true;
				var isSupported = false;
				window.focus();
				window.onblur = function() {
					isSupported = true;
				};
				location.href = uri;
				setTimeout(function() {
					window.onblur = null;
					if (isSupported) {
						onSuccess();
					} 
					else {
						onError();
					}
				}, timeoutMs);
			}
			
			//todo chrome >= 85 () 
			//https://github.com/ismailhabib/custom-protocol-detection/issues/45
			if (isChromeSince85) {
				isBrowserSupported = true;

				var timeout = setTimeout(function() {
					isCatchEvent ? onError() : onSuccess();
					removeEventListenersInChromeCheck(eventHandlerInChromeCheck);
				}, timeoutMs);
				
				for(var key in window){
					if(/^on(blur|key|mouse|touch|wheel)/.test(key)) {
						window.addEventListener(key.slice(2), eventHandlerInChromeCheck);
					}
				}

				location.href = uri;
			}
			
			//safari - DID NOT CHECK 
			//https://stackoverflow.com/questions/836777/how-to-detect-browsers-protocol-handlers
			//https://github.com/vireshshah/custom-protocol-check/blob/73c208523fa3debe0b39fcb38bb4080d4e191d8e/index.js#L245
			if (AscCommon.AscBrowser.isSafari) {
				isBrowserSupported = true;
				var timeout = setTimeout(function() {
					onError();
					window.onblur = null;
				}, timeoutMs);
				if (!iframe) {
					var iframe = createIframe(document, "about:blank");
				}	
				window.onblur = function() {
					clearTimeout(timeout);
					onSuccess();
				};			
				iframe.contentWindow.location.href = uri;
			}

			//if browser is not supported
			if (!isBrowserSupported) {
				unsupportedCb();
			}
		}
	//--------------------------------------------------------export----------------------------------------------------
	window['AscCommon'] = window['AscCommon'] || {};
	window['AscCommon'].openApp = openApp;
})(window);
