import {exec} from "shelljs";

const scriptsToExecute = [
    'scripts/generate-origin-deckbuilding-rules.ts',
    'scripts/generate-champions.ts',
    'scripts/generate-riot-globals.ts'
]

scriptsToExecute.forEach(scriptPath => {
    console.log(`Iniciando execução do script ${scriptPath}`)
    exec(`npm run tsnode ${scriptPath}`)
    console.log(`Execução do script ${scriptPath} finalizada`)
})
