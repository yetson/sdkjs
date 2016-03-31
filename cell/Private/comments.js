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

/* comments.js
 *
 * Author: Alexander.Trofimov@avsmedia.net
 * Date:   Apr 23, 2015
 */
(/**
 * @param {jQuery} $
 * @param {Window} window
 * @param {undefined} undefined
 */
  function($, window, undefined) {

  var asc = window["Asc"];
  var prot;

  asc['spreadsheet_api'].prototype.asc_addComment = function(oComment) {
    var oPlace = oComment.bDocument ? this.wb : this.wb.getWorksheet();
    oPlace.cellCommentator.addComment(oComment);
  };

  prot = asc['spreadsheet_api'].prototype;
  prot['asc_addComment'] = prot.asc_addComment;
})(jQuery, window);

CCellCommentator.prototype.addComment = function(comment, bIsNotUpdate) {
  var t = this;
  var oComment = comment;
  var bChange = false;
  oComment.wsId = this.worksheet.model.getId();
  oComment.setId();

  if (!oComment.bDocument) {
    if (!bIsNotUpdate) {
      oComment.asc_putCol(this.worksheet.getSelectedColumnIndex());
      oComment.asc_putRow(this.worksheet.getSelectedRowIndex());
    }

    var existComments = this.getComments(oComment.nCol, oComment.nRow);
    if (existComments.length) {
      oComment = existComments[0];
      bChange = true;
    } else {
      if ((oComment.nCol != null) && (oComment.nRow != null)) {
        var cellAddress = new CellAddress(oComment.nRow, oComment.nCol, 0);
        oComment.sQuoteText = cellAddress.getID() + " : " + this.worksheet.model.getCell(cellAddress).getValueWithFormat();
      }
    }
  }

  var onAddCommentCallback = function (isSuccess) {
    if (false === isSuccess)
      return;
    t._addComment(oComment, bChange, bIsNotUpdate);
  };
  this.isLockedComment(oComment, onAddCommentCallback);
};