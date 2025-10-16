/**
 * Modelo de dados para um link de download (DownloadLink.js)
 */
class DownloadLink {
    /**
     * @param {number} id - Identificador único do registro de download.
     * @param {string} nome - Nome do arquivo para exibição ao usuário.
     * @param {string} tipoArquivo - Tipo do arquivo (ex: 'PDF', 'PNG', 'ZIP').
     * @param {string} caminhoUrl - O URL ou path real para iniciar o download.
     * @param {number} [tamanhoBytes=0] - O tamanho do arquivo em bytes.
     */
    constructor(id, nome, tipoArquivo, caminhoUrl, tamanhoBytes = 0) {
        this.id = id;
        this.nome = nome;
        this.tipoArquivo = tipoArquivo;
        this.caminhoUrl = caminhoUrl;
        this.tamanhoBytes = tamanhoBytes;
    }

    /**
     * Método de exemplo para formatar o tamanho para exibição.
     */
    get tamanhoFormatado() {
        if (this.tamanhoBytes > 1048576) {
             return (this.tamanhoBytes / 1048576).toFixed(2) + ' MB';
        }
        if (this.tamanhoBytes > 1024) {
             return (this.tamanhoBytes / 1024).toFixed(2) + ' KB';
        }
        return this.tamanhoBytes + ' B';
    }
}