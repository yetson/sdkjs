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

cFormulaFunctionGroup['Database'] = cFormulaFunctionGroup['Database'] || [];
cFormulaFunctionGroup['Database'].push(
    cDAVERAGE,
    cDCOUNT,
    cDCOUNTA,
    cDGET,
    cDMAX,
    cDMIN,
    cDPRODUCT,
    cDSTDEV,
    cDSTDEVP,
    cDSUM,
    cDVAR,
    cDVARP
);

function cDAVERAGE() {
    cBaseFunction.call( this, "DAVERAGE" );
}

cDAVERAGE.prototype = Object.create( cBaseFunction.prototype );

function cDCOUNT() {
    cBaseFunction.call( this, "DCOUNT" );
}

cDCOUNT.prototype = Object.create( cBaseFunction.prototype );

function cDCOUNTA() {
    cBaseFunction.call( this, "DCOUNTA" );
}

cDCOUNTA.prototype = Object.create( cBaseFunction.prototype );

function cDGET() {
    cBaseFunction.call( this, "DGET" );
}

cDGET.prototype = Object.create( cBaseFunction.prototype );

function cDMAX() {
    cBaseFunction.call( this, "DMAX" );
}

cDMAX.prototype = Object.create( cBaseFunction.prototype );

function cDMIN() {
    cBaseFunction.call( this, "DMIN" );
}

cDMIN.prototype = Object.create( cBaseFunction.prototype );

function cDPRODUCT() {
    cBaseFunction.call( this, "DPRODUCT" );
}

cDPRODUCT.prototype = Object.create( cBaseFunction.prototype );

function cDSTDEV() {
    cBaseFunction.call( this, "DSTDEV" );
}

cDSTDEV.prototype = Object.create( cBaseFunction.prototype );

function cDSTDEVP() {
    cBaseFunction.call( this, "DSTDEVP" );
}

cDSTDEVP.prototype = Object.create( cBaseFunction.prototype );

function cDSUM() {
    cBaseFunction.call( this, "DSUM" );
}

cDSUM.prototype = Object.create( cBaseFunction.prototype );

function cDVAR() {
    cBaseFunction.call( this, "DVAR" );
}

cDVAR.prototype = Object.create( cBaseFunction.prototype );

function cDVARP() {
    cBaseFunction.call( this, "DVARP" );
}

cDVARP.prototype = Object.create( cBaseFunction.prototype );
