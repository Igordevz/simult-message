import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger_output.json'; // Onde o arquivo de saída Swagger será gerado
const endpointsFiles = ['./src/http/router/router.ts']; // Array com o caminho para os arquivos que contêm as definições das rotas da sua API

swaggerAutogen()(outputFile, endpointsFiles);