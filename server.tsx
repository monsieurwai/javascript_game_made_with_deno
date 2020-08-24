// @ts-ignore
import {Application, send} from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

app.addEventListener("error", (evt) => {
    // Will log the thrown error to the console.
    console.log(evt.error);
});

// @ts-ignore
app.use(async context => {
    // @ts-ignore
    await send(context, context.request.url.pathname, {
        // @ts-ignore
        root: `${Deno.cwd()}/public`,
        index: "view.html",
    });
});

app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.log(
        `Listening on: ${secure ? "https://" : "http://"}${
            hostname ?? "localhost"
        }:${port}`
    );
});

// @ts-ignore
await app.listen({port: 8000});