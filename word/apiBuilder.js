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
 * User: Ilja.Kirillov
 * Date: 06.04.2016
 * Time: 14:15
 */

(function(window)
{
    var Api           = window["asc_docs_api"];
    var ApiDocument   = CDocument;
    var ApiParagraph  = Paragraph;
    var ApiTable      = CTable;

    //------------------------------------------------------------------------------------------------------------------
    // Основное Апи
    //------------------------------------------------------------------------------------------------------------------
    /**
     * Получаем ссылку на основной документ в виде класса CDocumentContent
     */
    Api.prototype["builder_GetDocument"] = function()
    {
        return this.WordControl.m_oLogicDocument;
    };
    /**
     * Создаем новый параграф
     */
    Api.prototype["builder_CreateParagraph"] = function()
    {
        return new ApiParagraph(private_GetDrawingDocument());
    };
    /**
     * Создаем новую таблицу размерами nCols * nRows
     */
    Api.prototype["builder_CreateTable"] = function(nCols, nRows)
    {
        if (!nRows || nRows <= 0 || !nCols || nCols <= 0)
            return null;

        return new ApiTable(private_GetDrawingDocument(), null, true, 0, 0, 0, 0, 0, nRows, nCols, [], false);
    };

    //------------------------------------------------------------------------------------------------------------------
    // Апи документа
    //------------------------------------------------------------------------------------------------------------------
    /**
     * Получаем количество элементов в документе
     */
    ApiDocument.prototype["builder_GetElementsCount"] = function()
    {
        return this.Content.length;
    };
    /**
     * Получаем элемент по заданному номеру или null
     */
    ApiDocument.prototype["builder_GetElement"] = function(nPos)
    {
        if (!this.Content[nPos])
            return null;

        return this.Content[nPos];
    };
    /**
     * Добавляем параграф или таблицу в документ
     * @param nPos
     * @param oElement
     */
    ApiDocument.prototype["builder_AddElement"] = function(nPos, oElement)
    {
        if (oElement instanceof ApiParagraph || oElement instanceof ApiTable)
        {
            this.Internal_Content_Add(nPos, oElement);
            return true;
        }

        return false;
    };

    /**
     * Добавляем параграф или таблицу в конец документа
     * @param oElement
     */
    ApiDocument.prototype["builder_Push"] = function(oElement)
    {
        if (oElement instanceof ApiParagraph || oElement instanceof ApiTable)
        {
            this.Internal_Content_Add(this.Content.length, oElement, true);
            return true;
        }

        return false;
    };

    //------------------------------------------------------------------------------------------------------------------
    // Апи параграфа
    //------------------------------------------------------------------------------------------------------------------
    /**
     * Добавляем текст к параграфу. Возвращается текстовый объект (Run), к которому можно применять различные
     * текстовые настройки.
     */
    ApiParagraph.prototype["builder_AddText"] = function(sText)
    {
        var oRun = new ParaRun(this, false);

        if (!sText || !sText.length)
            return oRun;


    };


    function private_GetDrawingDocument()
    {
        return editor.WordControl.m_oLogicDocument.DrawingDocument;
    }
}(window));


function TEST_BUILDER()
{
    var oLD = editor.WordControl.m_oLogicDocument;
    oLD.Create_NewHistoryPoint();
    //------------------------------------------------------------------------------------------------------------------

    // Воссоздаем документ DemoHyden

    var Api = editor;

    var oDocument  = Api.builder_GetDocument();
    var oParagraph = Api.builder_CreateParagraph();
    var oTable     = Api.builder_CreateTable(3, 4);


    oDocument.builder_Push(oParagraph);
    oDocument.builder_Push(oTable);

    //------------------------------------------------------------------------------------------------------------------
    oLD.Recalculate_FromStart(true);
}
