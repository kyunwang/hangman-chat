const h = require('./helpers');
const $ = h.$;
// const $$ = h.$$;

(function () {
	const socket = io();

	const chat = {
		init: function () {
			const self = this;

			$('#chat-form').addEventListener('submit', evt => {
				evt.preventDefault();
				socket.emit('chat message', $('#m').value);
				$('#m').value = '';
				return false;
			});

			socket.on('chat message', function (msg) {
				self.addMessage(msg);
			});
		},
		addMessage: function (msg) {
			$('#messages')
				.appendChild(this.createMessage('li', msg));
		},
		createMessage: function (element = 'li', msg = '') {
			const node = document.createElement(element);
			const message = document.createTextNode(msg);
			node.appendChild(message);
			return node;
		}
	}

	chat.init();
})()