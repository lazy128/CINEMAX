import express from "express";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import { RedisStore } from "rate-limit-redis";
import { createClient } from "redis";
import { appError } from "./src/common/helpers/app-error.helper.js";
import rootRouter from "./src/routers/root.router.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { logApi } from "./src/common/middlewares/log-api.middleware.js";
import { initLoginGooglePassport } from "./src/common/passport/login-google.passport.js";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./src/common/swagger/init.swagger.js";
import { initSocket } from "./src/common/socket/init.socket.js";

const app = express();

app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

const defaultAllowedOrigins = [
  "https://the-chosen-one-plum.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:8080",
  "http://192.168.56.1:8080",
  "http://172.27.48.1:8080",
];
const envAllowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((origin) => origin.trim()).filter(Boolean)
  : [];
const allowedOrigins = new Set([...defaultAllowedOrigins, ...envAllowedOrigins]);

function isDevPrivateOrigin(origin) {
  if (process.env.NODE_ENV === "production") return false;

  try {
    const { hostname, port } = new URL(origin);
    const isPrivateHost =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname.startsWith("192.168.") ||
      hostname.startsWith("10.") ||
      /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname);

    return isPrivateHost && ["3000", "5000", "5173", "8080"].includes(port);
  } catch {
    return false;
  }
}
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.has(origin) || isDevPrivateOrigin(origin)) {
      callback(null, true);
    } else {
      console.error(`Blocked by CORS: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));

app.set('trust proxy', 1);

const limiterOptions = {
  windowMs: 15 * 60 * 1000,
  max: 3000,
  standardHeaders: true,
  legacyHeaders: false,
};

if (process.env.REDIS_URL) {
  const redisClient = createClient({
    url: process.env.REDIS_URL
  });
  redisClient.connect().catch(err => console.error("Redis Connection Error:", err));
  
  limiterOptions.store = new RedisStore({
    sendCommand: (...args) => redisClient.sendCommand(args),
  });
}

const limiter = rateLimit(limiterOptions);
app.use(limiter);

app.use(express.json());
app.use(cookieParser());

app.use(logApi("product"));

initLoginGooglePassport();
app.use(express.static("public"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api", rootRouter);
app.use(appError);

const httpServer = initSocket(app);

const PORT = process.env.PORT || 3069;
const server = httpServer.listen(PORT, () => {
    console.log(`Server online at port: ${PORT}`);
});
server.requestTimeout = Number(process.env.REQUEST_TIMEOUT_MS || 120000);
