import { app } from "./app";

import { env } from "./core/env";

app.listen(env.PORT, () =>
  console.log(`🚀 Server is running in http://localhost:${env.PORT}`)
);
