import $ from "jquery";
import crypto from "crypto";

export default class Marker {
  static marcaTexto(array, mode, page) {
    return new Promise((resolve) => {
      $("html").css("cursor", "text");
      let text = window.getSelection().toString();
      if (text != "") {
        const containerEl = $(".content")[0];
        const doc = containerEl.ownerDocument;
        const win = doc.defaultView;
        const pos = $(window.getSelection().anchorNode.parentElement).offset()
          .top;
        const userSelection = win.getSelection().getRangeAt(0);

        const selec = this.saveSelection(containerEl);
        const safeRanges = this.getSafeRanges(userSelection);

        const hashid = crypto
          .createHash("sha1")
          .update(JSON.stringify(text) + Date.now())
          .digest("hex");
        for (let i = 0; i < safeRanges.length; i++) {
          this.highlightRange(safeRanges[i], mode, hashid);
        }

        $("html").css("cursor", "auto");
        $(".mainFrame").off("mouseup touchend");
        $(".marker_btn").removeClass("active_btn");
        $(".comments_btn").removeClass("active_btn");

        resolve(this.salvaMarcacao(text, mode, array, selec, pos, hashid));
      } else {
        $(".mainFrame").off("mouseup touchend");
        $(".mainFrame").on("mouseup touchend", (e) => {
          if (!$(e.target).hasClass("marker_btn")) {
            if ($(e.target).hasClass("marker_btn")) {
              $(".marker_btn").addClass("active_btn");
            }
            text = "";
            if (window.getSelection) {
              const text = window.getSelection().toString();
              if (text != "") {
                const containerEl = $(".content")[0];
                const doc = containerEl.ownerDocument;
                const win = doc.defaultView;
                const pos = $(
                  window.getSelection().anchorNode.parentElement
                ).offset().top;
                const userSelection = win.getSelection().getRangeAt(0);

                const selec = this.saveSelection(containerEl);
                const safeRanges = this.getSafeRanges(userSelection);

                const hashid = crypto
                  .createHash("sha1")
                  .update(JSON.stringify(text) + Date.now())
                  .digest("hex");
                for (let i = 0; i < safeRanges.length; i++) {
                  this.highlightRange(safeRanges[i], mode, hashid);
                }
                $("html").css("cursor", "auto");
                $(".mainFrame").off("mouseup touchend");
                $(".marker_btn").removeClass("active_btn");
                $(".comments_btn").removeClass("active_btn");

                resolve(
                  this.salvaMarcacao(text, mode, array, selec, pos, hashid)
                );
              }
            } else resolve(false);
          }
        });
      }
    });
  }

  static highlightRange(range, mode, id) {
    const newNode = document.createElement("div");
    if (mode == 1) {
      newNode.classList.add("highlight");
    } else {
      newNode.classList.add("highlight_cmt");
    }

    newNode.setAttribute("hgt", id);
    range.surroundContents(newNode);
  }

  static getSafeRanges(dangerous) {
    const a = dangerous.commonAncestorContainer;
    // Starts -- Work inward from the start, selecting the largest safe range
    const s = new Array(0);
    const rs = new Array(0);
    if (dangerous.startContainer != a) {
      for (var i = dangerous.startContainer; i != a; i = i.parentNode) {
        s.push(i);
      }
    }

    if (s.length > 0) {
      for (var i = 0; i < s.length; i++) {
        const xs = document.createRange();
        if (i) {
          xs.setStartAfter(s[i - 1]);
          xs.setEndAfter(s[i].lastChild);
        } else {
          xs.setStart(s[i], dangerous.startOffset);
          xs.setEndAfter(
            s[i].nodeType == Node.TEXT_NODE ? s[i] : s[i].lastChild
          );
        }
        rs.push(xs);
      }
    }

    // Ends -- basically the same code reversed
    const e = new Array(0);
    const re = new Array(0);
    if (dangerous.endContainer != a) {
      for (var i = dangerous.endContainer; i != a; i = i.parentNode) {
        e.push(i);
      }
    }

    if (e.length > 0) {
      for (var i = 0; i < e.length; i++) {
        const xe = document.createRange();
        if (i) {
          xe.setStartBefore(e[i].firstChild);
          xe.setEndBefore(e[i - 1]);
        } else {
          xe.setStartBefore(
            e[i].nodeType == Node.TEXT_NODE ? e[i] : e[i].firstChild
          );
          xe.setEnd(e[i], dangerous.endOffset);
        }
        re.unshift(xe);
      }
    }

    // Middle -- the uncaptured middle
    if (s.length > 0 && e.length > 0) {
      var xm = document.createRange();
      xm.setStartAfter(s[s.length - 1]);
      xm.setEndBefore(e[e.length - 1]);
    } else {
      return [dangerous];
    }

    // Concat
    rs.push(xm);
    const response = rs.concat(re);

    // Send to Console
    return response;
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

  static salvaMarcacao(text, mode, array, userSelection, pos, id) {
    const hgt = {
      hashid: id,
      highlight: {
        text,
        selection: userSelection,
        position: pos,
        mode,
      },
    };
    return hgt;
  }

  static deletarMarcacao(hgt) {
    return new Promise((resolve) => {
      if (!$(".delcmt").length) {
        const icone = `<div class="delcmt icon-cross justify-content-center d-flex align-items-center" id="delcmt${hgt}"></div>`;
        $(icone).appendTo(".content");

        const largest = this.getLargestHgt(hgt);

        const window_width = $(window).width();

        const iOS =
          /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        if (
          largest.offset + largest.width + $(`#delcmt${hgt}`).width() >=
          $(".content").width()
        ) {
          $(`#delcmt${hgt}`).offset({
            top: $(`div[hgt=${hgt}]`).offset().top - 25,
            left: largest.offset + largest.width - 30,
          });
        } else {
          $(`#delcmt${hgt}`).offset({
            top: $(`div[hgt=${hgt}]`).offset().top,
            left: largest.offset + largest.width + 5,
          });
        }

        $(".delcmt").click(() => {
          this.excluiMarcacao(hgt);
          resolve(true);
        });

        $("html").mousedown(function (e) {
          if ($(".delcmt").length >= 1 && !$(e.target).hasClass("delcmt")) {
            $(".delcmt").remove();
            resolve(false);
          }
        });
      }
    });
  }

  static excluiMarcacao(id) {
    $(`div[hgt=${id}]`).each(function () {
      $(this).removeAttr("hgt");
      $(this).removeClass("highlight");
      $(this).removeClass("highlight_cmt");
      $(this).off("click");
      $(this).addClass("normalDiv");
      $(".delcmt").remove();
    });
  }

  static rebuildHgt(array, page) {
    for (const i of this.findByPage(array, page)) {
      const range = this.restoreSelection(i.highlight.selection);
      const safeRanges = this.getSafeRanges(range);
      for (let j = 0; j < safeRanges.length; j++) {
        this.highlightRange(safeRanges[j], i.highlight.mode, i.hashid);
      }
    }
  }

  static saveSelection(containerEl) {
    const doc = containerEl.ownerDocument;
    const win = doc.defaultView;
    const range = win.getSelection().getRangeAt(0);
    const preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(containerEl);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    const start = preSelectionRange.toString().length;

    return {
      start,
      end: start + range.toString().length,
    };
  }

  static restoreSelection(savedSel) {
    const containerEl = $(".content")[0];
    const doc = containerEl.ownerDocument;
    const win = doc.defaultView;
    let charIndex = 0;
    const range = doc.createRange();
    range.setStart(containerEl, 0);
    range.collapse(true);
    const nodeStack = [containerEl];
    let node;
    let foundStart = false;
    let stop = false;

    while (!stop && (node = nodeStack.pop())) {
      if (node.nodeType == 3) {
        const nextCharIndex = charIndex + node.length;
        if (
          !foundStart &&
          savedSel.start >= charIndex &&
          savedSel.start <= nextCharIndex
        ) {
          range.setStart(node, savedSel.start - charIndex);
          foundStart = true;
        }
        if (
          foundStart &&
          savedSel.end >= charIndex &&
          savedSel.end <= nextCharIndex
        ) {
          range.setEnd(node, savedSel.end - charIndex);
          stop = true;
        }
        charIndex = nextCharIndex;
      } else {
        let i = node.childNodes.length;
        while (i--) {
          nodeStack.push(node.childNodes[i]);
        }
      }
    }

    return range;
  }

  static findByPage(Arr, Page) {
    const result = [];
    for (const i of Arr) {
      if (i.page === Page) result.push(i);
    }
    return result;
  }
}
