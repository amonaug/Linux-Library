import distribuitionService from "../services/DistribuitionService";

class DistributionController {
    async createDistribuition(req, res) {
        try { 
            const newDistribution = await distribuitionService.createDistribuition(req.body);
            res.status(201).json(newDistribution);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const distributions = await distribuitionService.listAllDistribuitions();
            res.json(distributions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const {id} = req.params;
            const distribution = await distribuitionService.getDistribuitionById(id);
            return res.status(200).json(distribution);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const updatedDistribution = await distribuitionService.updateDistribuition(id, req.body);
            res.json(updatedDistribution);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            await distribuitionService.deleteDistribuition(id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
    
}