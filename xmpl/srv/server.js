const cds = require('../../cds-plugin')

async function generateOpenAPI (filePath) {
    const openapiFile = await cds.compile(`file:${filePath}`).to.openapi({ service: "ProcessorService" });
    console.log(openapiFile)
}

generateOpenAPI('./srv/services.cds')
