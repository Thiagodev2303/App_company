import fastify from 'fastify';


import { PrismaClient } from '@prisma/client';


const app = fastify()


const prisma = new PrismaClient();

app.get('/groups', async () =>{
    const group = await prisma.group.findMany()
    return group
})

app.get('/storages', async () =>{
    const storage = await prisma.storage.findMany()
    return storage
})

app.get('/products', async () =>{
    const product = await prisma.product.findMany()
    return product
})
 
app.listen({
    port: 3333,
}).then(() => {
    console.log('Server is running on port 3333')
})