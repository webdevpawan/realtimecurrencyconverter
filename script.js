let selectCurrency = "https://api.apilayer.com/exchangerates_data/symbols"

$.ajax({
    method: "GET",
    headers: { "apikey": "AxQD1IdIraJyfZrFMfnpwtZirHUvzjGj" },
    url: selectCurrency,
    success: function (data) {
        let result = "";
        for(let symbol in data.symbols){
            result += `<option value="${symbol}">${symbol}</option>`
        }
        $('#from').html(`${result}`)
        $('#to').html(`${result}`)
    },
    error: function (err) {
        console.log(err);
    }
})

$("#exchangeBtn").click(function () {

    const to = $('#to').val();
    const from = $('#from').val();
    const amount = $('#amount').val();

    let endpoint = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`

    $.ajax({
        method: "GET",
        headers: { "apikey": "AxQD1IdIraJyfZrFMfnpwtZirHUvzjGj" },
        url: endpoint,
        success: function (data) {
            let result = data.result.toFixed(2);
            $("#result").html(`<span>${result} ${to}</span>`);
        },
        error: function (err) {
            console.log(err);
        }
    })
})

