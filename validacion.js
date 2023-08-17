document.addEventListener("DOMContentLoaded", function () {
    const d = document;

    const $form = d.querySelector("contact-form"),
        $input = d.querySelectorAll("input[required]");


    $input.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.setAttribute(input.name, input.name);
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
        console.dir($span)
    });

    d.addEventListener("keyup", (e) => {
        if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
                pattern = $input.pattern;
            // console.log($input, pattern)
            if (pattern && $input.value !== "") {
                let regex = new RegExp(pattern);
                return !regex.exec($input.value) 
                    ? d.querySelector(`[${$input.name}=${$input.name}]`).classList.add("is-active")
                    : d.querySelector(`[${$input.name}=${$input.name}]`).classList.remove("is-active");
            }

            // if (!pattern) { }
        }
    })

});

