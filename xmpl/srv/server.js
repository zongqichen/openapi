
async function generateOpenAPI (filePath) {
    const openapiFile = await cds.compile(`file:${filePath}`).to.openapi()
    // const openapiFile = await cds
    //         .compile(`file:${filePath}`)
    //         .to[openapi]({
    //             service: 'all',
    //         });
    console.log(openapiFile)
}

generateOpenAPI('./srv/services.cds')
