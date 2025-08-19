console.log(`usai index.js at ${Date()}`);

(async function(){
    // anonymous asynchronous execution, note use of command line module, cli
    const usai = await import('../usai/usai.mjs')
    const cli = await import('../cli/cli.mjs')
    usai.msg(`usai methods: ${Object.getOwnPropertyNames(usai)}`,'usaimsg')
})();