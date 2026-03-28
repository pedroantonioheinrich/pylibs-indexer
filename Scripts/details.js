
const libIcon = document.getElementById("lib-icon")
const libName = document.getElementById("lib-name")
const libCategory = document.getElementById("lib-category")
const libDescription = document.getElementById("lib-description")
const installCmd = document.getElementById("install-cmd")
const importCmd = document.getElementById("import-cmd")
const commandsContainer = document.getElementById("commands-container")

async function loadDetails() {
    const urlParams = new URLSearchParams(window.location.search)
    const idRequested = urlParams.get('id')

    if (!idRequested) {
        window.location.href = "index.html" 
        return
    }

    try {
        const response = await fetch("./Data/data.json")
        const data = await response.json()

        const lib = data.find(item => item.id === idRequested)

        if (lib) {
            renderPage(lib)
        } else {
            document.body.innerHTML = "<h1>Biblioteca não encontrada!</h1>"
        }
    } catch (error) {
        console.error("Erro ao carregar detalhes:", error)
    }
}

function renderPage(lib) {
    libIcon.textContent = lib.icon
    libName.textContent = lib.name
    libCategory.textContent = lib.category
    libDescription.textContent = lib.description
    installCmd.textContent = lib.installCmd
    importCmd.textContent = lib.importCmd

    commandsContainer.innerHTML = lib.commands.map(cmd => `
        <div class="command-card">
            <h3>${cmd.cmdName}</h3>
            <p>${cmd.cmdDescription}</p>
            <div class="code-wrapper">
                <pre><code>${cmd.cmdCode}</code></pre>
            </div>
            ${cmd.cmdOutput ? `<div class="output-wrapper"><strong>Saída:</strong> <pre>${cmd.cmdOutput}</pre></div>` : ''}
        </div>
    `).join('')
}

loadDetails()