const express = require('express');
const app = express();
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const swaggerJsDoc = require('swagger-jsdoc');
const { SwaggerTheme, SwaggerThemeNameEnum } = require('swagger-themes');
const theme = new SwaggerTheme();
const sonicRouter = require('./routes/server.js')

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Sonic API',
        version: '1.0.0',
      },
        servers:[{url: "http://localhost:8080"}],
    },
    apis:[`${path.join(__dirname,"./routes/server.js")}`],
  };
  
  const options = {
    explorer: true,
    customCss: theme.getBuffer(SwaggerThemeNameEnum.OUTLINE)
  };

app.use(express.json());

app.use('/', sonicRouter);

app.listen(8080, () => {
    console.log(`App listening on port ${8080} =)`)
});

//Middleware
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs, options));