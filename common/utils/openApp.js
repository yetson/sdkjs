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
		function openApp(protocol, params, onSuccess, onError)
		{	
			let uri = `${protocol}:${params}`;
			
			//ie11 on win10 - WORK
			//specific to Internet Explorer >= 10, and Microsoft Edge versions 18 and lower on win8 or win10 
			/*if ((ie >= 10 or ms_edge <= 18) and (win8 or win10)) {
				window.navigator.msLaunchUri(uri, onSuccess, onError);
			}*/

			//firefox63 on win10 - WORK
			//presumably works on firefox <= 63
			/*if (firefox <= 63) {
				let iframe = document.createElement("iframe"); 
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
			}*/

			//chrome84 on win10 - WORK	
			//presumably works on chrome before version 85
			/*if (chrome < 85) {
				let isSupported = false;
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
				}, 300);
			}*/
			
			//firefox >= 64 - IT WORKS, BUT SOMETHIMES (BOTH CASES)
			//CASE 1:	presumably the same as chrome before version 85 (works every other time)
			//CASE 2:	https://github.com/ismailhabib/custom-protocol-detection/issues/37
			//works every other time, as in case 1, don't know, why
			/*if (!iframe) {
                let iframe = document.createElement("iframe"); 
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
                }, 500);
            } catch (e) {
                if (e.name === "NS_ERROR_UNKNOWN_PROTOCOL" || e.name === "NS_ERROR_FAILURE" || e.name === "SecurityError") {
                    onError();
                }
			}*/
			 
			//ie < 10 and win < 8 - DID NOT CHECK (3 CASES)
			/*let aElem = document.createElement("a"); 
			aElem.href = "#"; 
			aElem.id = "hiddenLink"; 
			aElem.style.display = "none"; 
			document.body.appendChild(aElem);
			let isSupported = false;
			let aLink = $('#hiddenLink')[0];
        	aLink.href = uri;*/
			//CASE 1
			/*if (navigator.appName=="Microsoft Internet Explorer" && aLink.protocolLong=="Unknown Protocol") {
				onError();
			}*/
			//CASE 2
			/*var myWindow = window.open('', '', 'width=0,height=0');
			myWindow.document.write("<iframe src='" + uri + "'></iframe>");
			setTimeout(function () {
				try {
					myWindow.location.href;
					myWindow.setTimeout("window.close()", 1000);
					onSuccess();
				} catch (e) {
					myWindow.close();
					onError();
				}
			}, 1000);*/
			//CASE 3 - IE10 In Windows 7 (perhaps)
			/*var timeout = setTimeout(failCb, 1000);
			window.addEventListener("blur", function () {
				clearTimeout(timeout);
				onSuccess();
			});
			let iframe = document.createElement("iframe"); 
				iframe.src = "about:blank"; 
				iframe.id = "hiddenIframe"; 
				iframe.style.display = "none"; 
				document.body.appendChild(iframe);
			try {
				iframe.contentWindow.location.href = uri;
			} catch (e) {
				onError();
				clearTimeout(timeout);
			}*/

			//safari - DID NOT CHECK
			//https://stackoverflow.com/questions/836777/how-to-detect-browsers-protocol-handlers
			/*window.postMessage("myappinstalled", window.location.origin);
			window.addEventListener('message', function (msg) {
				if (msg.data === "myappinstalled") {
					myappinstalledflag = true;
				}
			}, false);
			if (myappinstalledflag) {
				location.href = uri;
				onSuccess();
			} else {
				onError();
			}*/

			//todo chrome >= 85
			//https://github.com/ismailhabib/custom-protocol-detection/issues/45

			//todo opera and ms_edge > 18
			//presumably the same as chrome after version 85 (because the same chromium engine)
		}
	//--------------------------------------------------------export----------------------------------------------------
	window['AscCommon'] = window['AscCommon'] || {};
	window['AscCommon'].openApp = openApp;
})(window);
