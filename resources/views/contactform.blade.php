<!doctype html>

    <html lang="en">
        <body>
            <div>
                <h1>
                    Contact Form
                </h1>
                <p>Name: {{ $contact->name }} </p>
                <p>Email: {{ $contact->email }} </p>
                <p>Message: {{ $contact->message }} </p>
                <!-- <button type="button"> Click to verify</button> -->
            </div>
        </body>
</html>