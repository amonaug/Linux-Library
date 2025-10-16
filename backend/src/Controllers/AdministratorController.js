import administratorService from "../services/AdministratorService";

class AdministratorController {
    async createAdministrator(req, res) {
        try { 
            const newAdministrator = await administratorService.createAdministrator(req.body);
            res.status(201).json(newAdministrator);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    
    async findAll(req, res) {
        try {
            const administrators = await administratorService.listAllAdministrators();
            res.json(administrators);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const {id} = req.params;
            const administrator = await administratorService.getAdministratorById(id);
            return res.status(200).json(administrator);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const updatedAdministrator = await administratorService.updateAdministrator(id, req.body);
            res.json(updatedAdministrator);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            await administratorService.deleteAdministrator(id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

}