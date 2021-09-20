import axios from 'axios'

/**
 * Appel API pour récupérer la liste des articles
 * @returns Liste des articles
 */
export async function getArticles() {
    const result = await axios.get("/article/");
    return result.data.data;
}

/**
 * Appel API pour modifier un article
 * @param {*} serial_number : Numéro de série
 * @param {*} type : Type de l'article
 * @param {*} name : Nom de l'article
 * @returns Succés ou Requête invalide
 */
export async function editArticle(serial_number, type, name) {
    const result = await axios.put("/article/", { serial_number: serial_number, type: type, name: name })
    return result.data.text;
}

/**
 * Appel API pour ajouter un article
 * @param {*} serial_number : Numéro de série
 * @param {*} type : Type de l'article
 * @param {*} name : Nom de l'article
 * @returns Succés ou Requête invalide
 */
export async function addArticle(serial_number, type, name) {
    const result = await axios.post("/article/", { serial_number: serial_number, type: type, name: name });
    return result.data.text;
}

/**
 * Appel API pour supprimer un article
 * @param {*} serial_number : Numéro de série
 * @returns Succés ou Requête invalide
 */
export async function deleteArticle(serial_number) {
    const result = await axios.delete("/article/?serial_number=" + serial_number)
    return result.data.text;
}

/**
 * Appel API pour archiver un article
 * @param {*} serial_number : Numéro de série
 * @returns Succés ou Requête invalide
 */
export async function archivedArticle(serial_number) {
    const result = await axios.put("/article/archived", { serial_number: serial_number });
    return result.data.text;
}

/**
 * Appel API pour modifier l'état un article
 * @param {*} serial_number : Numéro de série
 * @param {*} status : Etat de l'article
 * @returns Succés ou Requête invalide
 */
export async function repairedArticle(serial_number, status) {
    if (status == "En bon état")
        status = "A réparer"
    else if (status == "A réparer")
        status = "En bon état"

    const result = await axios.put("/article/repair", { serial_number: serial_number, status: status });
    return result.data.text;
}