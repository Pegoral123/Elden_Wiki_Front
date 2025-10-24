import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export async function Limgrave_bosses() {
  try {
    const resposta = await api.get("/boss/limgrave_bosses");
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

export async function caelid_bosses() {
  try {
    const resposta = await api.get("/boss/caelid_bosses");
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

export async function RotaLimgrave() {
  try {
    const resposta = await api.get("/locations/limgrave");
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

export async function RotaCaelid() {
  try {
    const resposta = await api.get("/locations/caelid");
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

//getRegiao: async (nome) => {
//const resposta = await api.get(`/${nome}`);
// return resposta.data;
//};
