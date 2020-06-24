(function() {
  $(function() {
    return app.initialize();
  });

  window.app = {
    initialize: function() {
      this.is_error = false;
      return this.setBind();
    },
    setBind: function() {
      var _this;
      _this = this;
      $('#form_send').on('click', function() {
        _this.is_error = false;
        _this.checkRequest();
        _this.checkName();
        _this.checkCompanyName();
        _this.checkAddress();
        _this.checkTel();
        _this.checkMail();
//        _this.checkBody();
        return _this.judgeSubmit();
      });
      $('input[name="request"]').click(function() {
        return _this.checkRequest();
      });
      $('input[name="name"]').keyup(function() {
        return _this.checkName();
      });
      $('input[name="company_name"]').keyup(function() {
        return _this.checkCompanyName();
      });
      $('textarea[name="address"]').keyup(function() {
        return _this.checkAddress();
      });
      $('input[name="tel"]').blur(function() {
        return _this.checkTel();
      });
      $('input[name="mail"]').blur(function() {
        return _this.checkMail();
      });
      return $('textarea[name="body"]').change(function() {
        return _this.checkBody();
      });
    },
    checkRequest: function() {
      if ($('input[name="request"]:checked').prop('checked')) {
        return $('.alert_request').text('');
      } else {
        $('.alert_request').text('※必須項目です');
        return this.is_error = true;
      }
    },
    checkName: function() {
      var get_val;
      get_val = $('input[name="name"]').val();
      if (get_val === '') {
        $('.alert_name').text('※必須項目です');
        return this.is_error = true;
      } else {
        return $('.alert_name').text('');
      }
    },
    checkCompanyName: function() {
      var get_val;
      get_val = $('input[name="company_name"]').val();
      if (get_val === '') {
        $('.alert_company_name').text('※必須項目です');
        return this.is_error = true;
      } else {
        return $('.alert_company_name').text('');
      }
    },
    checkAddress: function() {
      var get_val;
      get_val = $('textarea[name="address"]').val();
      if (get_val === '') {
        $('.alert_address').text('※必須項目です');
        return this.is_error = true;
      } else {
        return $('.alert_address').text('');
      }
    },
    checkTel: function() {
      var check_val, count;
      check_val = $('input[name="tel"]').val();
      count = check_val.length;
      if (check_val === '') {
        $('.alert_tel').text('※必須項目です');
        return this.is_error = true;
      } else if (check_val.match(((10 <= count && count <= 13)) && check_val.match(/^[0-9\- ０-９]+$/))) {
        return $('.alert_tel').text('');
      } else {
        $('.alert_tel').text('※入力形式が異なります');
        return this.is_error = true;
      }
    },
    checkMail: function() {
      var check_val;
      check_val = $('input[name="mail"]').val();
      if (check_val === '') {
        $('.alert_mail').text('※必須項目です');
        return this.is_error = true;
      } else if (check_val.match(/^[A-Za-z0-9\w\.-]+@[\w\.-]+\.\w{2,}$/)) {
        return $('.alert_mail').text('');
      } else {
        $('.alert_mail').text('※入力形式が異なります');
        return this.is_error = true;
      }
    },
    checkBody: function() {
      var check_val;
      check_val = $('textarea[name="body"]').val();
      if (check_val === '') {
        $('.alert_body').text('※必須項目です');
        return this.is_error = true;
      } else {
        return $('.alert_body').text('');
      }
    },
    judgeSubmit: function() {
      var top;
      if (this.is_error) {
        top = $('#form').offset().top;
        window.scrollTo(0, top);
        return false;
      } else {
        return $('form').submit();
      }
    }
  };

}).call(this);
