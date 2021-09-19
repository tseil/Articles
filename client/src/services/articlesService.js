import axios from 'axios'

export async function getArticles() {
    const result = await axios.get("/article/");
    return result.data.data;
}

export async function editArticle(serial_number, type, name) {
    const result = await axios.put("/article/", { serial_number: serial_number, type: type, name: name })
    return result.data.text;
}

export async function addArticle(serial_number, type, name) {
    const result = await axios.post("/article/", { serial_number: serial_number, type: type, name: name });
    return result.data.text;
}

export async function deleteArticle(serial_number) {
    const result = await axios.delete("/article/?serial_number=" + serial_number)
    return result.data.text;
}

export async function archivedArticle(serial_number) {
    const result = await axios.put("/article/archived", { serial_number: serial_number });
    return result.data.text;
}

export async function repairedArticle(serial_number, status) {
    if (status == "En bon état")
        status = "A réparer"
    else if (status == "A réparer")
        status = "En bon état"

    const result = await axios.put("/article/repair", { serial_number: serial_number, status: status });
    return result.data.text;
}