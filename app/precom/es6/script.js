let modal = (()=>{
	
	let st              = {},
      dom             = {},      
      events,
      fn,
      findDatos={},
      catchDom,
      suscribeEvents,
      asyncatchDom,
	  asynSuscribeEvents,
      initialize;

	st = {
		linkModal 		: ".link_modal a",
		modal 			: {
			parent	: ".modal-fixed",
			content	: ".modal-content",
			close	: ".close",
			tpl 	: " <div class='modal-fixed'><div class='modal-wrap'> <div class='modal-content'>asdasdasd</div><span class='close'></span></div></div>",
		}

	}
			
	catchDom = () => {
		dom.linkModal 	= $(st.linkModal);
	}

	asyncatchDom = () => {
		dom.parent 		= $(st.modal.parent);
		dom.close 		= $(st.modal.close, st.modal.parent);
		dom.content 	= $(st.modal.content, st.modal.parent);
	}

	suscribeEvents = () => {
		dom.linkModal.on("click", events.openModal) ;
	}

	asynSuscribeEvents = () =>{
		dom.close.on("click", events.close) ;
		dom.parent.on("click", events.close) ;
	}
	
	events = {

		openModal : () =>{
			fn.open();
			asyncatchDom();
			asynSuscribeEvents();
		},

		close 	: () =>{
			fn.close();
		}
	}
	
	fn = {

		open : () =>{
			let modal = $(st.modal.tpl).appendTo("body");
			modal.css({
					"display"			: "flex",
					"justify-content" 	:"center",
					"align-items"		: "center"
			});

			let html = $($(".link_modal a").attr("data-href"));
			dom.content.append(html);

		},

		close : (callback) =>{

			dom.parent.remove();
			callback!= undefined ? fn.callback() : ''
		},
		afterClose : (opts) =>{
			close(opts);
		}



		
	}
	
  	initialize = () => {
    catchDom();
    suscribeEvents();

		
  };
	
	return{
		init : initialize
	}
})();

modal.init();
