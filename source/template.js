export const template_home = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset ="utf-8">
        <style>
            .hidden {
                display: none;
            }
        </style>
    </head>

    <title>Movie Streaming Project</title>

    <header>
        Movie Upload And Streaming
    </header>



    <body>

        <ul id="movList"></ul>

        <div id="control">
            <button id="create">Create</button>
        </div>

        <article class="viewer">

        </article>

        <p>
        <form id="create_form" class="hidden">
            <input type="file" name="posted_movie">
            <input type="submit">
        </form>
        </p>
        

    </body>
</html>
`