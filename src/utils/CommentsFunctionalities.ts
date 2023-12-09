import $ from "jquery";
import crypto from "crypto";
import { ltiurl, ltikey } from "./LTI";

export default class Comentario {
  static async criarComentario(id, pos, array, page) {
    const response = await this.abrirMenuComentario(pos, array, page);
    if (response) {
      const time = Date.now();
      const commentText = response.comment + time;
      const hashid = crypto
        .createHash("sha1")
        .update(commentText)
        .digest("hex");

      const cmt = {
        hashid,
        highlight: id,
        comment: response.comment,
        file: response.file,
      };
      return cmt;
    }
    return false;
  }

  static async abrirMenuComentario(pos, array, page) {
    $(".addComentario").remove();
    const response = await this.desenhaCaixaComentario(pos, array, page);
    return response;
  }

  static desenhaCaixaComentario(pos, array, page) {
    return new Promise((resolve) => {
      const CommentsPage = this.findByPage(array.Comments, page);
      let file;
      let menu =
        '<div class="addComentario"><div class="comment-head">Comentário ';

      if (CommentsPage.length + 1 < 10) {
        menu = `${menu}0${
          CommentsPage.length + 1
        } <div class="comment-close">x</div></div><div class="comment-body"><textarea class="comment-text" placeholder="Insira aqui seu comentário."></textarea></div><div class="comment-footer"><div class="comment-publish">PUBLICAR</div><label class="comment-label" style="width:8%"><div class="comment-attach icon-attachment" /><input  class="comment-label comment-attachment"style="display:none" type="file" id="submission" accept=".png,.jpg,.jpeg" /></label></div></div>`;
      } else {
        menu = `${
          menu + (CommentsPage.length + 1)
        } <div class="comment-close">x</div></div><div class="comment-body"><textarea class="comment-text" placeholder="Insira aqui seu comentário."></textarea></div><div class="comment-footer"><div class="comment-publish">PUBLICAR</div><label class="comment-label" style="width:8%"><div class="comment-attach icon-attachment" /><input  class="comment-label comment-attachment"style="display:none" type="file" id="submission" accept=".png,.jpg,.jpeg" /></label></div></div>`;
      }

      $(menu).appendTo("body");

      $(".addComentario").css("top", pos);
      $(".addComentario").css("right", "1%");

      $(".addComentario").fadeIn("fast");
      $(".comment-attachment").off("change");
      $(".comment-attachment").on("change", (event) => {
        file = event.target.files[0];
      });

      $(document).on("mousedown touchstart", function (event) {
        if (window.getSelection() == "") {
          if (
            !(
              $(event.target).hasClass("addComentario") ||
              $(event.target).hasClass("comment-head") ||
              $(event.target).hasClass("comment-body") ||
              $(event.target).hasClass("comment-publish") ||
              $(event.target).hasClass("comment-attach") ||
              $(event.target).hasClass("comment-label") ||
              $(event.target).hasClass("comment-footer") ||
              $(event.target).hasClass("comment-text") ||
              $(event.target).hasClass("comentarios")
            )
          ) {
            $(".addComentario").fadeOut("fast");
            $(document).off("mousedown touchstart");

            resolve(false);
          }
        }
      });

      $(".comment-publish").click(() => {
        const comment = $(".comment-text").val();
        const response = {
          comment,
          file,
        };
        $(".addComentario").fadeOut("fast");
        $(document).off("mousedown touchend");
        if (comment != "") {
          resolve(response);
        } else {
          resolve(false);
        }
      });
    });
  }

  static abrirMenuComentarios(cmt, hgt, array, page) {
    return new Promise((resolve) => {
      if (!$(".comments_btn").hasClass("active_btn")) {
        $(".comments_btn").addClass("active_btn");

        const list = this.findByPage(array, page);
        const cmtNum = list.findIndex((x) => x.hashid == cmt.hashid) + 1;

        let comment = `<div class="cmt mc" data-modal-selector="#cmt_text${cmt.hashid}" id="cmt${cmt.hashid}">`;

        if (parseInt(cmtNum) < 10) {
          comment = `${comment}0${cmtNum}</div>`;
        } else {
          comment = `${comment + cmtNum}</div>`;
        }

        $(comment).appendTo(".content");

        const largest = this.getLargestHgt(hgt);
        const window_width = $(window).width();

        if (
          largest.offset + largest.width + $(`#cmt${cmt.hashid}`).width() >=
          $(".content").width()
        ) {
          $(`#cmt${cmt.hashid}`).offset({
            top: $(`div[hgt=${hgt}]`).offset().top - 25,
            left: largest.offset + largest.width - 30,
          });
        } else {
          $(`#cmt${cmt.hashid}`).offset({
            top: $(`div[hgt=${hgt}]`).offset().top,
            left: largest.offset + largest.width + 5,
          });
        }

        let div_cmt = `<div class="div_cmt modal_content" id="div_cmt${cmt.hashid}"><div class="comment-head modal_content">Comentário `;

        if (parseInt(cmtNum) + 1 < 10) {
          div_cmt =
            `${div_cmt}0${cmtNum} <div class="comment-close ">x</div><div class="comment-exclude icon-bin modal_content"></div><div class="comment-edit icon-pencil2 modal_content"></div><a href="${ltiurl()}/files/${
              cmt.hashid
            }/download` +
            `?ltik=${ltikey(
              true
            )}" class="comment-download icon-download modal_content"></a></div><div class="comment-body modal_content"><div class="comment-text modal_content">${
              cmt.comment
            }</div></div><div class="comment-footer comment-footer-edit modal_content"><div class="comment-publish modal_content">PUBLICAR</div><label class="comment-label modal_content" style="width:8%"><div class="comment-attach icon-attachment modal_content" /><input class="comment-label comment-attachment modal_content"style="display:none" type="file" id="submission" accept=".png,.jpg,.jpeg" /></label></div></div>`;
        } else {
          div_cmt =
            `${
              div_cmt + parseInt(cmtNum)
            } <div class="comment-close ">x</div><div class="comment-exclude icon-bin modal_content"></div><div class="comment-edit icon-pencil2 modal_content"></div><a href="${ltiurl()}/files/${
              cmt.hashid
            }/download` +
            `?ltik=${ltikey(
              true
            )}" class="comment-download icon-download modal_content"></a></div><div class="comment-body modal_content"><div class="comment-text modal_content">${
              cmt.comment
            }</div></div><div class="comment-footer comment-footer-edit modal_content"><div class="comment-publish modal_content">PUBLICAR</div><label class="comment-label modal_content" style="width:8%"><div class="comment-attach icon-attachment modal_content" /><input class="comment-label comment-attachment modal_content"style="display:none" type="file" id="submission" accept=".png,.jpg,.jpeg" /></label></div></div>`;
        }

        $(div_cmt).appendTo("body");

        $(".cmt").click(function () {
          const window_width = $(window).width();

          $(`#div_cmt${cmt.hashid}`).fadeIn("fast");
          $(`#div_cmt${cmt.hashid}`).css("display", "flex");
        });

        $(".comment-exclude").click(() => {
          $(`div[hgt=${hgt}]`).each(function () {
            $(this).removeAttr("hgt");
            $(this).removeClass("highlight");
            $(this).removeClass("highlight_cmt");
            $(this).off("click");
            $(this).addClass("normalDiv");
          });

          const response = {
            type: 2,
            id: cmt.hashid,
          };
          this.closeMenu_Comentarios();
          resolve(response);
        });

        $(window).on("comment-exclude", () => {
          $(`div[hgt=${hgt}]`).each(function () {
            $(this).removeAttr("hgt");
            $(this).removeClass("highlight");
            $(this).removeClass("highlight_cmt");
            $(this).off("click");
            $(this).addClass("normalDiv");
          });

          const response = {
            type: 2,
            id: cmt.hashid,
          };
          this.closeMenu_Comentarios();
          $(window).off("comment-exclude");
          resolve(response);
        });

        $(".comment-edit").click(() => {
          $(".comment-footer-edit").css("display", "flex");

          $(".div_cmt").addClass("on_edit");
          this.editComment().then((response) => {
            const edit = {
              type: 1,
              id: cmt.hashid,
              content: response.comment,
              file: response.file,
            };
            this.closeMenu_Comentarios();
            resolve(edit);
          });
        });

        $(window).on("comment-edit", () => {
          $(".comment-footer-edit").css("display", "flex");
          this.editComment_Modal().then((response) => {
            const edit = {
              type: 1,
              id: cmt.hashid,
              content: response,
            };
            this.closeMenu_Comentarios();
            $(window).off("comment-edit");
            resolve(edit);
          });
        });

        $(".comment-close").click(() => {
          const response = {
            type: 0,
          };
          this.closeMenu_Comentarios();

          resolve(response);
        });

        $(window).on("comment-close", () => {
          const response = {
            type: 0,
          };
          this.closeMenu_Comentarios();
          $(window).off("comment-close");
          resolve(response);
        });

        $("html").on("mousedown", (e) => {
          if (
            $(".div_cmt").length >= 1 &&
            !$(e.target).hasClass("modal_content") &&
            !$(e.target).hasClass("cmt")
          ) {
            const response = {
              type: 0,
            };
            this.closeMenu_Comentarios();

            resolve(response);
          }
        });
      } else {
        const response = {
          type: 0,
        };
        this.closeMenu_Comentarios();
        resolve(response);
      }
    });
  }

  static getLargestHgt(hgt) {
    const largest = {
      width: 0,
      offset: 0,
    };
    let width = 0;
    let offset;
    $(`div[hgt=${hgt}]`).each(function () {
      if (width < $(this).width()) {
        width = $(this).width();
        offset = $(this).offset().left;
      }
    });
    largest.width = width;
    largest.offset = offset;

    return largest;
  }

  static closeMenu_Comentarios() {
    $(".cmt").each(function () {
      $(this).remove();
    });

    $(".div_cmt").each(function () {
      $(this).remove();
    });

    $(".comments_btn").removeClass("active_btn");
  }

  static editComment() {
    return new Promise((resolve) => {
      const divHtml = $(".comment-text.modal_content").html();
      const editableText = $(
        "<textarea class='comment-text-edit modal_content' />"
      );

      editableText.val(divHtml);
      $(".comment-text.modal_content").replaceWith(editableText);
      editableText.focus();

      $(".comment-publish").off("click");
      let file;
      $(".comment-attachment").off("change");
      $(".comment-attachment").on("change", (event) => {
        console.log("found file");
        file = event.target.files[0];
      });

      $(".comment-publish").click(() => {
        const html = $(".comment-text-edit").val();
        const viewableText = $("<div class='comment-text modal_content'>");
        viewableText.html(html);
        $(".comment-text-edit").replaceWith(viewableText);

        $(".comment-footer-edit").hide();
        $(".div_cmt").removeClass("on_edit");

        const response = {
          comment: html,
          file,
        };
        resolve(response);
      });
    });
  }

  static editComment_Modal() {
    return new Promise((resolve) => {
      const divHtml = $(".content").html();
      console.log(`First: ${divHtml}`);
      const editableText = $(
        "<textarea class='comment-text-edit content mc' />"
      );

      editableText.val(divHtml);
      $(".content").replaceWith(editableText);
      editableText.focus();

      $(".comment-footer-edit").off("click");

      $(".comment-footer-edit").click(function () {
        const html = $(".comment-text-edit").val();

        const viewableText = $("<div class='content mc'>");
        viewableText.html(html);
        $(".comment-text-edit").replaceWith(viewableText);

        $(".comment-footer-edit").hide();
        console.log(`New: ${html}`);
        resolve(html);
      });
    });
  }

  static findByPage(Arr, Page) {
    const result = [];
    for (const i of Arr) {
      if (i.page === Page) result.push(i);
    }
    return result;
  }
}
