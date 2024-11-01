import express, { request } from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", (request, response) => response.json("Its working"));

app.post("/teams", async function(request, response){
    const {team, position } = request.body;
    const result = await db.query(
        "INSERT INTO football (team, position) VALUES ($1, $2)",
        [team, position]
    );

    response.json(result);
});

app.get("/teams", async function(request, response){
    const result = await db.query(
        "select * from football"
    )
    response.json(result)
})

app.listen(8080, () => console.log("App is running on port 8080"));