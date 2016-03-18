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

var min_distance_joined=2;
function JoinedH(shape1, shape2)
{
    var l, r, l2, r2;
    l=shape1.x;
    r=l+shape1.extX;

    l2=shape2.x;
    r2=l2+shape2.extX;

    var d=l-l2;
    if(Math.abs(d)<min_distance_joined)
    {
        return d;
    }

    d=l-r2;
    if(Math.abs(d)<min_distance_joined)
    {
        return d;
    }


    d=r-l2;
    if(Math.abs(d)<min_distance_joined)
    {
        return d;
    }

    d=r-r2;
    if(Math.abs(d)<min_distance_joined)
    {
        return d;
    }

    return 0;
}

function JoinedV(shape1, shape2)
{
    var t, b, t2, b2;
    t=shape1.y;
    b=t+shape1.extY;

    t2=shape2.y;
    b2=t2+shape2.extY;

    var d=t-t2;
    if(Math.abs(d)<min_distance_joined)
    {
        return d;
    }

    d=t-b2;
    if(Math.abs(d)<min_distance_joined)
    {
        return d;
    }


    d=b-t2;
    if(Math.abs(d)<min_distance_joined)
    {
        return d;
    }

    d=b-b2;
    if(Math.abs(d)<min_distance_joined)
    {
        return d;
    }

    return 0;
}


function JoinedPointH(X, shape2)
{
    var l2, r2;
    l2=shape2.x;
    r2=l2+shape2.extX;

    var d=X-l2;
    if(Math.abs(d)<min_distance_joined)
    {
        return d;
    }

    d=X-r2;
    if(Math.abs(d)<min_distance_joined)
    {
        return d;
    }

    return 0;
}

function JoinedPointV(Y, shape2)
{
    var t2, b2;
    t2=shape2.y;
    b2=t2+shape2.extY;

    var d=Y-t2;
    if(Math.abs(d)<min_distance_joined)
    {
        return d;
    }

    d=Y-b2;
    if(Math.abs(d)<min_distance_joined)
    {
        return d;
    }

    return 0;
}