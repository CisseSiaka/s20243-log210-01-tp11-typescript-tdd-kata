import dotenv from 'dotenv';
dotenv.config();

class Reflexion {
    static async createInstance(): Promise<any> {
        const classname = process.env.CLASS_NAME; // devrait être "MyClass"
        if (!classname) {
            throw new Error("CLASS_NAME n'est pas défini dans les variables d'environnement");
        }

        try {
            const module = await import(`./${classname}`);
            const Class = module.default;
            const ClassInstance = new Class();
            console.log(`Instance de la classe ${classname} créée avec succès.`);
            return ClassInstance;
        } catch (e) {
            throw new Error(`Erreur lors de l'importation ou de l'instanciation de la classe "${classname}": ${e.message}`);
        }
    }
}

export default Reflexion;
