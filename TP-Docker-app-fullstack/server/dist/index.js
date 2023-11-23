"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Routes
app.get('/server/time', (req, res) => {
    const serverTime = new Date().toLocaleTimeString();
    res.json({ serverTime });
});
app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    res.json({ message: `Bienvenue, ${name} !` });
});
// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
