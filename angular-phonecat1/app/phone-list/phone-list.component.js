angular.
  module('phoneList').
  component('phoneList', {
    // 路径相对于｀index.html｀
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.orderProp = 'age';
        this.phones = Phone.query();
    }]
  });
