import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export async function RotaLimgrave() {
  try {
    const resposta = await api.get("/limgrave");
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

export async function RotaCaelid() {
  try {
    const resposta = await api.get("/caelid");
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

//getRegiao: async (nome) => {
//const resposta = await api.get(`/${nome}`);
// return resposta.data;
//};
