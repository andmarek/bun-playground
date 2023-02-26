//const response = await fetch("https://bun.sh/manifest.json");
//const result = (await response.json()) as any;

//console.log("what hwat ")

/* Default must be 3000 */
Bun.serve({
    port: 8080,
    hostname: "localhost",
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") return new Response(`Home page!`);
        if (url.pathname === "/indexer") return new Response(Bun.file("./src/index.html"));
        if (url.pathname === "/blog") return new Response("Blog!");
        return new Response(`404!`);
    },
});
