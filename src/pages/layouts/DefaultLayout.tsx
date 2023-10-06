interface Props {
    title: string
    children?: any
}

export const DefaultLayout = ({ title, children }: Props) => {
    return (
        <>
            {'<!DOCTYPE html>'}
            <html lang='en' data-theme='dark'>
                <head>
                    <meta charset='UTF-8' />
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1.0'
                    />
                    <title>{title}</title>
                    <link rel='stylesheet' href='/public/tailwind.css' />
                </head>
                <body>{children}</body>
                <script
                    src='https://unpkg.com/htmx.org@1.9.5'
                    integrity='sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO'
                    crossorigin='anonymous'
                ></script>
            </html>
        </>
    )
}
