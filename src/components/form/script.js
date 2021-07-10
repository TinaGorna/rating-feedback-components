"use strict"

const MIN_MESSAGE = 5

function formValidate({feedback}) {
    const isValid = feedback && feedback.length > MIN_MESSAGE
    return {
        isValid
    }
}

function collectsData(form) {
    return [].slice.apply(form.elements).reduce((acc, elem) => {
        const {name, value} = elem
        if (!name) {
            return acc
        }
        return {
            ...acc,
            [name]: value,
        }
    }, {})
}

async function sendRequest(formData) {
    let response = await fetch('https://datestat.me/data.php', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'content-type': 'application/json'
        }
    });

    if (!response.ok) {
        return {error: 'error'}
    }

    const result = await response.json();
    if (!result.success) {
        return {error: 'error'}
    }

    return {data: result}
}

document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('form');
        form.addEventListener('submit', formSend);

        async function formSend(e) {
            e.preventDefault();

            const formData = collectsData(form);

            const {isValid} = formValidate(formData);

            if (!isValid) {
                alert('Field is required');
                return
            }

            try {
                form.classList.add('_sending');
                const {error, data} = await sendRequest(formData)
                if (error) {
                    throw new Error(error)
                }
                form.reset();
            } catch (e) {
                alert('Ошибка');
            } finally {
                form.classList.remove('_sending');
            }

        }


    }
);
