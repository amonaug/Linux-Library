import DistribuitionRepository from "../repositories/DistribuitionRepository.js";

class DistribuitionService {
    async createDistribuition(distributionData) {
        if (!distributionData.name || !distributionData.description) {
            throw new Error("Name and description are required");
        }

        const newDistribution = await DistribuitionRepository.create(distributionData);
        return newDistribution;
    }

    async listAllDistribuitions() {
        return await DistribuitionRepository.findAll();
    }

    async getDistribuitionById(id) {
        const distribution = await DistribuitionRepository.findById(id);

        if (!distribution) {
            throw new Error("Distribuition not found");
        }

        return distribution;
    }

    async updateDistribuition(id, updateData) {
        if (updateData.name && updateData.name.length < 3) {
            throw new Error("Name must have at least 3 characters");
        }

        return await DistribuitionRepository.update(id, updateData);
    }

    async deleteDistribuition(id) {
        const distribution = await DistribuitionRepository.findById(id);

        if (!distribution) {
            throw new Error("Distribuition not found");
        }

        return await DistribuitionRepository.delete(id);
    }
}

const distribuitionService = new DistribuitionService();
export default distribuitionService;
