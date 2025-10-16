import bcrypt from "bcrypt";
import administratorRepository from "../repositories/AdministratorRepository.js";

class AdministratorService {
    async createAdministrator(adminData) {
        if (!adminData.username || !adminData.password) {
            throw new Error("Username and password are required");
        }
        const hashedPassword = await bcrypt.hash(adminData.password, 10);

        const newAdmin = await administratorRepository.create({
            ...adminData,
            password: hashedPassword,
        });

        return newAdmin;
    }

    async listAllAdministrators() {
        return await administratorRepository.findAll();
    }

    async getAdministratorById(id) {
        const admin = await administratorRepository.findById(id);
        if (!admin) throw new Error("Administrator not found");
        return admin;
    }

    async updateAdministrator(id, updateData) {
        if (updateData.username && updateData.username.length < 3) {
            throw new Error("Username must have at least 3 characters");
        }

        // Se for alterar senha, também precisa criptografar
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }

        return await administratorRepository.update(id, updateData);
    }

    async deleteAdministrator(id) {
        const admin = await administratorRepository.findById(id);
        if (!admin) throw new Error("Administrator not found");
        return await administratorRepository.delete(id);
    }
}

const administratorService = new AdministratorService();
export default administratorService;
