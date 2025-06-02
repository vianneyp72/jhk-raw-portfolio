async function getViews() {
    try {
        let res = await fetch("https://jynbuatk5xfiixox6uxaackchq0gszmh.lambda-url.us-east-1.on.aws/");
        let data = await res.json();
        views = data["views"]
        return(views)
    } catch (err) {
        console.error("Error fetching views:", err);
    }
}
