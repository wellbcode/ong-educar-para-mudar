// const express = require("express");
// const cors = require("cors");
// const fetch = require("node-fetch");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const ACCESS_TOKEN = ""; 

// app.get("/", (req, res) => {
//   res.send("Servidor Mercado Pago ON ✅");
// });

// app.post("/criar-preferencia", async (req, res) => {
//   try {
//     const { valor } = req.body;

//   const body = {
//   items: [
//     {
//       title: "Doação - ONG Educar para Mudar",
//       quantity: 1,
//       unit_price: Number(valor)
//     }
//   ],
//   back_urls: {
//     success: "http://localhost:5173/agradecimento-doacoes.html",
//     failure: "http://localhost:5173/doacoes.html",
//     pending: "http://localhost:5173/doacoes.html"
//   }
// };

//     console.log("✅ Valor recebido:", valor);
//     console.log("### BODY ENVIADO AO MP ###");
//     console.log(JSON.stringify(body, null, 2));

 

//     const resposta = await fetch("https://api.mercadopago.com/checkout/preferences", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${ACCESS_TOKEN}`,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(body)
//     });

//     const data = await resposta.json();

//     if (data.init_point) {
//       return res.json({ init_point: data.init_point });
//     }

//     console.error("Erro MP:", data);
//     res.status(500).json({ error: "Erro ao criar preferência" });

//   } catch (error) {
//     console.error("Erro servidor:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(3000, () => {
//   console.log("✅ Servidor rodando na porta 3000");
// });

require("dotenv").config();

console.log("Token carregado:", process.env.MP_ACCESS_TOKEN);

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

const ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;

app.get("/", (req, res) => {
  res.send("Servidor Mercado Pago ON ✅");
});

app.post("/criar-preferencia", async (req, res) => {
  try {
    const { valor } = req.body;

    if (!valor || isNaN(valor) || valor <= 0) {
  return res.status(400).json({ error: "Valor inválido para doação." });
}

    const body = {
      items: [
        {
          title: "Doação - ONG Educar para Mudar",
          quantity: 1,
          unit_price: Number(valor)
        }
      ],
      back_urls: {
        success: "http://localhost:5173/agradecimento-doacoes.html",
        failure: "http://localhost:5173/doacoes.html",
        pending: "http://localhost:5173/doacoes.html"
      }
    };

    console.log("✅ Valor recebido:", valor);
    console.log("### BODY ENVIADO AO MP ###");
    console.log(JSON.stringify(body, null, 2));

    const resposta = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const data = await resposta.json();

    if (data.init_point) {
      return res.json({ init_point: data.init_point });
    }

    console.error("Erro MP:", data);
    res.status(500).json({ error: "Erro ao criar preferência" });

  } catch (error) {
    console.error("Erro servidor:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("✅ Servidor rodando na porta 3000");
});
