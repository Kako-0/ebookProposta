/* eslint-disable no-console */
import ky from "ky";
import DataEbook from "../routes/data";

interface DataAPi {
  [key: string]: string;
  tentativas: string;
  nota: string;
}

interface DataHighlight {
  [key: string]: string | string[] | undefined;
  // file?: string;
  highlights: string[];
}
const highlight = {
  page: "1",
  markers: {
    hashid: "1231234",
  },
};

interface IdToken {
  [key: string]: unknown;
  launch: {
    type: string;
    target: string;
    context: {
      id: string;
      label: string;
      title: string;
      type: string[];
    };
    resource: {
      title: string;
      id: string;
    };
    presentation: {
      locale: string;
      document_target: string;
      return_url: string;
    };
    custom: {
      [key: string]: string;
    };
    lineItemId: string;
  };
}

const { endpoint } = DataEbook;

const getURL = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const ltiUrl = urlParams.get("ltiUrl");
  if (ltiUrl) return `${decodeURIComponent(ltiUrl)}/api`;
  return "https://lti.v2.saiteava.org/api";
};

const getLtik = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const ltik = urlParams.get("ltik");
  return ltik;
};

const API = {
  async getIdtoken() {
    const ltik = getLtik();

    if (ltik) {
      try {
        const apiURL = getURL();
        const response = await ky
          .get(`${apiURL}/idtoken`, {
            mode: "cors",
            credentials: "include",
            headers: { Authorization: `Bearer ${ltik}` },
          })
          .json<IdToken["launch"]>();
        return response;
      } catch (err) {
        console.error(err);
      }
    }
    return null;
  },

  async getSufix() {
    const idtoken = await API.getIdtoken();
    const sufix =
      idtoken && idtoken.custom && idtoken.custom.sufix
        ? `_${idtoken.custom.sufix}`
        : "";
    return sufix;
  },

  async getData(key: string) {
    const dataLocal = window.sessionStorage.getItem(key);

    const ltik = getLtik();

    if (ltik) {
      try {
        const apiURL = getURL();
        const response = await ky
          .get(`${apiURL}/data/${key}`, {
            mode: "cors",
            credentials: "include",
            headers: { Authorization: `Bearer ${ltik}` },
          })
          .json<DataAPi>();
        if (response) return response;
      } catch (err) {
        console.error(err);
      }
    }
    if (dataLocal !== null) {
      const data = JSON.parse(dataLocal) as DataAPi;
      return data;
    }
    return null;
  },

  async setData(key: string, data: DataAPi) {
    const obj = {
      data,
      key,
    };
    window.sessionStorage.setItem(key, JSON.stringify(data));
    const ltik = getLtik();
    if (ltik) {
      try {
        const apiURL = getURL();
        await ky.post(`${apiURL}/data`, {
          json: obj,
          mode: "cors",
          credentials: "include",
          headers: { Authorization: `Bearer ${ltik}` },
        });
      } catch (err) {
        console.error(err);
        return false;
      }
    }
    return true;
  },
  // Add as outras funcionalidades (comment, highlight)
  // Verificar o uso dessa função
  async sendGrade(vetor: string) {
    const ltik = getLtik();
    if (!ltik) return false;
    try {
      const body = vetor;
      const apiURL = getURL();

      await ky
        .post(`${apiURL}/grade?${endpoint}`, {
          json: body,
          mode: "cors",
          credentials: "include",
          headers: { Authorization: `Bearer ${ltik}` },
        })
        .json<DataAPi>();

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  async sendComment(key: string, data: DataHighlight) {
    const obj = {
      data,
      key,
    };
    window.sessionStorage.setItem(key, JSON.stringify(data));
    const ltik = getLtik();
    if (!ltik) return false;
    try {
      // if (obj.data.file && obj.data.hashid) {
      //   await this.sendFile(obj.data.hashid, obj.data.file);
      // }
      const apiURL = getURL();
      await ky.post(`${apiURL}/comment`, {
        json: obj,
        mode: "cors",
        credentials: "include",
        headers: { Authorization: `Bearer ${ltik}` },
      });
      return true;
    } catch (err) {
      console.error("errorMessage", ["Erro ao tentar enviar [comment]."]);
      return false;
    }
  },

  async sendHighlight(obj: DataHighlight) {
    const ltik = getLtik();
    try {
      const apiURL = getURL();
      await ky.post(`${apiURL}/highlight`, {
        json: obj,
        mode: "cors",
        credentials: "include",
        headers: { Authorization: `Bearer ${ltik}` },
      });
      return true;
    } catch (err) {
      console.error("errorMessage", ["Erro ao tentar enviar [highlight]."]);
      return false;
    }
  },

  async getComments(key: string) {
    const dataLocal = window.sessionStorage.getItem(key);

    const ltik = getLtik();
    if (ltik) {
      try {
        const apiURL = getURL();
        const response = await ky
          .get(`${apiURL}/comment/all`, {
            mode: "cors",
            credentials: "include",
            headers: { Authorization: `Bearer ${ltik}` },
          })
          .json<DataHighlight>();
        return response;
      } catch (err) {
        console.error("errorMessage", ["Erro ao tentar buscar [comment]."]);
      }
    }
    if (dataLocal !== null) {
      const data = JSON.parse(dataLocal) as DataHighlight;
      return data;
    }
    return null;
  },

  async getHighlights(key: string) {
    const dataLocal = window.sessionStorage.getItem(key);

    const ltik = getLtik();
    if (ltik) {
      try {
        const apiURL = getURL();
        const response = await ky
          .get(`${apiURL}/highlight/all`, {
            mode: "cors",
            credentials: "include",
            headers: { Authorization: `Bearer ${ltik}` },
          })
          .json<DataHighlight>();
        return response;
      } catch (err) {
        console.error("errorMessage", ["Erro ao tentar buscar [highlight]."]);
      }
    }
    if (dataLocal !== null) {
      const data = JSON.parse(dataLocal) as DataAPi;
      return data;
    }
    return null;
  },

  // Delete comment and highlight
  async deleteComment(id: string) {
    const ltik = getLtik();
    try {
      const apiURL = getURL();
      this.deleteFile(id);
      await ky.delete(`${apiURL}/comment/${id}`, {
        mode: "cors",
        credentials: "include",
        headers: { Authorization: `Bearer ${ltik}` },
      });
      return true;
    } catch (err) {
      console.error("errorMessage", ["Erro ao tentar enviar [comment]."]);
      return false;
    }
  },

  async deleteHighlight(id: string) {
    const ltik = getLtik();
    try {
      const apiURL = getURL();
      await ky.delete(`${apiURL}/highlight/${id}`, {
        mode: "cors",
        credentials: "include",
        headers: { Authorization: `Bearer ${ltik}` },
      });
      return true;
    } catch (err) {
      console.error("errorMessage", ["Erro ao tentar enviar [comment]."]);
      return false;
    }
  },

  async updateComment(id: string, comment: { file: string; content: string }) {
    const ltik = getLtik();
    try {
      const apiURL = getURL();
      if (comment.file) {
        await this.sendFile(id, comment.file);
      }
      const obj = {
        comment: comment.content,
      };
      await ky.post(`${apiURL}/comment/${id}`, {
        json: obj,
        mode: "cors",
        credentials: "include",
        headers: { Authorization: `Bearer ${ltik}` },
      });
      return true;
    } catch (err) {
      console.error("errorMessage", ["Erro ao tentar enviar [comment]."]);
      return false;
    }
  },

  async sendFile(key: string, file: string) {
    const ltik = getLtik();
    try {
      const apiURL = getURL();
      const formData = new FormData();
      formData.append("file", file);
      formData.append("key", key);
      await ky.post(`${apiURL}/files`, {
        body: formData,
        mode: "cors",
        credentials: "include",
        headers: { Authorization: `Bearer ${ltik}` },
      });
      return true;
    } catch (err) {
      return false;
    }
  },

  async getFile(id: string) {
    const ltik = getLtik();
    try {
      const apiURL = getURL();
      const file = await ky
        .get(`${apiURL}/files/${id}`, {
          mode: "cors",
          credentials: "include",
          headers: { Authorization: `Bearer ${ltik}` },
        })
        .json();
      return file;
    } catch (err) {
      return false;
    }
  },

  async deleteFile(id: string) {
    const ltik = getLtik();
    try {
      const apiURL = getURL();
      await ky.delete(`${apiURL}/files/${id}`, {
        mode: "cors",
        credentials: "include",
        headers: { Authorization: `Bearer ${ltik}` },
      });
      return true;
    } catch (err) {
      return false;
    }
  },
};

export default API;
