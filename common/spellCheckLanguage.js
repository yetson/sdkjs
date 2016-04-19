/*
 *
 * (c) Copyright Ascensio System Limited 2010-2016
 *
 * This program is freeware. You can redistribute it and/or modify it under the terms of the GNU 
 * General Public License (GPL) version 3 as published by the Free Software Foundation (https://www.gnu.org/copyleft/gpl.html). 
 * In accordance with Section 7(a) of the GNU GPL its Section 15 shall be amended to the effect that 
 * Ascensio System SIA expressly excludes the warranty of non-infringement of any third-party rights.
 *
 * THIS PROGRAM IS DISTRIBUTED WITHOUT ANY WARRANTY; WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR
 * FITNESS FOR A PARTICULAR PURPOSE. For more details, see GNU GPL at https://www.gnu.org/copyleft/gpl.html
 *
 * You can contact Ascensio System SIA by email at sales@onlyoffice.com
 *
 * The interactive user interfaces in modified source and object code versions of ONLYOFFICE must display 
 * Appropriate Legal Notices, as required under Section 5 of the GNU GPL version 3.
 *
 * Pursuant to Section 7  3(b) of the GNU GPL you must retain the original ONLYOFFICE logo which contains 
 * relevant author attributions when distributing the software. If the display of the logo in its graphic 
 * form is not reasonably feasible for technical reasons, you must include the words "Powered by ONLYOFFICE" 
 * in every copy of the program you distribute. 
 * Pursuant to Section 7  3(e) we decline to grant you any rights under trademark law for use of our trademarks.
 *
*/
"use strict";

(	/**
 * @param {Window} window
 * @param {undefined} undefined
 */
	function (window, undefined) {
		/*
		 * Import
		 * -----------------------------------------------------------------------------
		 */
		var prot;

		/**
		 * Класс language для получения списка языков в проверке орфографии
		 * -----------------------------------------------------------------------------
		 * @constructor
		 * @memberOf Asc
		 * @param id
		 * @param name
		 * @return {*}
		 */
		function asc_CLanguage (name, id) {
			this.name	= name;			// имя языка
			this.id		= id;			// уникальный id языка

			return this;
		}

		asc_CLanguage.prototype = {
			constructor: asc_CLanguage,
			asc_getId: function () { return this.id; },
			asc_getName: function () { return this.name; },
			asc_setId: function (val) { this.id = val; },
			asc_setName: function (val) { this.name = val; }
		};

		//---------------------------------------------------------export---------------------------------------------------
		window['AscCommon'] = window['AscCommon'] || {};
		window["AscCommon"].asc_CLanguage = asc_CLanguage;
		prot = asc_CLanguage.prototype;
		prot["asc_getId"]			= prot.asc_getId;
		prot["asc_getName"]			= prot.asc_getName;
		prot["asc_setId"]			= prot.asc_setId;
		prot["asc_setName"]			= prot.asc_setName;
	}
)(window);
