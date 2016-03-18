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

var DEGR_REDUCT = 0.728;


var default_font = {FontFamily : {Name  : "Cambria Math", Index : -1 }, FontSize   : 36};
//var metricsDF = {};

function GetMathFont(GFont)
{
    g_oTextMeasurer.SetFont(GFont);

    var metrics =
    {
        Height:         g_oTextMeasurer.GetHeight(),
        Descender:      (-1)*g_oTextMeasurer.GetDescender(),
        Placeholder:    g_oTextMeasurer.Measure2Code( StartTextElement )
    };

    var Fnt =
    {
        FontSize: GFont.FontSize,
        FontFamily : {Name: GFont.FontFamily.Name, Index: GFont.FontFamily.Index },
        metrics: metrics
    };

    return Fnt;
}
/*function GetMetrics(value, font)
{
    g_oTextMeasurer.SetFont(type.font);
    return  g_oTextMeasurer.Measure2Code(value);
}*/

/*function getTypeHeight(h)
{
    var H1 = metricsDF.Height + metricsDF.Descender + metricsDF.Placeholder.Height,
        H2 = 2.5*metricsDF.Placeholder.Height,
        H3 = H1 + metricsDF.Placeholder.Height,
        H4 = H3 + metricsDF.Descender,
        H5 = H3 + H1;

    var type = null;

    if(h < H2)
        type = 0;
    else if(h < H4)
        type = 1;
    else if(h < H5)
        type = 2;
    else
        type = 3;

    return type;
}*/


function getStateHeight(height, print)
{
    var metric = print.metrics;
    var state = null;

    var H1 = metric.Height + metric.Descender + metric.Placeholder.Height,
        H2 = 2.5*metric.Placeholder.Height,
        H3 = H1 + metric.Placeholder.Height,
        H4 = H3 + metric.Descender,
        H5 = H3 + H1;

    if(height < H2)
        state = 0;
    else if(height < H4)
        state = 1;
    else if(height < H5)
        state = 2;
    else
        state = 3;

    return state;
}
function getMaxHeight(print)
{
    var metric = print.metrics;

    var H1 = metric.Height + metric.Descender + metric.Placeholder.Height,
        H2 = 2.5*metric.Placeholder.Height,
        H3 = H1 + metric.Placeholder.Height,
        H4 = H3 + metric.Descender,
        H5 = H3 + H1;

    return H5;
}

function getStateHeight_2(height, GFont)
{
    var metric = GFont.metrics;
    var state = null;
    var gap = metric.Height - metric.Placeholder.Height;

    var H1 = metric.Height,
        H2 = H1 + gap,
        H3 = 2*metric.Placeholder.Height + gap,
        H4 = 3*metric.Placeholder.Height + 2*gap,
        H5 = 4*metric.Placeholder.Height + 2*gap;

    if( height < H1 )
        state = 0;
    else if( height < H3 )
        state = 1;
    else if( height < H4 )
        state = 2;
    else if( height < H5 )
        state = 3;
    else
        state = 4;

    return state;
}

function getTypeDegree(IFont, flag)
{
    var fontSize = null;
	var CONST_INDEX = flag ? 0.62 : 0.728;

    var sD = IFont.FontSize*CONST_INDEX;
    if( sD - Math.floor(sD) > 0.65 )
        fontSize = Math.ceil(sD) - 0.5;
    else
        fontSize = Math.floor(sD);

    var GFont = {FontFamily: IFont.FontFamily, FontSize: fontSize};
    var IFont = GetMathFont(GFont);

    return IFont;
}

function getStateHeight_1(height, GFont)
{
    var metric = GFont.metrics,
        state = 0;
    var gap = metric.Height - metric.Placeholder.Height;

    var H5 = 5*metric.Placeholder.Height + 4*gap;

    if(H5 < height)
        state = 3;

    return state;
}
function getMaxHeight_1(print)
{
    var metric = print.metrics;
    var gap = metric.Height - metric.Placeholder.Height;

    return 5*metric.Placeholder.Height + 4*gap;
}
function getStateHeight_3( height, GFont) //for radical
{
    var metric = GFont.metrics,
                 GenHeight;
    var gap = metric.Height - metric.Placeholder.Height;

    var H0 = metric.Placeholder.Height,
        H1 = metric.Height,
        H2 = 2*metric.Placeholder.Height + 1.5*gap,
        H3 = 3*metric.Placeholder.Height + 2.4*gap,
        H4 = 4*metric.Placeholder.Height + 3*gap,
        H5 = 5*metric.Placeholder.Height + 4*gap;

    if(height < H0)
        GenHeight = H1*0.75;
    else if( height < H1 )
        GenHeight = H1;
    else if( height < H2 )
        GenHeight = H2;
    else if( height < H3 )
        GenHeight = H3;
    else if( height < H4 )
        GenHeight = H4;
    else if(height < H5)
        GenHeight = H5;
    else
        GenHeight = height;

    return GenHeight;
}