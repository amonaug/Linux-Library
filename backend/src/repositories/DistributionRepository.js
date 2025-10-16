import prisma from "../prisma";

class DistributionRepository {
    
    async create(data){
        return await prisma.distribution.create({
            data:{
                name: data.name,
                description: data.description,
                logo: data.logo,
            }
        });
    }

    async findById(id){
        return await prisma.distribution.findUnique({
            where:{
                id: id
            }
        });
    }

    async findAll(){
        return await prisma.distribution.findMany();
    }

    async update(id, data){
        return await prisma.distribution.update({
            where:{
                id: id
            },
            data:data, 
        });
    }

    async delete(id){
        return await prisma.distribution.delete({
            where:{
                id: id
            }
        });
    }
}