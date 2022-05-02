# Textual

A simple text manipulation js library.

## Install

### Download

- [textual.min.js](https://unpkg.com/@sachinkiranti/textual@1.0.0/dist/textual.min.js)

### CDN

Link directly to Textual files on [unpkg](https://unpkg.com).


``` html
<script src="https://unpkg.com/@sachinkiranti/textual@1.0.0/dist/textual.min.js"></script>
```

## Usage

```js
"Hello World".wordCount() // Count the word from the given string
"Hello World".charCount() // Count the character from the given string

"Hello World".append(" Bye !") // Append the given string "Example :" to the string i.e. 'Hello World Bye !'
"Hello World".prepend("Example : ") // Prepend the given string "Example :" to the string i.e. 'Example : Hello World'
```

## Development

This package is developed with Node.js v16.13.2 and npm v8.1.2

Install dependencies

``` sh
npm install
```

Run tests

``` sh
npm run test
```