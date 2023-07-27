import connectionDB from "../config/data/database";
import loginUsuario from "../config/services/user/loginUsuario.js";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { clave, username } = req.body;
            await connectionDB()

            const data = await loginUsuario(username, clave)

            return res.status(200).json({ data });

        } catch (error) {
            return res.status(500).json({ data });
        }
    } else {
        return res.status(405).json({
            status: "error",
            message: "Método no permitido",
            data: null,
        });
    }
}