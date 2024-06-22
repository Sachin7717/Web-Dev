const webSocket = new WebSocket('wss://your-signaling-server.com');
    let peerConnection;
    const config = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };

    webSocket.onmessage = async (event) => {
      const message = JSON.parse(event.data);
      if (message.offer) {
        await handleOffer(message.offer);
      } else if (message.answer) {
        await handleAnswer(message.answer);
      } else if (message.iceCandidate) {
        await handleIceCandidate(message.iceCandidate);
      }
    };

    async function handleOffer(offer) {
      peerConnection = createPeerConnection();
      await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      webSocket.send(JSON.stringify({ answer: answer }));
    }

    async function handleAnswer(answer) {
      await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    }

    async function handleIceCandidate(candidate) {
      try {
        await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
      } catch (e) {
        console.error('Error adding received ice candidate', e);
      }
    }

    function createPeerConnection() {
      const pc = new RTCPeerConnection(config);

      pc.onicecandidate = ({ candidate }) => {
        if (candidate) {
          webSocket.send(JSON.stringify({ iceCandidate: candidate }));
        }
      };

      pc.ondatachannel = ({ channel }) => {
        setupDataChannel(channel);
      };

      return pc;
    }

    function setupDataChannel(channel) {
      channel.onopen = () => console.log('Data channel opened');
      channel.onmessage = (event) => {
        const messagesDiv = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = Peer: ${event.data};
        messagesDiv.appendChild(newMessage);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
      };
    }

    document.getElementById('send').onclick = () => {
      const messageInput = document.getElementById('message');
      const message = messageInput.value;
      if (message && peerConnection && peerConnection.dataChannel) {
        peerConnection.dataChannel.send(message);
        const messagesDiv = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = You: ${message};
        messagesDiv.appendChild(newMessage);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        messageInput.value = '';
      }
    };

    async function initiateConnection() {
      peerConnection = createPeerConnection();
      const dataChannel = peerConnection.createDataChannel('chat');
      setupDataChannel(dataChannel);

      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      webSocket.send(JSON.stringify({ offer: offer }));
    }

    window.onload = () => {
      initiateConnection();
    };