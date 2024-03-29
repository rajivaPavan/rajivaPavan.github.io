/**
 * A class that will create a link tag for and append it to the head
 */
class LinkTag {
    //constructor takes an object with the following properties
    //href, integrity[optional]
    constructor({href, integrity}) {
        this.href = href
        this.integrity = integrity
    }

    //create a link tag
    create() {
        const link = document.createElement('link')
        link.setAttribute('rel', 'stylesheet')
        link.setAttribute('href', this.href)
        if (this.integrity) {
            link.setAttribute('integrity', this.integrity)
            link.setAttribute('crossorigin', 'anonymous')
        }
        return link
    }

    //add after the title tag in the head
    addAfterTitleTag() {
        const title = document.querySelector('title')
        title.insertAdjacentElement('afterend', this.create())
    }
}

/**
 * A class that will create a script tag for and append it to the body
 */
class ScriptTag {
    //constructor takes an object with the following properties
    //src, integrity[optional]
    constructor({src, integrity}) {
        this.src = src
        this.integrity = integrity
    }

    //create a script tag
    create() {
        const script = document.createElement('script')
        script.setAttribute('src', this.src)
        if (this.integrity) {
            script.setAttribute('integrity', this.integrity)
            script.setAttribute('crossorigin', 'anonymous')
        }
        return script
    }

    //add to the end of the body
    addToEndOfBody() {
        const body = document.querySelector('body')
        body.insertAdjacentElement('beforeend', this.create())
    }
}

//objects of links to be added to the head
export const links = {
    bootstrap: {
        prod: new LinkTag({
            href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css',
            integrity: 'sha512-Ez0cGzNzHR1tYAv56860NLspgUGuQw16GiOOp/I2LuTmpSK9xDXlgJz3XN4cnpXWDmkNBKXR/VDMTCnAaEooxA=='
        }),
    }
}
export const scripts = {
    bootstrap: {
        prod: new ScriptTag({
            href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.bundle.min.js',
            integrity: 'sha512-sH8JPhKJUeA9PWk3eOcOl8U+lfZTgtBXD41q6cO/slwxGHCxKcW45K4oPCUhHG7NMB4mbKEddVmPuTXtpbCbFA=='
        }),
    }
}