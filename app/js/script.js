"use strict";

var modal = function () {

	var st = {},
	    dom = {},
	    events = void 0,
	    fn = void 0,
	    findDatos = {},
	    catchDom = void 0,
	    suscribeEvents = void 0,
	    asyncatchDom = void 0,
	    asynSuscribeEvents = void 0,
	    initialize = void 0;

	st = {
		linkModal: ".link_modal a",
		modal: {
			parent: ".modal-fixed",
			close: ".close",
			tpl: " <div class='modal-fixed'><div class='modal-wrap'> <div class='modal-content'>asdasdasd</div><span class='close'></span></div></div>"
		}

	};

	catchDom = function catchDom() {
		dom.linkModal = $(st.linkModal);
	};

	asyncatchDom = function asyncatchDom() {
		dom.parent = $(st.modal.parent);
		dom.close = $(st.modal.close, st.modal.parent);
	};

	suscribeEvents = function suscribeEvents() {
		dom.linkModal.on("click", events.openModal);
	};

	asynSuscribeEvents = function asynSuscribeEvents() {
		dom.close.on("click", events.close);
		dom.parent.on("click", events.close);
	};

	events = {

		openModal: function openModal() {
			fn.open();
			asyncatchDom();
			asynSuscribeEvents();
		},

		close: function close() {
			fn.close();
		}
	};

	fn = {

		open: function open() {
			var modal = $(st.modal.tpl).appendTo("body");
			modal.css({
				"display": "flex",
				"justify-content": "center",
				"align-items": "center"
			});

			console.log("width document : ", $(document).width());
			console.log("width window : ", $(window).width());
		},
		close: function close(callback) {

			dom.parent.remove();
			callback != undefined ? fn.callback() : '';
		},
		afterClose: function afterClose(opts) {
			close(opts);
		}

	};

	initialize = function initialize() {
		catchDom();
		suscribeEvents();
	};

	return {
		init: initialize
	};
}();

modal.init();