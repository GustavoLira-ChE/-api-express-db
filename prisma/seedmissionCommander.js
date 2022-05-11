const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const msUser = await prisma.missionCommander.upsert({
            where: { name: "Woopa" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mainStack: "JavaScript",
                currentEnrollment: true,
                hasAzureCertification: false
            },
        });

        const woopa1 = await prisma.missionCommander.upsert({
            where: { name: "Woopa1" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mainStack: "JavaScript",
                currentEnrollment: true,
                hasAzureCertification: false
            },
        });

        const woopa2 = await prisma.missionCommander.upsert({
            where: { name: "Woopa 2" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mainStack: "VueJS",
                currentEnrollment: true,
                hasAzureCertification: false
            },
        });

        const woopa3 = await prisma.missionCommander.upsert({
            where: { name: "Woopa 3" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mainStack: "Java",
                currentEnrollment: true,
                hasAzureCertification: false
            },
        });

        const woopa_customized = await prisma.missionCommander.upsert({
            where: { name: "woopa_Customized" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mainStack: "C#",
                currentEnrollment: true,
                hasAzureCertification: false
            },
        });

        console.log("Create 4 Mission Commanders");
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();