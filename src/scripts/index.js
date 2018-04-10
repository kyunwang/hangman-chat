const h = require('./helpers');
const $ = h.$;
// const $$ = h.$$;

(function () {
	const socket = io();

	const testWord = 'wonderful';

	const chat = {
		init: function () {
			const self = this;

			// Add a submit event to the submit button
			$('#chat-form').addEventListener('submit', evt => {
				socket.emit('new message', $('#m').value);
				
				$('#m').value = '';
				evt.preventDefault();
				return false;
			});

			chatSockets.init();
		},
		addMessage: function (msg) {
			// Append the new message to the view
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

	const chatSockets = {
		init: function() {
			socket.on('new message', function (msg) {
				chat.addMessage(msg);
			});
			
			
		}
	}

	const hangmanSocket = {}

	chat.init();
})()