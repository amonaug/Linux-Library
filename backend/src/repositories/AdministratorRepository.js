import prisma from "../prisma";

class AdministratorRepository {
    
    async create(data){
        return await prisma.administrator.create({
            data:{
                userName: data.userName,
                password_hash: data.password_hash,
                created_at: new Date()
            }
        });
    }

    async findById(id){
        const administrator = await prisma.administrator.findUnique({
            where:{
                id: id
            }
        });
        return administrator;
    }

    async findAll(){
        return await prisma.administrator.findAll();
    }

    async update(id, data){
        return await prisma.administrator.update({
            where:{
                id: id
            },
            data:data, 
        });
    }

    async delete(id){
        return await prisma.administrator.delete({
            where:{
                id: id
            }
        });
    }
}

const administratorRepository = new AdministratorRepository();
export default administratorRepository;