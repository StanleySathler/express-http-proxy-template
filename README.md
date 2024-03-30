# express-http-proxy-template

A simple Express HTTP Proxy so you can have micro apps running on the same domain and avoid CORS issues. Mostly useful for local environments.

Suppose you're developing a front-end and a back-end in your local environment. Your front-end runs at localhost:3000, your back-end runs at localhost:3001. They're essentially different origins, and for your front-end to communicate with your back-end, you need to either allow some CORS permissions, or run a proxy.
