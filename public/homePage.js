
const logoutButton1 = new LogoutButton();

logoutButton1.action = () => ApiConnector.logout(response => location.reload());

ApiConnector.current(response => ProfileWidget.showProfile(response.data))

const ratesBoard1 = new RatesBoard();

function rates() {
    ApiConnector.getStocks(response => {
        ratesBoard1.clearTable();
        ratesBoard1.fillTable(response.data);
    }
    )
}
rates();

setInterval(rates, 60000);

const moneyManager1 = new MoneyManager();

moneyManager1.addMoneyCallback = (data) => ApiConnector.addMoney(data, response => {
    if (response.success === true) {
        ProfileWidget.showProfile(response.data);
        moneyManager1.setMessage(true, 'Пополнение успешно');
    } else {
        moneyManager1.setMessage(false, 'Ошибка пополнения');
    }

})

moneyManager1.conversionMoneyCallback = (data) => ApiConnector.convertMoney(data, response => {
    if (response.success === true) {
        ProfileWidget.showProfile(response.data);
        moneyManager1.setMessage(true, 'Конвертация прошла успешно');
    } else {
        moneyManager1.setMessage(false, 'Ошибка конвертации');
    }

})

moneyManager1.sendMoneyCallback = (data) => ApiConnector.transferMoney(data, response => {
    if (response.success === true) {
        ProfileWidget.showProfile(response.data);
        moneyManager1.setMessage(true, 'Деньги успешно переведены');
    } else {
        moneyManager1.setMessage(false, 'Ошибка перевода');
    }
})


favoritesWidgetnew1 = new FavoritesWidget();

ApiConnector.getFavorites(response => {
    favoritesWidgetnew1.clearTable();
    favoritesWidgetnew1.fillTable(response.data);
    moneyManager1.updateUsersList(response.data);
}
)

favoritesWidgetnew1.addUserCallback = (data) => ApiConnector.addUserToFavorites(data, response => {
    if (response.success === true) {
        favoritesWidgetnew1.clearTable();
        favoritesWidgetnew1.fillTable(response.data);
        moneyManager1.updateUsersList(response.data);
        favoritesWidgetnew1.setMessage(true, 'Добавление в адресную книгу успешно');
    } else {
        favoritesWidgetnew1.setMessage(false, 'Ошибка добавления');
    }

})

favoritesWidgetnew1.removeUserCallback = (data) => ApiConnector.removeUserFromFavorites(data, response => {
    if (response.success === true) {
        favoritesWidgetnew1.clearTable();
        favoritesWidgetnew1.fillTable(response.data);
        moneyManager1.updateUsersList(response.data);
        favoritesWidgetnew1.setMessage(true, 'Удаление из адресной книги успешно');
    } else {
        favoritesWidgetnew1.setMessage(false, 'Ошибка удаления');
    }

})



