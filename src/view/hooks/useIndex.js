import $ from 'jquery';

export default function useIndex() {
    function handleClick() {
        if ($('#born').val() === '') {
            alert('Data vazia');
            return
        }
        const part = $('#born').val().split('-')
        const day = Number(part[2])
        if (day <= 0) {
            alert('Data inválida');
            return
        }
        const month = Number(part[1])
        switch (month) {
            case 1:
                if (day >= 21) {
                    $('div#answer').html('Aquário')
                } else {
                    $('div#answer').html('Capricórnio')
                }
                break;
            case 2:
                if (day >= 19) {
                    $('div#answer').html('Peixes')
                } else {
                    $('div#answer').html('Aquário')
                }
                break;
            case 3:
                if (day >= 21) {
                    $('div#answer').html('Áries')
                } else {
                    $('div#answer').html('Peixes')
                }
                break;
            case 4:
                if (day >= 21) {
                    $('div#answer').html('Touro')
                } else {
                    $('div#answer').html('Áries')
                }
                break;
            case 5:
                if (day >= 21) {
                    $('div#answer').html('Gêmeos')
                } else {
                    $('div#answer').html('Touro')
                }
                break;
            case 6:
                if (day >= 21) {
                    $('div#answer').html('Câncer')
                } else {
                    $('div#answer').html('Gêmeos')
                }
                break;
            case 7:
                if (day >= 23) {
                    $('div#answer').html('Leão')
                } else {
                    $('div#answer').html('Câncer')
                }
                break;
            case 8:
                if (day >= 23) {
                    $('div#answer').html('Virgem')
                } else {
                    $('div#answer').html('Leão')
                }
                break;
            case 9:
                if (day >= 23) {
                    $('div#answer').html('Libra')
                } else {
                    $('div#answer').html('Virgem')
                }
                break;
            case 10:
                if (day >= 23) {
                    $('div#answer').html('Escorpião')
                } else {
                    $('div#answer').html('Libra')
                }
                break;
            case 11:
                if (day >= 22) {
                    $('div#answer').html('Sagitário')
                } else {
                    $('div#answer').html('Escorpião')
                }
                break;
            default:
                if (day >= 22) {
                    $('div#answer').html('Capricórnio')
                } else {
                    $('div#answer').html('Sagitário')
                }
                break;
        }
    }
  return {
    handleClick
  };
}
