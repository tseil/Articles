import { Request, Response } from "express"
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

/**
 * Insertion de l'article en base de données
 * @returns 
 */
async function getArticle(req: Request, res: Response) {
    try {
        // Ouverture de la base de données
        open({
            filename: 'db/articles.db',
            driver: sqlite3.Database
        }).then(async (db) => {
            // Execution de la requête insert into
            const result = await db.all("SELECT * FROM articles")
            // Envoi de la réponse avec le status 200
            res.status(200).json({
                text: 'Succés',
                data: result
            })

        })
    }
    catch (error: any) {
        return res.status(500).json({ error })
    }

}

/**
 * Insertion de l'article en base de données
 * @returns 
 */
async function addArticle(req: Request, res: Response) {
    // Récupération des données de la query
    const { name, type, serial_number } = req.body as unknown as Article;
    if (!name || !type || !serial_number) {
        return res.status(400).json({
            text: "Requête invalide"
        })
    }

    // Objet article
    const article: Article = {
        name,
        type,
        serial_number
    }

    try {
        // Ouverture de la base de données
        open({
            filename: 'db/articles.db',
            driver: sqlite3.Database
        }).then(async (db) => {
            // Execution de la requête insert into
            const result = await db.run('INSERT INTO articles (serial_number, name, type) VALUES (:serial_number, :name, :type)', {
                ':serial_number': article.serial_number,
                ':name': article.name,
                ':type': article.type
            })
            // Si on a un changement, notre requête est passée
            if (result.changes == 1) {
                // Envoi de la réponse avec le status 200
                res.status(200).json({
                    text: 'Succés'
                })
            }
        })
    }
    catch (error: any) {
        return res.status(500).json({ error })
    }

}

/**
 * Edition de l'article en base de données
 * @returns 
 */
async function editArticle(req: Request, res: Response) {
    // Récupération des données de la query
    const { name, type, serial_number } = req.body as unknown as Article;
    if (!name || !type || !serial_number) {
        return res.status(400).json({
            text: "Requête invalide"
        })
    }

    // Objet article
    const article: Article = {
        name,
        type,
        serial_number
    }

    try {
        // Ouverture de la base de données
        open({
            filename: 'db/articles.db',
            driver: sqlite3.Database
        }).then(async (db) => {
            // Execution de la requête update
            const result = await db.run('UPDATE articles SET name = :name, type = :type, modification_date = :modification_date WHERE serial_number = :serial_number', {
                ':serial_number': article.serial_number,
                ':name': article.name,
                ':type': article.type,
                ':modification_date': new Date().toJSON()
            })
            // Si on a un changement, notre requête est passée
            if (result.changes == 1) {
                // Envoi de la réponse avec le status 200
                res.status(200).json({
                    text: 'Succés'
                })
            }
        })
    }
    catch (error: any) {
        return res.status(500).json({ error })
    }
}

/**
 * Suppression de l'article en base de données
 * @returns 
 */
async function deleteArticle(req: Request, res: Response) {
    // Récupération des données de la query
    const { serial_number } = req.query as unknown as Article;
    if (!serial_number) {
        return res.status(400).json({
            text: "Requête invalide"
        })
    }

    // Objet article
    const article: Article = {
        serial_number
    }

    try {
        // Ouverture de la base de données
        open({
            filename: 'db/articles.db',
            driver: sqlite3.Database
        }).then(async (db) => {
            // Execution de la requête delete
            const result = await db.run('DELETE FROM articles WHERE serial_number = :serial_number', {
                ':serial_number': article.serial_number
            })
            // Envoi de la réponse avec le status 200
            res.status(200).json({
                text: 'Succés'
            })

        })
    }
    catch (error: any) {
        return res.status(500).json({ error })
    }
}

/**
 * Suppression de l'article en base de données
 * @returns 
 */
async function archivedArticle(req: Request, res: Response) {
    // Récupération des données de la query
    const { serial_number } = req.body as unknown as Article;
    if (!serial_number) {
        return res.status(400).json({
            text: "Requête invalide"
        })
    }

    // Objet article
    const article: Article = {
        serial_number
    }

    try {
        // Ouverture de la base de données
        open({
            filename: 'db/articles.db',
            driver: sqlite3.Database
        }).then(async (db) => {
            // Execution de la requête delete
            const result = await db.run('UPDATE articles SET isArchived = true WHERE serial_number = :serial_number', {
                ':serial_number': article.serial_number
            })
            // Envoi de la réponse avec le status 200
            res.status(200).json({
                text: 'Succés'
            })

        })
    }
    catch (error: any) {
        return res.status(500).json({ error })
    }
}

/**
 * Suppression de l'article en base de données
 * @returns 
 */
async function repairArticle(req: Request, res: Response) {
    // Récupération des données de la query
    const { serial_number, status } = req.body as unknown as Article;
    if (!serial_number || !status) {
        return res.status(400).json({
            text: "Requête invalide"
        })
    }

    // Objet article
    const article: Article = {
        serial_number,
        status
    }

    try {
        // Ouverture de la base de données
        open({
            filename: 'db/articles.db',
            driver: sqlite3.Database
        }).then(async (db) => {
            // Execution de la requête delete
            const result = await db.run('UPDATE articles SET status = :status WHERE serial_number = :serial_number', {
                ':serial_number': article.serial_number,
                ':status': article.status
            })
            // Envoi de la réponse avec le status 200
            res.status(200).json({
                text: 'Succés'
            })

        })
    }
    catch (error: any) {
        return res.status(500).json({ error })
    }
}

exports.getArticle = getArticle;
exports.addArticle = addArticle;
exports.editArticle = editArticle;
exports.deleteArticle = deleteArticle;
exports.archivedArticle = archivedArticle;
exports.repairArticle = repairArticle;