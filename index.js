const $typedText = $('#typed-text');
const $output = $('#output');
const maxLength = 26;

$(document).on('keydown', function(event) {
    const key = event.key;
    const currentText = $typedText.text();

    if ((currentText.length >= maxLength) && !(key === 'Backspace' || key === 'Enter')) {
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
            $typedText.append(key);
        }
    }
});
