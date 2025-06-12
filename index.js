const $typedText = $('#typed-text');
const $cursor = $('#cursor');
const maxLength = 80;

$(document).on('keydown', function(event) {
    const key = event.key;
    const currentText = $typedText.text();

    // Enforce max length unless Backspace or Enter
    if (currentText.length >= maxLength && key !== 'Backspace' && key !== 'Enter') {
        event.preventDefault();
        return;
    }

    if (key.length === 1 || key === 'Backspace' || key === 'Enter') {
        event.preventDefault();

        if (key === 'Backspace') {
            $typedText.text(currentText.slice(0, -1));
        } else if (key === 'Enter') {
            $typedText.text('');
        } else {
            $typedText.text(currentText + key);
        }

        // Move the cursor after the updated text
        $('#output').append($cursor);
    }
});
