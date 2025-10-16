/**
 * Classe principal para representar o Usuário do sistema (MODEL).
 * Utiliza Composição para gerenciar perfis de acesso.
 */
class Administrador {
    /**
     * @param {number} id - Identificador único do usuário.
     * @param {string} nome - Nome completo do usuário.
     * @param {string} email - Email do usuário.
     * @param {string} senhaHash - O hash da senha.
     */
    constructor(id, nome, email, senhaHash, perfis = []) {
        // Atributos
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senhaHash = senhaHash;
    }


    /**
     * Retorna uma representação do usuário sem informações sensíveis.
     * @returns {object}
     */
    toJson() {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            perfis: this.perfis
        };
    }
}