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

/**
 * Created with JetBrains WebStorm.
 * User: Dmitry.Shahtanov
 * Date: 27.06.13
 * Time: 15:15
 * To change this template use File | Settings | File Templates.
 */


cFormulaFunctionGroup['Cube'] = [
    cCUBEKPIMEMBER,
    cCUBEMEMBER,
    cCUBEMEMBERPROPERTY,
    cCUBERANKEDMEMBER,
    cCUBESET,
    cCUBESETCOUNT,
    cCUBEVALUE
];

function cCUBEKPIMEMBER() {
//    cBaseFunction.call( this, "CUBEKPIMEMBER" );

    this.name = "CUBEKPIMEMBER";
    this.type = cElementType.func;
    this.value = null;
    this.argumentsMin = 0;
    this.argumentsCurrent = 0;
    this.argumentsMax = 255;
    this.formatType = {
        def:-1, //подразумевается формат первой ячейки входящей в формулу.
        noneFormat:-2
    };
    this.numFormat = this.formatType.def;

}

cCUBEKPIMEMBER.prototype = Object.create( cBaseFunction.prototype );

function cCUBEMEMBER() {
//    cBaseFunction.call( this, "CUBEMEMBER" );

    this.name = "CUBEMEMBER";
    this.type = cElementType.func;
    this.value = null;
    this.argumentsMin = 0;
    this.argumentsCurrent = 0;
    this.argumentsMax = 255;
    this.formatType = {
        def:-1, //подразумевается формат первой ячейки входящей в формулу.
        noneFormat:-2
    };
    this.numFormat = this.formatType.def;

}

cCUBEMEMBER.prototype = Object.create( cBaseFunction.prototype );

function cCUBEMEMBERPROPERTY() {
//    cBaseFunction.call( this, "CUBEMEMBERPROPERTY" );

    this.name = "CUBEMEMBERPROPERTY";
    this.type = cElementType.func;
    this.value = null;
    this.argumentsMin = 0;
    this.argumentsCurrent = 0;
    this.argumentsMax = 255;
    this.formatType = {
        def:-1, //подразумевается формат первой ячейки входящей в формулу.
        noneFormat:-2
    };
    this.numFormat = this.formatType.def;

}

cCUBEMEMBERPROPERTY.prototype = Object.create( cBaseFunction.prototype );

function cCUBERANKEDMEMBER() {
//    cBaseFunction.call( this, "CUBERANKEDMEMBER" );

    this.name = "CUBERANKEDMEMBER";
    this.type = cElementType.func;
    this.value = null;
    this.argumentsMin = 0;
    this.argumentsCurrent = 0;
    this.argumentsMax = 255;
    this.formatType = {
        def:-1, //подразумевается формат первой ячейки входящей в формулу.
        noneFormat:-2
    };
    this.numFormat = this.formatType.def;

}

cCUBERANKEDMEMBER.prototype = Object.create( cBaseFunction.prototype );

function cCUBESET() {
//    cBaseFunction.call( this, "CUBESET" );

    this.name = "CUBESET";
    this.type = cElementType.func;
    this.value = null;
    this.argumentsMin = 0;
    this.argumentsCurrent = 0;
    this.argumentsMax = 255;
    this.formatType = {
        def:-1, //подразумевается формат первой ячейки входящей в формулу.
        noneFormat:-2
    };
    this.numFormat = this.formatType.def;

}

cCUBESET.prototype = Object.create( cBaseFunction.prototype );

function cCUBESETCOUNT() {
//    cBaseFunction.call( this, "CUBESETCOUNT" );

    this.name = "CUBESETCOUNT";
    this.type = cElementType.func;
    this.value = null;
    this.argumentsMin = 0;
    this.argumentsCurrent = 0;
    this.argumentsMax = 255;
    this.formatType = {
        def:-1, //подразумевается формат первой ячейки входящей в формулу.
        noneFormat:-2
    };
    this.numFormat = this.formatType.def;

}

cCUBESETCOUNT.prototype = Object.create( cBaseFunction.prototype );

function cCUBEVALUE() {
//    cBaseFunction.call( this, "CUBEVALUE" );

    this.name = "CUBEVALUE";
    this.type = cElementType.func;
    this.value = null;
    this.argumentsMin = 0;
    this.argumentsCurrent = 0;
    this.argumentsMax = 255;
    this.formatType = {
        def:-1, //подразумевается формат первой ячейки входящей в формулу.
        noneFormat:-2
    };
    this.numFormat = this.formatType.def;

}

cCUBEVALUE.prototype = Object.create( cBaseFunction.prototype );
