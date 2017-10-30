function display(state) {
    $("#code").val(state.str);
}

function shuffle(state) {
    if (state.shuffle == true) {
        var numberBlock = $('.numeral-block');

        var numbers = numberBlock.children('.buttons-num').sort(function(){
            return Math.random() - 0.5;
            }).detach();

        var blanks = numberBlock.children('.buttons-blank').detach();

        numbers.splice(-1, 0, blanks[0]);
        numbers.push(blanks[1]);

        numberBlock.append(numbers);
    }
}

function setCodeType(type) {
    $('#code').get(0).setAttribute('type', type);
}

$('document').ready(function(){
    var state = {str: '', hidden: false, shuffle: false};

    $('.buttons-num-js').click(function(evt){
        var digit = $(evt.currentTarget).data('value');
        if (state.str.length < 4) {
            state.str = state.str + digit;
        };
        display(state);
        shuffle(state);
    });


    $('.buttons-func-js.cancel').click(function(evt){
        state.str = state.str.slice(0, -1);;
        display(state);
    });

    $('.buttons-func-js.clear').click(function(evt){
        state.str = '';
        display(state);
    });

    $('.buttons-func-js.enter').click(function(evt){
        alert(state.str);
    });

    $('.buttons-func-js.hide-show').click(function(evt){
        var button = $(evt.currentTarget);
        if(state.hidden == true) {
            state.hidden = false;
            button.text('hide');
            setCodeType('text');
        } else {
            state.hidden = true;
            button.text('show');
            setCodeType('password');
        }
    });

    $('.shuffle-mode-js').click(function(evt){
        var mode = $('span', evt.currentTarget);
        if(state.shuffle == true) {
            state.shuffle = false;
            mode.text('Off');
        } else {
            state.shuffle = true;
            mode.text('On');
        }
    })
});
