const fs = require('fs')


export function createFile(nameFile, fileExtension, content){
    // Cria o arquivo
    return fs.writeFileSync(`${nameFile}.${fileExtension}`, `${content}`)
}

export function saveFile(filePath, content){
    // Adiciona ao final do arquivo
    fs.appendFileSync(`${filePath}`, `${content}`, 'utf-8')
}

export function readFile(filePath){
    // Lê arquivo
    console.log(fs.readFileSync(`${filePath}`, 'utf8'))
}

// createFile('joguinho', 'txt', 'oioioio')

// readFile('joguinho.txt')