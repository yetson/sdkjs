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

// не скрываем переменные, скин используется напрямую в sdk-all.js
// а экспорт в AscCommon - только для sdk-all-min.js
// если хочется скрыть - то везде GlobalSkin => AscCommon.GlobalSkin

var EditorSkins = {
	"theme-light" : {
		Name                      : "theme-light",
		Type                      : "light",

		RulersButton              : false,
		NavigationButtons         : false,

		BackgroundColor           : "#EEEEEE",
		PageOutline               : "#BBBEC2",

		RulerDark                 : "#D9D9D9",
		RulerLight                : "#FFFFFF",
		RulerOutline              : "#CBCBCB",
		RulerMarkersOutlineColor  : "#555555",
		RulerMarkersOutlineColorOld : "#AAAAAA",
		RulerMarkersFillColor     : "#FFFFFF",
		RulerMarkersFillColorOld  : "#FFFFFF",
		RulerTextColor            : "#555555",
		RulerTabsColor            : "#000000",
		RulerTabsColorOld         : "#828282",
		RulerTableColor1          : "#FFFFFF",
		RulerTableColor2          : "#555555",

		ScrollBackgroundColor     : "#EEEEEE",
		ScrollOutlineColor        : "#CBCBCB",
		ScrollOutlineHoverColor   : "#CBCBCB",
		ScrollOutlineActiveColor  : "#ADADAD",
		ScrollerColor             : "#F7F7F7",
		ScrollerHoverColor        : "#C0C0C0",
		ScrollerActiveColor       : "#ADADAD",
		ScrollArrowColor          : "#ADADAD",
		ScrollArrowHoverColor     : "#F7F7F7",
		ScrollArrowActiveColor    : "#F7F7F7",
		ScrollerTargetColor       : "#CFCFCF",
		ScrollerTargetHoverColor  : "#F1F1F1",
		ScrollerTargetActiveColor : "#F1F1F1",

		/* word */
		STYLE_THUMBNAIL_WIDTH     : 104,
		STYLE_THUMBNAIL_HEIGHT    : 38,

		isNeedInvertOnActive      : false,
		ContentControlsBack    : "#F1F1F1",
		ContentControlsHover   : "#D8DADC",
		ContentControlsActive  : "#7C838A",
		ContentControlsText    : "#444444",
		ContentControlsTextActive   : "#FFFFFF",
		ContentControlsAnchorActive : "#CFCFCF",
		FormsContentControlsOutlineHover : "rgba(0, 0, 0, 0.3)",
		FormsContentControlsOutlineActive : "rgba(0, 0, 0, 0.3)",
		FormsContentControlsOutlineBorderRadiusHover : 0,
		FormsContentControlsOutlineBorderRadiusActive : 2,
		FormsContentControlsMarkersBackground : "#FFFFFF",
		FormsContentControlsMarkersBackgroundHover : "#E1E1E1",
		FormsContentControlsMarkersBackgroundActive : "#CCCCCC",
		FormsContentControlsOutlineMoverHover : "#444444",
		FormsContentControlsOutlineMoverActive : "#444444",

		/* presentations */
		BackgroundColorThumbnails       : "#F4F4F4",
		BackgroundColorThumbnailsActive : "#F4F4F4",
		BackgroundColorThumbnailsHover  : "#F4F4F4",
		ThumbnailsPageOutlineActive     : "#848484",
		ThumbnailsPageOutlineHover      : "#CFCFCF",
		ThumbnailsPageNumberText        : "#000000",
		ThumbnailsPageNumberTextActive  : "#000000",
		ThumbnailsPageNumberTextHover   : "#000000",
		BackgroundColorNotes            : "#F0F0F0",

		THEMES_THUMBNAIL_WIDTH          : 85,
		THEMES_THUMBNAIL_HEIGHT         : 38,

		BorderSplitterColor             : "#CBCBCB",
		SupportNotes                    : true,
		SplitterWidthMM                 : 1,
		ThumbnailScrollWidthNullIfNoScrolling : false,

		// demonstration
		DemBackgroundColor              : "#F0F0F0",
		DemButtonBackgroundColor        : "#FFFFFF",
		DemButtonBackgroundColorHover   : "#D8DADC",
		DemButtonBackgroundColorActive  : "#7D858C",
		DemButtonBorderColor            : "#CFCFCF",
		DemButtonTextColor              : "#444444",
		DemButtonTextColorActive        : "#FFFFFF",
		DemSplitterColor                : "#CBCBCB",
		DemTextColor                    : "#666666",

		/* spreadsheets */
		//TODO названия не менял. использую такие же как и были ранее. пересмотреть!
		Background               : "#F0F0F0",
		BackgroundActive         : "#c1c1c1",
		BackgroundHighlighted    : "#dfdfdf",

		Border                   : "#d5d5d5",
		BorderActive             : "#929292",
		BorderHighlighted        : "#afafaf",

		Color                    : "#363636",
		ColorActive              : "#363636",
		ColorHighlighted         : "#6a6a70",

		BackgroundDark           : "#444444",
		BackgroundDarkActive     : "#111111",
		BackgroundDarkHighlighted: "#666666",

		ColorDark                : "#ffffff",
		ColorDarkActive          : "#ffffff",
		ColorDarkHighlighted     : "#c1c1c1",

		GroupDataBorder          : "#000000",
		EditorBorder             : "#cbcbcb"

	},
	"theme-dark" : {
		Name                      : "theme-dark",
		Type                      : "dark",

		RulersButton              : false,
		NavigationButtons         : false,

		BackgroundColor           : "#666666",
		PageOutline               : "#BBBEC2",

		RulerDark                 : "#373737",
		RulerLight                : "#555555",
		RulerOutline              : "#2A2A2A",
		RulerMarkersOutlineColor  : "#B6B6B6",
		RulerMarkersOutlineColorOld : "#808080",
		RulerMarkersFillColor     : "#555555",
		RulerMarkersFillColorOld  : "#555555",
		RulerTextColor            : "#B6B6B6",
		RulerTabsColor            : "#FFFFFF",
		RulerTabsColorOld         : "#999999",
		RulerTableColor1          : "#FFFFFF",
		RulerTableColor2          : "#B2B2B2",

		ScrollBackgroundColor       : "#666666",
		ScrollOutlineColor          : "#2A2A2A",
		ScrollOutlineHoverColor     : "#999999",
		ScrollOutlineActiveColor    : "#ADADAD",
		ScrollerColor               : "#404040",
		ScrollerHoverColor          : "#999999",
		ScrollerActiveColor         : "#ADADAD",
		ScrollArrowColor            : "#999999",
		ScrollArrowHoverColor       : "#404040",
		ScrollArrowActiveColor      : "#404040",
		ScrollerTargetColor         : "#999999",
		ScrollerTargetHoverColor    : "#404040",
		ScrollerTargetActiveColor   : "#404040",

		/* word */
		STYLE_THUMBNAIL_WIDTH       : 104,
		STYLE_THUMBNAIL_HEIGHT      : 38,

		isNeedInvertOnActive        : false,
		ContentControlsBack         : "#F1F1F1",
		ContentControlsHover        : "#D8DADC",
		ContentControlsActive       : "#7C838A",
		ContentControlsText         : "#444444",
		ContentControlsTextActive   : "#FFFFFF",
		ContentControlsAnchorActive : "#CFCFCF",
		FormsContentControlsOutlineHover : "rgba(0, 0, 0, 0.3)",
		FormsContentControlsOutlineActive : "rgba(0, 0, 0, 0.3)",
		FormsContentControlsOutlineBorderRadiusHover : 0,
		FormsContentControlsOutlineBorderRadiusActive : 2,
		FormsContentControlsMarkersBackground : "#FFFFFF",
		FormsContentControlsMarkersBackgroundHover : "#E1E1E1",
		FormsContentControlsMarkersBackgroundActive : "#CCCCCC",
		FormsContentControlsOutlineMoverHover : "#444444",
		FormsContentControlsOutlineMoverActive : "#444444",

		/* presentations */
		BackgroundColorThumbnails       : "#666666",
		BackgroundColorThumbnailsActive : "#666666",
		BackgroundColorThumbnailsHover  : "#666666",
		ThumbnailsPageOutlineActive     : "#848484",
		ThumbnailsPageOutlineHover      : "#CFCFCF",
		ThumbnailsPageNumberText        : "#FFFFFF",
		ThumbnailsPageNumberTextActive  : "#FFFFFF",
		ThumbnailsPageNumberTextHover   : "#FFFFFF",
		BackgroundColorNotes            : "#666666",

		THEMES_THUMBNAIL_WIDTH  : 85,
		THEMES_THUMBNAIL_HEIGHT : 38,

		BorderSplitterColor                   : "#CBCBCB",
		SupportNotes                          : true,
		SplitterWidthMM                       : 1,
		ThumbnailScrollWidthNullIfNoScrolling : false,

		// demonstration
		DemBackgroundColor              : "#666666",
		DemButtonBackgroundColor        : "#333333",
		DemButtonBackgroundColorHover   : "#555555",
		DemButtonBackgroundColorActive  : "#DDDDDD",
		DemButtonBorderColor            : "#CFCFCF",
		DemButtonTextColor              : "#FFFFFF",
		DemButtonTextColorActive        : "#333333",
		DemSplitterColor                : "#CBCBCB",
		DemTextColor                    : "#FFFFFF",

		/* spreadsheets */
		Background               : "#666666",
		BackgroundActive         : "#939393",
		BackgroundHighlighted    : "#787878",

		Border                   : "#757575",
		BorderActive             : "#9e9e9e",
		BorderHighlighted        : "#858585",

		Color                    : "#d9d9d9",
		ColorActive              : "#d9d9d9",
		ColorHighlighted         : "#d9d9d9",

		BackgroundDark           : "#111111",
		BackgroundDarkActive     : "#333333",
		BackgroundDarkHighlighted: "#000000",

		ColorDark                : "#ffffff",
		ColorDarkActive          : "#ffffff",
		ColorDarkHighlighted     : "#ffffff",

		GroupDataBorder          : "#ffffff",
		EditorBorder             : "#2a2a2a"
	}
};

/*
функция для генерации "else" updateGlobalSkin
function setter_from_interface(obj)
{
	var code = "";
	for (var i in obj) {
		code += ("if (obj[\"" + i + "\"]) GlobalSkin." + i + " = obj[\"" + i + "\"];\n");
	}
	copy(code);
}
*/

var GlobalSkin = EditorSkins["theme-light"];

function updateGlobalSkinColors(theme)
{
	var skin = GlobalSkin;

	skin.BackgroundColor = theme["canvas-background"];
	skin.PageOutline = theme["canvas-page-border"];

	skin.RulerDark = theme["canvas-ruler-margins-background"];
	skin.RulerLight = theme["canvas-ruler-background"];
	skin.RulerOutline = theme["border-toolbar"];
	skin.RulerMarkersOutlineColor = theme[""];
	skin.RulerMarkersOutlineColorOld = theme[""];
	skin.RulerMarkersFillColor = theme["background-normal"];
	skin.RulerMarkersFillColorOld = theme["background-normal"];
	skin.RulerTextColor = theme["canvas-ruler-mark"];
	skin.RulerTabsColor = theme["canvas-high-contrast"];
	skin.RulerTabsColorOld = theme["canvas-high-contrast-disabled"];
	skin.RulerTableColor1 = theme["background-normal"];
	skin.RulerTableColor2 = theme["canvas-ruler-handle-border"];

	skin.ScrollBackgroundColor = theme["canvas-background"];
	skin.ScrollOutlineColor = theme["canvas-scroll-thumb-border"];
	skin.ScrollOutlineHoverColor = theme["canvas-scroll-thumb-border-hover"];
	skin.ScrollOutlineActiveColor = theme["canvas-scroll-thumb-border-pressed"];
	skin.ScrollerColor = theme["canvas-scroll-thumb"];
	skin.ScrollerHoverColor = theme["canvas-scroll-thumb-hover"];
	skin.ScrollerActiveColor = theme["canvas-scroll-thumb-pressed"];
	skin.ScrollArrowColor = theme["canvas-scroll-arrow"];
	skin.ScrollArrowHoverColor = theme["canvas-scroll-arrow-hover"];
	skin.ScrollArrowActiveColor = theme["canvas-scroll-arrow-pressed"];
	skin.ScrollerTargetColor = theme["canvas-scroll-thumb-target"];
	skin.ScrollerTargetHoverColor = theme["canvas-scroll-thumb-target-hover"];
	skin.ScrollerTargetActiveColor = theme["canvas-scroll-thumb-target-pressed"];

	/* presentations */
	skin.BackgroundColorThumbnails = theme["background-toolbar"];
	skin.BackgroundColorThumbnailsActive = theme["background-toolbar"];
	skin.BackgroundColorThumbnailsHover = theme["background-toolbar"];
	skin.ThumbnailsPageOutlineActive = theme["border-preview-select"];
	skin.ThumbnailsPageOutlineHover = theme["border-preview-hover"];
	skin.ThumbnailsPageNumberText = theme["text-normal"];
	skin.ThumbnailsPageNumberTextActive = theme["text-normal"];
	skin.ThumbnailsPageNumberTextHover = theme["text-normal"];
	skin.BackgroundColorNotes = theme["canvas-background"];

	skin.BorderSplitterColor = theme["border-toolbar"];

	// demonstration
	skin.DemBackgroundColor = theme["canvas-background"];
	skin.DemButtonBackgroundColor = theme[""];
	skin.DemButtonBackgroundColorHover = theme[""];
	skin.DemButtonBackgroundColorActive = theme[""];
	skin.DemButtonBorderColor = theme[""];
	skin.DemButtonTextColor = theme[""];
	skin.DemButtonTextColorActive = theme[""];
	skin.DemSplitterColor = theme[""];
	skin.DemTextColor = theme[""];

	/* spreadsheets */
	skin.Background = theme["canvas-background"];
	skin.BackgroundActive = theme["canvas-cell-title-selected"];
	skin.BackgroundHighlighted = theme["canvas-cell-title-hover"];

	skin.Border = theme["canvas-cell-title-border"];
	skin.BorderActive = theme["canvas-cell-title-border-selected"];
	skin.BorderHighlighted = theme["canvas-cell-title-border-hover"];

	skin.Color = theme["text-normal"];
	skin.ColorActive = theme["text-normal"];
	skin.ColorHighlighted = theme["text-normal"];

	skin.BackgroundDark = theme["canvas-dark-cell-title"];
	skin.BackgroundDarkActive = theme["canvas-dark-cell-title-selected"];
	skin.BackgroundDarkHighlighted = theme["canvas-dark-cell-title-hover"];

	skin.ColorDark = theme["text-contrast-background"];
	skin.ColorDarkActive = theme["text-contrast-background"];
	skin.ColorDarkHighlighted = theme["text-contrast-background"];

	skin.GroupDataBorder = theme["border-toolbar"];
	skin.EditorBorder = theme[""];
}

function updateGlobalSkin(obj)
{
	if (!obj) return;

	if (typeof obj === "string")
	{
		var name = obj;
		obj = {
			"name" : name,
			"type" : ((-1 !== name.indexOf("dark")) ? "dark" : "light")
		};
	}

	if (obj["name"] && undefined !== EditorSkins[obj["name"]])
		GlobalSkin = EditorSkins[obj["name"]];
	else if (obj["type"])
	{
		for (var item in EditorSkins)
		{
			if (obj["type"] === EditorSkins[item].Type)
			{
				GlobalSkin = EditorSkins[item];
				break;
			}
		}
	}

	for (var item in obj)
		GlobalSkin[item] = obj[item];

	updateGlobalSkinColors(obj);

	if (window.g_asc_plugins)
		window.g_asc_plugins.onThemeChanged(GlobalSkin);

	window['AscCommon'].GlobalSkin = GlobalSkin;
}

window['AscCommon'] = window['AscCommon'] || {};
window['AscCommon'].GlobalSkin = GlobalSkin;
window['AscCommon'].updateGlobalSkin = updateGlobalSkin;

if (AscCommon.TEMP_STYLE_THUMBNAIL_WIDTH !== undefined && AscCommon.TEMP_STYLE_THUMBNAIL_HEIGHT !== undefined)
{
	// TODO: переделать.
	GlobalSkin.STYLE_THUMBNAIL_WIDTH = AscCommon.TEMP_STYLE_THUMBNAIL_WIDTH;
	GlobalSkin.STYLE_THUMBNAIL_HEIGHT = AscCommon.TEMP_STYLE_THUMBNAIL_HEIGHT;
}
